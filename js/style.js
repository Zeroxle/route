var imgs=document.getElementById('tabimg').getElementsByTagName('img');
var tabli=document.getElementById('tabli');
var lis=tabli.getElementsByTagName('li');
	for (var i=0;i<imgs.length;i++) {
			imgs[i].style.display='none';
			lis[i].style.border='none';
		}
		imgs[0].style.display='block';
		lis[0].style.border='2px solid deepskyblue';
		for (var i=0;i<lis.length;i++) {
			lis[i].index=i;
			lis[i].onmousedown=function(){
				for (var i=0;i<imgs.length;i++) {
				imgs[i].style.display='none';
				lis[i].style.border='none';
				}
				imgs[this.index].style.display='block';
				lis[this.index].style.border='2px solid deepskyblue';
			}
		}

window.onload=function(){
		//储存一个索引
		var num=0;
		var divs=$('#gun').children('div');
		var lis=document.querySelectorAll("#nav li");
		var day=$('#day').children('div');
		
		var oUl=document.getElementById('navli')
		for(var i=1;i<=day.length;i++){
        //每次给li赋值一个新的对象
	        var oLi=document.createElement('li');////////
	        oLi.innerHTML='第'+i+'天';
	        oUl.appendChild(oLi);
	    };
		var navli=document.querySelectorAll('#navli li');	
		
		for(var i=0;i<lis.length;i++){
			//把i的值赋给li的index
			lis[i].index=i
			haH(lis[i]);
		}
		function haH(li){
			li.onclick=function(){
				for(var i=0;i<lis.length;i++){
					lis[i].style.backgroundColor="white";
					lis[i].style.color='black';
				}
				li.style.backgroundColor="teal";
				li.style.color='white';
				//把这个index的值赋给num
				num=this.index;
				//获取对应div顶部离浏览器顶部距离
				var hei=divs[num].offsetTop-40;
				//alert(hei);
				window.scrollTo(0,hei);
			}
		}
		for(var i=0;i<navli.length;i++){
			//把i的值赋给li的index
			navli[i].index=i
			haHa(navli[i]);
		}
		function haHa(li){
			li.onclick=function(){
				for(var i=0;i<navli.length;i++){
					navli[i].style.backgroundColor="white";
					navli[i].style.color='black';
				}
				li.style.backgroundColor="#f90";
				li.style.color='white';
				num=this.index;
				var hei=day[num].offsetTop-40;
				window.scrollTo(0,hei);
			}
		}
		var tit=document.getElementById('tit');
		var tittop=document.getElementById('tit').offsetTop;
		var daydiv=document.getElementById('day');
		var dayli=document.getElementById('dayli');
		var daylitop=document.getElementById('dayli').offsetTop;
		var threetop=document.getElementById('three').offsetTop;
		window.onscroll = function(){
			var gun=document.documentElement.scrollTop || document.body.scrollTop;
			//兼容写法，document.documentElement.scrollTop使用火狐（document.body.scrollTop在火狐里返回0），document.body.scrollTop适用其他浏览器
			for(var i=0;i<lis.length;i++){
					lis[i].style.backgroundColor="white";
					lis[i].style.color='black';
				}

				if(gun>=tittop){
			  	  tit.style.position="fixed";
			  	  tit.style.top="0";
				  tit.style.zIndex="99";
				  tit.style.marginLeft='5%'
				  }else{
				  	tit.style.position="";
				  }

				if(gun <divs[1].offsetTop-50){
					lis[0].style.backgroundColor="teal";
					lis[0].style.color="white";
				}else if(gun>=divs[1].offsetTop-50&&gun<divs[2].offsetTop-50){
					lis[1].style.backgroundColor="teal";
					lis[1].style.color="white";
				}else if(gun>=divs[2].offsetTop-50&&gun<divs[3].offsetTop-50){
					lis[2].style.backgroundColor="teal";
					lis[2].style.color="white";
				}else if(gun>=divs[3].offsetTop-50&&gun<divs[4].offsetTop-50){
					lis[3].style.backgroundColor="teal";
					lis[3].style.color="white";
				}
				else if(gun>=divs[4].offsetTop-50){
					lis[4].style.backgroundColor="teal";
					lis[4].style.color="white";
				}
			//day
			for(var i=0;i<navli.length;i++){
					navli[i].style.backgroundColor="white";
					navli[i].style.color='black';
					navli[i].style.width='80px'
			}
				if(gun>=daylitop-50&&gun<=threetop-250){
			  	  dayli.style.position="fixed";
			  	  dayli.style.top="35px";
				  dayli.style.zIndex="111";
				  daydiv.style.marginLeft='10%';
				  }else{
				  	dayli.style.position="";
				  	daydiv.style.marginLeft='0';
				  }
			for (i=0;i<day.length;i++) {
				if(i==day.length-1){
						if(gun>=day[i].offsetTop-50){
						navli[i].style.backgroundColor="#f90";
						navli[i].style.color="white";
						}
						break;
					}
				if(gun>=day[i].offsetTop-50&&gun<=day[i+1].offsetTop-50){
					navli[i].style.backgroundColor="#f90";
					navli[i].style.color="white";					
				}
			}				

		}


};