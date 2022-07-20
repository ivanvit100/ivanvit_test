document.getElementById("shoot").onclick = function(){
	video = document.querySelector("#video");
	png = document.querySelector("#png").checked;
	jpg = document.querySelector("#jpg").checked;
	if (png){
		filetype = "png";
	}
	else if (jpg){
		filetype = "jpg";
	}
	else{
		filetype = "svg";
	}
	canvas = window.canvas = document.createElement("canvas");
	canvas.width = video.videoWidth;
	canvas.height = video.videoHeight;
	canvas.getContext ('2d'). drawImage (video, 0, 0, canvas.width, canvas.height);
	strDataURL = canvas.toDataURL ("image/" + filetype);
	var arr = strDataURL.split(','),
			mime = arr[0].match(/:(.*?);/)[1],
			bstr = atob(arr[1]),
			n = bstr.length,
			u8arr = new Uint8Array(n);
		while (n--) {
			u8arr[n] = bstr.charCodeAt(n);
		}
		var blob = new Blob([u8arr], {
			type: mime
		});
	url = window.URL.createObjectURL(blob);
	var a = document.createElement('a');  
		a.style.display = 'none';
		a.href = url;
		a.download = "Photo." + filetype;
		document.body.appendChild(a);
		a.click();
		setTimeout(function () {
			document.body.removeChild(a);
			window.URL.revokeObjectURL(url);
		}, 1000);
}