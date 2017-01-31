/*  init  */
var pageloading = document.getElementById("loading_page");
var page1 = document.getElementById("page1");
var page2 = document.getElementById("page2");
var page3 = document.getElementById("page3");
var bgmusic = document.getElementById("music");
var bgaudio = document.getElementsByTagName("audio")[0];
var touch_y_before,
	touch_y_after,
	lens; 


/*  loadingpage 计时器  */
setTimeout(function(){
	pageloading.setAttribute("class", "page loading_done");
	pageloading.setAttribute("class", "page hide");
	page1.setAttribute("class", "page show");
},2000);

/*  music  */
 document.addEventListener("WeixinJSBridgeReady", function () { 
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

function page_hide_show_tool (x,y) { /* 滑动页面延时控制器 */
	setTimeout(function(){
		x.setAttribute("class","page show");
		y.setAttribute("class","page hide");
	},500);
}

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
		page1.setAttribute("class","page page_drop_down_this");
		page2.setAttribute("class","page page_drop_down");
		page_hide_show_tool(page2,page1);
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
		page2.setAttribute("class","page page_drop_down_this");
		page3.setAttribute("class","page page_drop_down");
		page_hide_show_tool(page3,page2);
	} else {
		page2.setAttribute("class","page page_drop_up_this");
		page1.setAttribute("class","page page_drop_up");
		page_hide_show_tool(page1,page2);
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
		page3.setAttribute("class","page page_drop_up_this");
		page2.setAttribute("class","page page_drop_up");
		page_hide_show_tool(page2,page3);
	};
},false);