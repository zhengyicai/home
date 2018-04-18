var $base_path = 'http://120.78.67.233:8080/web/home/';
//var $base_path = 'http://localhost:8080/web/home/';
var $image_path = 'http://120.78.67.233:8080/image/';



var language =   sessionStorage.getItem("YSlanguage");

//var  language =="cn"?data.data[0].cncontent:language =="en"?data.data[0].encontent:data.data[0].content;
$(".proDetail").html(language =="cn"?"詳情信息":language =="en"?"Detail":"详情信息");
$(".proStyle").html(language =="cn"?"類型":language =="en"?"Style":"类型");
$(".proPrice").html(language =="cn"?"價格":language =="en"?"Price":"价格");
$(".proSpec").html(language =="cn"?"規格":language =="en"?"Spec":"规格");

$(".messageSubmit").html(language =="cn"?"提交":language =="en"?"Submit":"提交");
$(".searchTitle").html(language =="cn"?"搜索結果頁":language =="en"?"Search results page":"搜索结果页");
$(".manyNews").html(language =="cn"?"更多":language =="en"?"Many":"更多");



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
         	if($(this).val() =="" || $(this).val().trim().length ==0 || $(this).val() ==null || $(this).val() =="null"  ){
         		alert("搜索内容不能为空");
         		return ;
         	}
            location.href=decodeURI('search.html?title='+$(this).val());  
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

function Language(data){
	
	sessionStorage.setItem("YSlanguage",data);
	location.href="index.html";
}

