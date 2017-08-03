// 搜索
$(function() {
	$(".search").mouseover(function() {
		$(this).find(".menuChild").show();
	}).mouseout(function() {
		$(this).find(".menuChild").hide();
	})
});

// banner
$(function(){
	var swiper = new Swiper('.swiper-container', {
	         pagination: '.swiper-pagination',
	         nextButton: '.swiper-button-next',
	         prevButton: '.swiper-button-prev',
	         slidesPerView: 1, //页面显示图的张数
	         paginationClickable: true,
	         spaceBetween: 30,//俩图之间的距离
	         loop: true,//是否循环滚动
	         centeredSlides: true,
	    	 autoplay: 2500,//换图间隔时间
	     	 autoplayDisableOnInteraction: false,
	     	 autoHeight: true //随图片高度自动变化
	});
});

// 首页项目分类
$(function(){
	$(".prorit_nav li:first").addClass("li_active");
	$(".prorit_content>div:first").show();
	$(".prorit_nav li").hover(function(){
		var $t=$(this).index();
		$(".prorit_nav li").eq($t).addClass('li_active').siblings().removeClass('li_active');
		$(".prorit_content>.prorit_img").eq($t).show().siblings().hide();
	},function(){})
})
//团队精英
$(function(){
	var swiper2 = new Swiper('.swiper-container2', {
	       	 slidesPerView: 1, //页面显示图的张数	         
	         spaceBetween: 0,//俩图之间的距离
	         loop: true,//是否循环滚动
	         centeredSlides: true,
	    	 autoplay: 3500,//换图间隔时间
	     	 autoplayDisableOnInteraction: false,
	     	 autoHeight: true //随图片高度自动变化
	});
});


//无限滚动

$(function(){
	if(document.getElementById('demo')){
		  var speed=20; //数字越大速度越慢
		  var tab=document.getElementById("demo");
		  var tab1=document.getElementById("demo1");
		  var tab2=document.getElementById("demo2");
		  tab2.innerHTML=tab1.innerHTML;
		function marquee()
		  {
			if(tab1.offsetWidth-tab.scrollLeft<=0) 
			tab.scrollLeft=0;	
			else{tab.scrollLeft++;}

		  }
		  var myMar=setInterval(marquee,speed);
		  tab.onmouseover=function() {clearInterval(myMar)};
		  tab.onmouseout=function() {myMar=setInterval(marquee,speed)};
	}	
	  
});
// 推荐栏目内容滚动
$(function(){
	if(document.getElementById('wp_600')){
	  var speed=20; 
	  var tab=document.getElementById("wp_600");
	  var tab1=document.getElementById("eg_ul1");
	  var tab2=document.getElementById("eg_ul2");
	  tab2.innerHTML=tab1.innerHTML;
	function marquee()
	  {
		if(tab1.offsetWidth-tab.scrollLeft<=0) 
		tab.scrollLeft=0;	
		else{tab.scrollLeft++;}

	  }
	  var myMar=setInterval(marquee,speed);
	  tab.onmouseover=function() {clearInterval(myMar)};
	  tab.onmouseout=function() {myMar=setInterval(marquee,speed)};
	 }	 
});


