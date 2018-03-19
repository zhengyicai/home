//手机导航
$(".menu_icon").click(function(){
	if(!$(".menu").is(":hidden")){
		$(".menu").slideUp();
	}else{
		$(".menu").slideDown();
	}
});

$("#nav1 ul .navHover").mouseenter(function(){
		$(".on11").css("background-color","white");
	    $(".on11>a").css("color","#646464");
		$("#nav1 ul .navHover").removeClass("on");
		$(this).addClass("on");
		$(".language1").removeClass("on");
		$(".indexBanner1").hide();
		$(this).children("div").show(200);
		//$(".on11").css("background-color","white");
	    //$(".on11 a").css("color","#646464");
})

$("#nav1 ul .navHover").mouseleave(function(){
		
		$("#nav1 ul .navHover").removeClass("on");
		
		
		//$(this).addClass("on");
		
		$(".language1").removeClass("on");
		$(".indexBanner1").hide();
		$(this).children("div").hide();
		$(".navTwoTitle").css("color","white");
		
		
		$(".on11").css("background-color","#46B8DA");
	    $(".on11>a").css("color","white");
	    $('.searchDiv').val("");
	    
		
		
		
})

$(".on11").mouseenter(function(){
	
	
	$(".on11>a").css("color","white");
	
})


$("#nav1").mouseleave(function(){
	
	$(".on11").css("background-color","#46B8DA");
	$(".on11 a").css("color","white");
	
})	
$(".navTwoTitle").mouseenter(function(){
	$(".navTwoTitle").css("color","white");
	$(this).css("color","#48a5f4");
})

$(".navTwoTitle").mouseenter(function(){
	
	//$(".navTwoTitle").css("color","white");
	//$(this).css("color","white");
})


$('.searchDiv').bind('keypress',function(event){ 
         
          
         if(event.keyCode == 13)      
         {  
            location.href='search.html';  
         }  

     });
     
     
     

/*
function browserRedirect() { 

	var sUserAgent= navigator.userAgent.toLowerCase(); 
	
	var bIsIpad= sUserAgent.match(/ipad/i) == "ipad"; 
	
	var bIsIphoneOs= sUserAgent.match(/iphone os/i) == "iphone os"; 
	
	var bIsMidp= sUserAgent.match(/midp/i) == "midp"; 
	
	var bIsUc7= sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4"; 
	
	var bIsUc= sUserAgent.match(/ucweb/i) == "ucweb"; 
	
	var bIsAndroid= sUserAgent.match(/android/i) == "android"; 
	
	var bIsCE= sUserAgent.match(/windows ce/i) == "windows ce"; 
	
	var bIsWM= sUserAgent.match(/windows mobile/i) == "windows mobile"; 
	
	 
	//判断是否手机
	if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) { 
	
		$(".content_bd").hide(); 
		$(".content_mobile").show(); 
	
	} else { 
	
	 	$(".content_bd").show();
	 	$(".content_mobile").hide(); 
		
	} 

} 

browserRedirect(); */