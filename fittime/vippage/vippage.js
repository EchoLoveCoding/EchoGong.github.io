
$("#swiper").on("tap", function(){
	var xpx = $("#swiper").css("transform");
	var re = /-[0-9]+|[0-9]+/g;
	var nowX = xpx.match(re)[4];
	var newX;
	if(nowX==-3015){
		newX = nowX;
	}
	else {
		newX = nowX-335;
		var change = "translateX" + "(" + newX + "px)";
		$("#swiper").css("transform", change);


		var num = Math.abs(newX/335);

		var html = "";
		for(var i=0; i<num; i++){
			html += '<span class="dot"></span>';
		}
		html += '<span class="dot on"></span>';
		for(var j=num+1; j<10; j++){
			html += '<span class="dot"></span>';
		}

		$(".dot-box").html(html);

	}
	

});

$("#swiper").on("swipeleft", function(){
	var xpx = $("#swiper").css("transform");
	var re = /-[0-9]+|[0-9]+/g;
	var nowX = xpx.match(re)[4];
	var newX;
	if(nowX==0){
		newX = nowX;
	}
	else {
		newX = nowX+335;
		var change = "translateX" + "(" + newX + "px)";
		$("#swiper").css("transform", change);

		var html = "";

		if(newX==0){
			html += '<span class="dot on"></span>';
			for(var i=1; i<10; i++){
				html += '<span class="dot"></span>';
			}
			$(".dot-box").html(html);
		}
		else{
			var num = Math.abs(newX/335);
			for(var i=0; i<num; i++){
				html += '<span class="dot"></span>';
			}
			html += '<span class="dot on"></span>';
			for(var j=num+1; j<10; j++){
				html += '<span class="dot"></span>';
			}
		
			$(".dot-box").html(html);
		}
	}
	

});
