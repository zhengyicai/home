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

function language(data){
	
	sessionStorage.setItem("YSlanguage",data);
	location.href="index.html";
}

$(function(){
	var language =   sessionStorage.getItem("YSlanguage");
	
	if(language =='zh'){
		$(".footerAbout").html("关于优速");
		$(".footerMobile").html("电话");
		$(".footerTime").html("服务时间");
		$(".footerEmail").html("邮箱");
		$(".footerAddress").html("地址");
		
		$(".messageAddress").html("地区");
		$(".messageName").html("姓名");
		$(".messageTel").html("电话");
		$(".messageRemark").html("备注");
		
		
	}else if(language =='cn'){
		$(".footerAbout").html("關於優速");
		$(".footerMobile").html("電話");
		$(".footerTime").html("服務時間");
		$(".footerEmail").html("郵箱");
		$(".footerAddress").html("地址");
		
		$(".messageAddress").html("地區");
		$(".messageName").html("姓名");
		$(".messageTel").html("電話");
		$(".messageRemark").html("備註");
	}else if(language =='en'){
		$(".footerAbout").html("ABOUT");
		$(".footerMobile").html("TEL");
		$(".footerTime").html("TIME");
		$(".footerEmail").html("EMAIL");
		$(".footerAddress").html("ADDRESS");
		
		$(".messageAddress").html("AREA");
		$(".messageName").html("NAME");
		$(".messageTel").html("TEL");
		$(".messageRemark").html("REMARK");
	}			
})
