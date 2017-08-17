// 轮播图
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
		 autoplay: 5500,//换图间隔时间
	 	 autoplayDisableOnInteraction: false,
	 	 autoHeight: true //随图片高度自动变化
	 });
});
// 首页5张展示小图
$(function(){
	if(document.getElementById("movePic1")){
		function mainfun(mainObj,t){
		  function getID(id){return document.getElementById(id)}
		  function getTag(tag,obj){
		   return (typeof obj=='object'?obj:getID(obj)).getElementsByTagName(tag); }
		  var cut = 0;
		  var timer='';
		  var num = getTag('li',getTag('div',getID(mainObj))[0]).length;		
		  var getpic = getTag('li',getTag('div',getID(mainObj))[0]);
		  var getbtn = getTag('li',getTag('div',getID(mainObj))[1]);
		  var gettext = getTag('li',getTag('div',getID(mainObj))[2]); 
		  for(i=0;i<num;i++){
			getpic[i].style.display="none";
			gettext[i].style.display="none";
			getbtn[i].onclick=(function(i){
			  return function(){ 
				 getbtn[i].className="sel";
				 changePic(i);}
				 })(i);
		  }			 
		  getpic[cut].style.display="block";
		  getbtn[cut].className="sel";
		  gettext[cut].style.display="block";
		  getID(mainObj).onmouseover=function(){
			 clearInterval(timer);}
		  getID(mainObj).onmouseout=function(){
			 timer = setInterval(autoPlay,t);}
		   
		  function changePic(ocut){
			for(i=0;i<num;i++){
			   cut=ocut;
			   getpic[i].style.display="none";
			   getbtn[i].className=""			
			   gettext[i].style.display="none";
			 }
			 getpic[cut].style.display="block";
			 getbtn[cut].className="sel";
			 gettext[cut].style.display="block"				   
		   }
		   
		  function autoPlay(){
			 if(cut>=num-1){cut=0 ;}
			 else{cut++ ;}
			 changePic(cut);
			}
		  timer = setInterval(autoPlay,t);
		}	
		mainfun("movePic1",2000);
	}
})

// 弹出框特效
$(function(){
			$('.click').on('click', function(){
			  layer.open({
				    type: 2,
				    title: '地理位置',
				    maxmin: true,
				    area: ['1000px', '500px'],
				    content: 'map.html',
				  
				});
			});
		})	
$(function(){
	$('.yyzz').on('click', function(){
	  layer.photos({
	    photos: '.yyzz'
	    ,anim: 5 
	  }); 
	});
})