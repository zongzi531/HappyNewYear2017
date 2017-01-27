/*  init  */
var page1 = document.getElementById("page1");
var page2 = document.getElementById("page2");
var page3 = document.getElementById("page3");
var bgmusic = document.getElementById("music");
var bgaudio = document.getElementsByTagName("audio")[0];
var touch_y_before,touch_y_after,lens;


/*  music  */
 document.addEventListener("WeixinJSBridgeReady", function () { 
       bgaudio.play();
   }, false); 

bgmusic.addEventListener("touchstart",function() {
	if (bgaudio.paused) {
		bgaudio.play();
		bgmusic.src = "img/music.png";
	} else {
		bgaudio.pause();
		bgmusic.src = "img/music_pause.png";
	};
},false);


/*  page1  */
page1.addEventListener("touchstart",function(event){
	var touch = event.targetTouches[0];
	touch_y_before = touch.clientY;
},false);

page1.addEventListener("touchend",function(event){
	var touch = event.changedTouches[0];
	touch_y_after = touch.clientY;
	lens = parseInt(touch_y_before - touch_y_after);
	if (lens > 0) {
		page1.style.display = "none";
		page2.style.display = "block";
	};
},false);


/*  page2  */
page2.addEventListener("touchstart",function(event){
	var touch = event.targetTouches[0];
	touch_y_before = touch.clientY;
},false);

page2.addEventListener("touchend",function(event){
	var touch = event.changedTouches[0];
	touch_y_after = touch.clientY;
	lens = parseInt(touch_y_before - touch_y_after);
	if (lens > 0) {
		page2.style.display = "none";
		page3.style.display = "block";
	} else {
		page2.style.display = "none";
		page1.style.display = "block";
	};
},false);


/*  page3  */
page3.addEventListener("touchstart",function(event){
	var touch = event.targetTouches[0];
	touch_y_before = touch.clientY;
},false);

page3.addEventListener("touchend",function(event){
	var touch = event.changedTouches[0];
	touch_y_after = touch.clientY;
	lens = parseInt(touch_y_after - touch_y_before);
	if (lens > 0) {
		page3.style.display = "none";
		page2.style.display = "block";
	};
},false);