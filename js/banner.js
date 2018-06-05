function banner(obj,arrImg,arrURL){
	var strPic = "";
	var strDot = "";
	var height = getComputedStyle(obj).height;
	var width = getComputedStyle(obj).width;
	var dotListWidth = parseInt(width)*0.02*arrImg.length*2+parseInt(height)*0.1*arrImg.length;
	for(var k in arrImg){
		strPic += "<li><img src='"+arrImg[k]+"' height = '"+height+"' width = '"+width+"' style='cursor:pointer;'/></li>";
		strDot += "<li style='cursor:pointer;padding:0 0;margin:0 "+parseInt(width)*0.02+"px;background:rgba(0,0,0,0.5);border-radius:50%;box-shadow:0 0 5px #fff;font-size:1em;color:#fff;font-weight:bold;text-align:center;line-height:"+parseInt(height)*0.1+"px;height:"+parseInt(height)*0.1+"px;width:"+parseInt(height)*0.1+"px;'>"+(parseInt(k)+1)+"</li>"
	}
	console.log(obj);

	obj.innerHTML = "<div style='position:relative;height:"+height+";width:"+width+";overflow:hidden;'><ul id='picList'  style='position:absolute;transition:left 0.5s;margin:0 0;padding:0 0;list-style:none;display: flex;'>"+strPic+"</ul><ul id='dotList' style='margin:0 0;padding:0 0;list-style:none;display:flex;position:absolute;left:"+(parseInt(width)-dotListWidth)/2+"px;bottom:10px;'>"+strDot+"</ul><div id='btn1' style='cursor:pointer;position:absolute;left:0;top:50%;font-size:2em;color:#fff;background:rgba(0,0,0,0.5);text-align:center;height:"+parseInt(height)*0.2+"px;border-radius:20%;width:"+parseInt(width)*0.1+"px;line-height:"+parseInt(height)*0.2+"px;border-radius:20%;'><</div><div id='btn2' style='cursor:pointer;position:absolute;right:0;top:50%;font-size:2em;color:#fff;background:rgba(0,0,0,0.5);text-align:center;height:"+parseInt(height)*0.2+"px;border-radius:20%;width:"+parseInt(width)*0.1+"px;line-height:"+parseInt(height)*0.2+"px;border-radius:20%;'>></div></div>";
	var aDot = obj.querySelectorAll("#dotList li");
	var aImg = obj.querySelectorAll("#picList li img");
	var oPic = obj.querySelectorAll("#picList");
	var oBtn1 = obj.querySelector("#btn1");
	var oBtn2 = obj.querySelector("#btn2");
	var index = 0;
	aDot[index].style.background = "#ccc";
	oPic[0].style.left ="0";


	for(var i=0;i<aDot.length;i++){
		(function(m){
			aDot[m].onclick = function(){
				oPic[0].style.left = "-"+parseFloat(width)*m+"px";
				index=m;

				for (var i = aDot.length - 1; i >= 0; i--) {
					aDot[i].style.background = "rgba(0,0,0,0.5)";
				}
				aDot[m].style.background = "#ccc";
			}
		})(i);
	}
	oBtn1.onclick = function(){
		
		index === 0?index = arrImg.length-1:index--;
		oPic[0].style.left = "-"+parseFloat(width)*index+"px";
		console.log(index);
		for (var i = aDot.length - 1; i >= 0; i--) {
					aDot[i].style.background = "rgba(0,0,0,0.5)";
		}
		aDot[index].style.background = "#ccc";
	}
	oBtn2.onclick = function(){
		
		index === arrImg.length-1?index = 0:index++;
		oPic[0].style.left = "-"+parseFloat(width)*index+"px";
		console.log(index);
		for (var i = aDot.length - 1; i >= 0; i--) {
					aDot[i].style.background = "rgba(0,0,0,0.5)";
		}
		aDot[index].style.background = "#ccc";
	}
	var timer = null;

	setInterval(function(){
		index === arrImg.length-1?index = 0:index++;
		oPic[0].style.left = "-"+parseFloat(width)*index+"px";
		for (var i = aDot.length - 1; i >= 0; i--) {
					aDot[i].style.background = "rgba(0,0,0,0.5)";
		}
		aDot[index].style.background = "#ccc";
	},5000);

	for (var i = aDot.length - 1; i >= 0; i--) {
		(function(m){
			aDot[m].onmouseenter = function(){aDot[m].style.background = "#ccc"};
			aDot[m].onmouseleave = function(){aDot[m].style.background = "rgba(0,0,0,0.5)"};
		})(i);			
	}
	oBtn1.onmouseenter = function(){oBtn1.style.background = "#ccc"};
	oBtn1.onmouseleave = function(){oBtn1.style.background = "rgba(0,0,0,0.5)"};
	oBtn2.onmouseenter = function(){oBtn2.style.background = "#ccc"};
	oBtn2.onmouseleave = function(){oBtn2.style.background = "rgba(0,0,0,0.5)"};
	for (var i = aImg.length - 1; i >= 0; i--) {
		(function(m){
			aImg[m].onclick = function(){
				open(arrURL[m]);
				console.log(arrURL[m]);
			};
		})(i);			
	}
}