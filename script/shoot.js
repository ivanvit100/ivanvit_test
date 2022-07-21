document.getElementById("shoot").onclick = function(){
	video = document.querySelector("#video");
	png = document.querySelector("#png").checked;
	jpg = document.querySelector("#jpg").checked;
	if (png){
		filetype = "png";
		name = "Photo.png";
	}
	else if (jpg){
		filetype = "jpeg";
		name = "Photo.jpg";
	}
	else{
		filetype = "webp";
		name = "Photo.webp";
	}
	canvas = window.canvas = document.createElement("canvas");
	canvas.width = video.videoWidth;
	canvas.height = video.videoHeight;
	canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
	strDataURL = canvas.toDataURL("image/" + filetype);
	a = document.createElement('a');  
	a.style.display = 'none';
	a.href = strDataURL;
	a.download = "Photo." + filetype;
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
	window.URL.revokeObjectURL(strDataURL);
}
