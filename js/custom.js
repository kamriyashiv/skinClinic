
//share Button animation and hide show...



function sheabtn(){
	var closeBtn=document.getElementById("closeI");
	var socialIcon=document.querySelector(".socialIcon");
	if(closeBtn.style.opacity==0){
		closeBtn.style.opacity="1";
		closeBtn.style.transform="scale(1.0)";
		closeBtn.style.backgroundColor="#fff";
		closeBtn.style.transition="0.2s";	
	
		 if(socialIcon.style.opacity==0){
			 socialIcon.style.opacity="1";
			 var li=document.querySelectorAll(".socialIcon>li");
				for(var i=0; i<li.length;i++){
					li[i].style.transition="0.2s ";
					li[i].style.transform="translateY(-20px)";										
				}
		 }
		 else{
			 socialIcon.style.opacity="0";
			 socialIcon.style.transition="0.2s";
			 
		 }
	}
	else{
		closeBtn.style.opacity="0";
		closeBtn.style.transition="0.2s";
		closeBtn.style.transform="scale(0.5)";
		if(socialIcon.style.opacity==1){
			 socialIcon.style.opacity="0";
			 socialIcon.style.transition="0.2s";
			 var li=document.querySelectorAll(".socialIcon>li");
				for(var i=0; i<li.length;i++){
					li[i].style.transition="0.2s ";
					li[i].style.transform="translateY(10px)";					
				}
		 }
		 else{
			 socialIcon.style.opacity="1";
			 socialIcon.style.transition="0.5s";
		 }
	}
	
}


function menuBar(y){
	if(y.style.opacity=="0"){
		y.style.opacity="1"		
		y.style.transition="0.5s";
	}
	else{
		y.style.opacity="0"
	}
}