$(function(){
	var language =   sessionStorage.getItem("YSlanguage");
	var indexNewsCount = 0;
	$.ajax({
			type:"get",
			url:$base_path+"para/findAll", 
            dataType:"json",
			success:function(data){ 
				if(data.code==0000){
					for(var i = 0 ;i<data.data.length;i++){
						var title =  language =="cn"?data.data[i].cnparaValue:language =="en"?data.data[i].enparaValue:data.data[i].paraValue;
						
						if(data.data[i].paraName =='copyRight'){
							$(".footerBackUp").html(title);
							
						}else if(data.data[i].paraName =='address'){
							$(".navAddress").html(title);
						}else if(data.data[i].paraName =='Time'){
							$(".navTime").html(title);
						}else if(data.data[i].paraName =='tel'){
							$(".navTel").html(title);
						}else if(data.data[i].paraName =='email'){
						
							$(".navEmail").html(title);
						}else if(data.data[i].paraName =='chairman'){
							$(".aboutTwoText1").html(title);
							
							
						}else if(data.data[i].paraName =='manage'){
							$(".aboutTwoText2").html(title);
							
						}
					}
					
					
				}
			}, 
			error:function(data){ 
				//alert("服务器跑丢了......");
			} 
				
	});
	
	$.ajax({
			type:"get",
			url:$base_path+"sysBanner/findAll?title=logo", 
            dataType:"json",
			success:function(data){ 
				if(data.code==0000){
					$(".sysLogo").attr("src",$image_path+data.data[0].imageUrl);
					
					
				}
			}, 
			error:function(data){ 
				//alert("服务器跑丢了......");
			} 
				
	});		
	
	
	
	$.ajax({
			type:"get",
			url:$base_path+"sysNav/findAll", 
            dataType:"json",
			success:function(data){ 
				if(data.code==0000){
					for(var i = 0 ; i<data.data.length;i++){
						//首页
						if(data.data[i].href == 'index.html' && data.data[i].level =='10'){
							$(".navIndex").attr("href",data.data[i].href);
							if(language =='cn'){
								$(".navIndex").html(data.data[i].cntitle);
							}else if(language =='en'){
								$(".navIndex").html(data.data[i].entitle);
							}else{
								$(".navIndex").html(data.data[i].title);	
							}
						}
						//关于
						else if(data.data[i].href.indexOf('about.html') >=0 ){
							if(data.data[i].level =='10'){
								$(".navAbout").attr("href",data.data[i].href);
								if(language =='cn'){
									$(".navAbout").html(data.data[i].cntitle);
								}else if(language =='en'){
									$(".navAbout").html(data.data[i].entitle);
								}else{
									$(".navAbout").html(data.data[i].title);	
								}		
							}else if(data.data[i].level =='30'){
								var title =  language =="cn"?data.data[i].cntitle:language =="en"?data.data[i].entitle:data.data[i].title;
								
								//屏蔽
								if(data.data[i].id=="30449cac5f69437bb73517f6f06bad5a"){
									//$("#aboutThree").html(title);
								}else{
									$(".navAboutChild").html($(".navAboutChild").html()+'<td><a class="navTwoTitle" href="'+data.data[i].href+'" style="background-color: #646464;">'+title+'</a></td>' );
								}
								//关于分类
								if(data.data[i].id=="a7052e3ee26e480e84568560d2d3cfa9"){
									
									$("#aboutOne").html(title);
									$("#aboutDetail").html(title);
									$("#aboutTitleOneMb").html(title);
									
									
								}
								if(data.data[i].id=="cf62dfb4bba842b287982d01beabeb52"){
									$("#aboutTwo").html(title);
									$("#aboutTitleTwoMb").html(title);
								}
								
								if(data.data[i].id=="30449cac5f69437bb73517f6f06bad5a"){
									$("#aboutThree").html(title);
								}
								
								
							}
							
						}
						//新闻
						else if(data.data[i].href.indexOf('newslist.html' )>=0){
							
							if(data.data[i].level =='10'){
								$(".navNewsList").attr("href",data.data[i].href);
								if(language =='cn'){
									$(".navNewsList").html(data.data[i].cntitle);
								}else if(language =='en'){
									$(".navNewsList").html(data.data[i].entitle);
								}else{
									$(".navNewsList").html(data.data[i].title);	
								}	
							}else if(data.data[i].level =='30'){
								var title1 =  language =="cn"?data.data[i].cntitle:language =="en"?data.data[i].entitle:data.data[i].title;
								$(".navNewsListChild").html($(".navNewsListChild").html()+'<td><a class="navTwoTitle" href="'+data.data[i].href+'" style="background-color: #646464;">'+title1+'</a></td>' );
								//首页新闻
								if(data.data[i].id=="758ca2121fab432eb2202e46018d0c23"){
									
									$("#indexNewsOne").html(title1);
									$("#newsOne").html(title1);
									$("#aboutDetailTitle").html(title1);
								}
								if(data.data[i].id=="0cbb9844fca846e98bb09dad9bfe5f94"){
									$("#indexNewsTwo").html(title1);
									$("#newsTwo").html(title1);
									
								}
								if(data.data[i].id=="6490e08206ba431bbedfe6c2aabbb065"){
									$("#indexNewsThree").html(title1);
									$("#newsThree").html(title1);
								}
								
								
							}
							
						}
						//产品
						else if(data.data[i].href == 'cplist.html' && data.data[i].level =='10'){
							$(".navCplist").attr("href",data.data[i].href);
							if(language =='cn'){
								$(".navCplist").html(data.data[i].cntitle);
							}else if(language =='en'){
								$(".navCplist").html(data.data[i].entitle);
							}else{
								$(".navCplist").html(data.data[i].title);	
							}
						}
						//联系我们
						else if(data.data[i].href == 'contact.html' && data.data[i].level =='10'){
							$(".NavContact").attr("href",data.data[i].href);
							
							if(language =='cn'){
								$(".NavContact").html(data.data[i].cntitle);
							}else if(language =='en'){
								$(".NavContact").html(data.data[i].entitle);
							}else{
								$(".NavContact").html(data.data[i].title);	
							}
						}
						//投诉
						
						else if(data.data[i].href == 'message.html' && data.data[i].level =='10'){
							$(".navMessage").attr("href",data.data[i].href);
							if(language =='cn'){
								$(".navMessage").html(data.data[i].cntitle);
							}else if(language =='en'){
								$(".navMessage").html(data.data[i].entitle);
							}else{
								$(".navMessage").html(data.data[i].title);	
							}
						  
						  
						}
						//底部导航
						if(data.data[i].level =='20'){
							
							var title2 =  language =="cn"?data.data[i].cntitle:language =="en"?data.data[i].entitle:data.data[i].title;
							$(".navBottemItem").html($(".navBottemItem").html()+'<li><a href="'+data.data[i].href+'">'+title2+'</a></li>');
							
							
						}
						
						
					}
					
					
					
					
				}else if(data.code==1403){
					/*alert("登录失效,请重新登录");
					top.location.href="/enjoyRedEnvelopeManager/index.html";*/
					//overTime();
				}else{
					//alert("alert");
					//overTime();
					//alert(data);
					//alert(data.msg);
				}
			}, 
			error:function(data){ 
				//alert("服务器跑丢了......");
			} 
				
	});	
		

	if(language =='cn'){
		$(".footerAbout").html("關於優術");
		$(".footerMobile").html("電話");
		$(".footerTime").html("服務時間");
		$(".footerEmail").html("郵箱");
		$(".footerAddress").html("地址");
		
		$(".messageAddress").html("地區");
		$(".messageName").html("姓名");
		$(".messageTel").html("電話");
		$(".messageRemark").html("備註");
		$(".searchDiv").attr("placeholder","請輸入關鍵字");
		$(".messageNameTitle").attr("placeholder","請輸入您的姓名...");
		$(".messageTelTitle").attr("placeholder","請輸入您的電話...");
		$(".messageRemarkTitle").attr("placeholder","請輸入您的備註...");
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
		$(".searchDiv").attr("placeholder","please input keywords ");
		$(".messageNameTitle").attr("placeholder","Please input you name...");
		$(".messageTelTitle").attr("placeholder","Please input you Tel...");
		$(".messageRemarkTitle").attr("placeholder","Please input you Remark...");
	}else{
	
		$(".footerAbout").html("关于优术");
		$(".footerMobile").html("电话");
		$(".footerTime").html("服务时间");
		$(".footerEmail").html("邮箱");
		$(".footerAddress").html("地址");
		
		$(".messageAddress").html("地区");
		$(".messageName").html("姓名");
		$(".messageTel").html("电话");
		$(".messageRemark").html("备注");
		$(".searchDiv").attr("placeholder","请输入关键字");
		$(".messageNameTitle").attr("placeholder","请输入您的姓名...");
		$(".messageTelTitle").attr("placeholder","请输入您的电话...");
		$(".messageRemarkTitle").attr("placeholder","请输入您的备注...");
		
		
	
	}
})
