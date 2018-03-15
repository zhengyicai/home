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
