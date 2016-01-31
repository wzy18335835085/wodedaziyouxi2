window.onload=function(){
	var da=document.getElementById("da");
	var xiao=document.getElementsByClassName("xiao");
	// var red=Math.floor(Math.random()*255);
	// var green=Math.floor(Math.random()*255);
	// var blue=Math.floor(Math.random()*255);
	// var yellow=Math.floor(Math.random()*255);
	// da.style.background="rgba("+red+","+green+","+blue+",0.8)";
	
	for(var i=0;i<50;i++){
		// xiao[i].style.background="rgba("+red+","+green+","+yellow+",0.8)";		
		var aa=65+Math.floor(Math.random()*57);
		if(65<=aa&&aa<=90||97<=aa&&aa<=122){
			xiao[i].innerHTML=String.fromCharCode(aa);
		}
		
		while(90<aa&&aa<97){
		aa=65+Math.floor(Math.random()*57);
		xiao[i].innerHTML=String.fromCharCode(aa);
		}

		var cc=document.createElement("div");
		cc.setAttribute("class","jishi");
		var time=0;
		cc.innerHTML=time;
		da.appendChild(cc);

		var input=document.getElementById("input");

		input.onclick=function(){
			document.onkeydown=function(e){//onkeydown是小写
			var top=da.firstElementChild;
			if(e.shiftKey){
				if(e.keyCode!==top.innerHTML.charCodeAt(0))  return;
			}else{
				if(e.keyCode+32!==top.innerHTML.charCodeAt(0)) return;
			}
			da.removeChild(top);
			if(da.children.length==0){location.reload();}	
		}

			
			var timeId=setInterval(function(){
				time++
				cc.innerHTML=time;
				if(time==60){
					alert("再来一次");
					clearInterval(timeId);
					location.reload();	
					}
				if(xiao.length==0){
					alert("你真棒！");
					clearInterval(timeId);
				}					 
			},1000)
			
		}

		
	}

	


















}