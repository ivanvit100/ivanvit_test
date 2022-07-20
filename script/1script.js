video = document.getElementById("video");
checkbox = document.querySelector(".checkbox");
state = document.getElementById("state-s");
progress = document.querySelector(".progress");
knobs = document.querySelector(".knobs");
layer = document.querySelector(".layer");

function togglePictureInPicture(){
	if(document.pictureInPictureElement){
		document.exitPictureInPicture();
		checkbox.checked = false;
		knobs.setAttribute("class", "knobs");
		layer.setAttribute("class", "layer");
	}else{
		if(document.pictureInPictureEnabled){
			video.requestPictureInPicture();
			checkbox.checked = true;
			knobs.setAttribute("class", "knobs knobs-on");
			layer.setAttribute("class", "layer layer-on");
		}
	}
}

ez_consent.init({
	is_always_visible: true,
	privacy_url: 'https://ivanvit.ru/',
	texts: {
		main: "Режим отображения 'Картинка в картинке' работает не во всех браузерах",
		buttons: {
			ok: "Ок",
			more: "Связаться"
		}
	}
});

window.onload = function(){
	try{
		navigator.mediaDevices.getUserMedia({ video: true, audio: false }).then(function(stream){
			video.srcObject = stream;
			video.play();
			state.innerHTML = "Доступ к камере получен";
			progress.style.border = "3px solid #ff7f26";
			video.addEventListener("click", togglePictureInPicture);		
		});
	}
	catch(err){
		console.log(err);
	}
};