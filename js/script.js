var music = document.getElementById("music");
var audio = document.getElementsByTagName("audio")[0];

music.addEventListener("touchstart",function() {
	if (audio.paused) {
		audio.play();
		music.src = "img/music.png";
	} else {
		audio.pause();
		music.src = "img/music_pause.png";
	};
},false);