$('#getredpocket').on("tap",function(){
	$('#showredpocket').removeClass("hide");
});
$('.camp').on("tap",function(){
	window.location.href = 'http://api.fit-time.cn/jzy/list.html?logKey=2018spring';
});
$('#cancel').on("tap",function(){
	$('#showredpocket').addClass("hide");
});
$('#showrule1').on("tap",function(){
	$('#rule1').removeClass("hide");
});
$('#close1').on("tap",function(){
	$('#rule1').addClass("hide");
});
$('#showrule2').on("tap",function(){
	$('#rule2').removeClass("hide");
});
$('#close2').on("tap",function(){
	$('#rule2').addClass("hide");
});
$('#buy').on("tap",function(){
	window.location.href = 'http://api.fit-time.cn/jzy/junior.html?detail=junior_from_2018spring&viewLog=junior_view_2018spring&price=2198&oPrice=2698&skuId=30894';
});
$('.contact').on("tap",function(){
	window.location.href = "https://rockfit.qiyukf.com/client?k=614d2ea4afdcbb7dfade96e9dc72e9a7&wp=1&sid=91602";
});
