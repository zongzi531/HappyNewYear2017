/*  init  */
var pageloading = document.getElementById("loading_page");
var page1 = document.getElementById("page1");
var page2 = document.getElementById("page2");
var page3 = document.getElementById("page3");
var page_frame1 = document.getElementById("page_frame1");
var page_frame2 = document.getElementById("page_frame2");
var page_frame3 = document.getElementById("page_frame3");
var bgmusic = document.getElementById("music");
var bgaudio = document.getElementsByTagName("audio")[0];
var touch_start;

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


/*  loading page  */
setTimeout(function(){
	pageloading.style.display = "none";
	page_frame1.style.display = "block";
},2000);


/*  page1  */
page1.addEventListener("touchstart",function(event){
	event.preventDefault();
	touch_start = event.targetTouches[0].clientY;
},false);

page1.addEventListener("touchmove",function(event){
	event.preventDefault();
	var touch = event.targetTouches[0].clientY;
	if (touch < touch_start) {
		page1.style.top = touch - touch_start + "px";
	}
},false);

page1.addEventListener("touchend",function(event){
	event.preventDefault();
	if (parseInt(page1.style.top) < 0) {
		page1.setAttribute("class","page page_scroll");
		page1.style.top = -window.innerHeight + "px";
		page2.style.top = 0;
		page_frame2.style.display = "block";
		setTimeout(function(){
			page_frame1.style.display = "none";
			page1.setAttribute("class","page");
		},1000);
	}
},false);

/*  page2  */
page2.addEventListener("touchstart",function(event){
	event.preventDefault();
	touch_start = event.targetTouches[0].clientY;
},false);

page2.addEventListener("touchmove",function(event){
	event.preventDefault();
	var touch = event.targetTouches[0].clientY;
	if (touch < touch_start) {
		page2.style.top = touch - touch_start + "px";
	} else {
		page2.style.top = touch - touch_start + "px";
		page1.style.top = touch - touch_start - window.innerHeight + "px";
	}
},false);

page2.addEventListener("touchend",function(event){
	event.preventDefault();
	if (parseInt(page2.style.top) < 0) {
		page2.setAttribute("class","page page_scroll");
		page2.style.top = -window.innerHeight + "px";
		page3.style.top = 0;
		page_frame3.style.display = "block";
		setTimeout(function(){
			page_frame2.style.display = "none";
			page2.setAttribute("class","page");
		},1000);
	} else {
		page1.setAttribute("class","page page_scroll");
		page1.style.top = 0;
		page_frame2.style.display = "none";
		setTimeout(function(){
			page_frame1.style.display = "block";
			page1.setAttribute("class","page");
		},1000);
	}
},false);


/*  page3  */

page3.addEventListener("touchstart",function(event){
	event.preventDefault();
	touch_start = event.targetTouches[0].clientY;
},false);

page3.addEventListener("touchmove",function(event){
	event.preventDefault();
	var touch = event.targetTouches[0].clientY;
	if (touch > touch_start) {
		page3.style.top = touch - touch_start + "px";
		page2.style.top = touch - touch_start - window.innerHeight + "px";
	}
},false);

page3.addEventListener("touchend",function(event){
	event.preventDefault();
	if (parseInt(page3.style.top) > 0) {
		page2.setAttribute("class","page page_scroll");
		page2.style.top = 0;
		page3.style.top = window.innerHeight + "px";
		page_frame3.style.display = "none";
		setTimeout(function(){
			page_frame2.style.display = "block";
			page2.setAttribute("class","page");
		},1000);
	}
},false);
