var on=true;
var step=0;
//数组
var text="*welcom*-------------------------*log.......*sucess*====*welcom*This is SVB";

//光标
//function curse(){
//	if(on){
//		$('#cursor').css('display','none');
//		on=false;
//	}else{
//		$('#cursor').css('display','block');
//		on=true;
//	}
//}
//打字机
var i=0;
var ss=document.getElementById("text")
function write(text){
	ss.innerHTML+=text[i];
	
	if(text[i]=="*"){
		ss.innerHTML+="<br/>";
	}
	if(i==text.length){
		ss.innerHTML+="<br/>";
//		clearInterval(tim);
		$('#main').html(" ");
		step++;
	}
	i++;
}
//显示登录框
function loge(){
	$('#loge').css('transform','scale(1)');
	$('#password').focus();
	var len=document.getElementById("password").value.length;
    
	if(len<20){
	  document.getElementById("password").value+="s";
	}else{
		$('#loge').css('transform','scale(0)');
		step++;
	}
}

function loading(){
	//clearInterval(tim);
//	$('#loge').remove();
	$('#load').css('display','block');
	setTimeout(function(){
		$('#loading').css('width','600px');
		setTimeout(function(){
			$('#load').remove();
			step++;
		},1000)
	},200)
	
}

function welcome(){
	document.getElementById("rainMp3").play();
	clearInterval(tim);
	$('#welcome').css('display','block');
	setTimeout(function(){
		$('#scal').css('transform','scale(50)');
		 setTimeout(function(){
		 	$('#welcome>p').css('margin-top','0');
		 	$('#welcome>p').css('opacity','1');
		 	$("#user").css("transform","scale(1)");
		 	$("#canvas").css("display","block");
		 	$("#scal").remove();
		 },500)
	},500)
}



var tim=setInterval(function(){
	//curse();
	switch(step){
		case 0:
		write(text);
		break;
		case 1:
		loge();
		break;
		case 2:
		loading();
		break;
		case 3:
		welcome();
		break;
	}
	
},20)
