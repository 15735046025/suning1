//banner部分效果
{

	let imgs=document.querySelectorAll(".banner_img li");
	let pagers=document.querySelectorAll(".pagerbox li");
	let banner=document.querySelector(".banner_imgbox");
	let next=document.querySelector(".next");
	let prev=document.querySelector(".prev");
	pagers.forEach(function(ele,index){
		ele.onmouseenter=function(){
			for(var i=0;i<imgs.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
			}
			//this ele pagers[index]
			this.classList.add("active");
			imgs[index].classList.add("active");
			n=index;
		}
		
	});
	var n=0;
	let t=setInterval(move,3000);
	function move(){
		n++;
		//n=n%5;
		if(n===imgs.length){
			n=0;
		}
		if(n<0){
			n=imgs.length-1;
		}
		for(var i=0;i<imgs.length;i++){
			imgs[i].classList.remove("active");
			pagers[i].classList.remove("active");
		}
		imgs[n].classList.add("active");
		pagers[n].classList.add("active");
	}

	banner.onmouseenter=function(){
		clearInterval(t);
	}
	banner.onmouseleave=function(){
		t=setInterval(move,3000);
	}
	let flag=true;
	next.onclick=function(){
		if(flag){
			flag=false;
			move();
		}
	}
	prev.onclick=function(){
		if(flag){
			flag=false;
			n-=2;
			move();
		}
	}
	imgs.forEach(function(ele,index){
		ele.addEventListener("transitionend", function(){
			flag=true;
		})
				
	})

}
//nave效果
	let labels=document.querySelectorAll(".label");   
	let menus=document.querySelectorAll(".menu");  
	let obj=menus[0]; 
	labels.forEach(function(ele,index){
		ele.onmouseenter=function(){
			obj.style.display="none";
			menus[index].style.display="block";
			obj=menus[index];
		}
		ele.onmouseleave=function(){
			menus[index].style.display="none";
		}
	})


//页面顶端部分
{
	let labels=document.querySelectorAll(".head_btn");   
	let menus=document.querySelectorAll(".wangzhan_box");  
	let obj=menus[0]; 
	labels.forEach(function(ele,index){
		ele.onmouseenter=function(){
			obj.style.display="none";
			menus[index].style.display="block";
			obj=menus[index];
		}
		ele.onmouseleave=function(){
			menus[index].style.display="none";
		}
	})
}
//搜索部分

{
	let box=document.querySelector(".sousuo_box");
	let center=document.querySelector(".sousuo_box_center");
	let shenghuo=document.querySelector(".sousuo_shenghuo");
	let foot=document.querySelector(".sousuo_box_foot");
	center.onclick=function(){
		foot.style.cssText="display:block;color:rgb(0,0,0)";
		shenghuo.placeholder="";
	}
	center.onmouseleave=function(){
		foot.style.display="none";
		shenghuo.placeholder="生活家电每200减20";
	}
}
//页面左右侧totop部分
{
	let totop=document.querySelector(".body_totop_icon");
	let leftBar_icon2=document.querySelector(".leftBar_icon2");

	totop.onclick=function(){
		let st=document.documentElement.scrollTop;
		let t=setInterval(function(){
			st-=200;
			if(st<0){
				st=0;
				clearInterval(t);
			}
			document.documentElement.scrollTop=st;
		},25)	
	}
	leftBar_icon2.onclick=function(){
		let st=document.documentElement.scrollTop;
		let t=setInterval(function(){
			st-=200;
			if(st<0){
				st=0;
				clearInterval(t);
			}
			document.documentElement.scrollTop=st;
		},25)	
	}
}
{
	function right(parent){
		let body_right_list=parent.querySelector(".body_right_licai a");
		let body_center_icon=parent.querySelector(".body_center_icon");
		let body_right_word2=parent.querySelector(".body_right_word2");
		let body_right_word3=parent.querySelector(".body_right_word3");
		let body_right_word4=parent.querySelector(".body_right_word4");
		let body_right_red=parent.querySelector(".body_right_red");

		body_right_list.onmouseenter=function(){

			body_right_word2.style.cssText="left:-47px";
			body_right_word3.style.cssText="left:-73px";

			body_right_word4.style.cssText="left:-800px";
			body_right_red.style.display="block";
			
		}
		
		body_right_list.onmouseleave=function(){
			body_right_word2.style.cssText="left:0;background-color:#383838;color:#FFAA01";
			body_right_word3.style.cssText="left:0;background-color:#383838;color:#FFAA01";

			body_right_word4.style.cssText="left:0";
			body_right_red.style.display="none";
		}
			
	}
	const contentlist=document.querySelectorAll(".body_right_licai");
	contentlist.forEach(function(ele){
		right(ele);
	})

}
//页面上topBar部分
{
	let topBar=document.querySelector(".topBar");
	let leftBar=document.querySelector(".leftBar");
	let banner_quanbu=document.querySelector(".banner_quanbu");
	let sousuo_box=document.querySelector(".sousuo_box");
	let topBar_wenzi=document.querySelector(".topBar_wenzi");
	let banner_nav=document.querySelector(".banner_nav");
	let topBar_right=document.querySelector(".topBar_right");
	window.onscroll=function(){
		let st=document.documentElement.scrollTop;
		if(st>774){
			topBar.style.display="block";

			banner_quanbu.style.cssText="position:fixed;top:5px;left:11%;";
			banner_nav.style.cssText="display:none;position:fixed;top:40px;left:11%";
			sousuo_box.style.cssText="position:fixed;top:5px;left:36%";
			topBar_wenzi.style.cssText="position:fixed;top:8px;left:73%";
			topBar_right.style.cssText="position:fixed;top:6px;right:50%;margin-right:-594px";

			banner_quanbu.onmouseenter=function(){
				banner_nav.style.display="block";
			}
			banner_nav.onmouseleave=function(){
				banner_nav.style.display="none";
			}

		}else{
			topBar.style.display="none";

			banner_quanbu.style.cssText="position:absolute;top:0;left:0";
			banner_nav.style.cssText="position:absolute;top:0;left:0";
			sousuo_box.style.cssText="position:absolute;top:30px;left:0";

			topBar_wenzi.style.position="position:relative";

			topBar_right.style.position="relative";

			banner_nav.style.display="block";	
			banner_nav.onmouseleave=function(){
				banner_nav.style.display="block";
			}
		}
		if(st<2600){
			leftBar.style.display="none";
		}else{
			leftBar.style.display="block";
		}
		
	}

	//左侧

	{
		let tips=document.querySelectorAll(".tips");
		let containers=document.querySelectorAll(".container");
		let flag=true;
		tips.forEach(function(ele,index){
			
			ele.onclick=function(){
				flag=false;
				let ot=containers[index].offsetTop+560;
				containers[index].offsetTop=ot;
				let now=document.documentElement.scrollTop;
				let speed=(ot-now)/10;
				let time=0;
				let t=setInterval(function(){
					time+=25;
					now+=speed;
					if(time===250){
						clearInterval(t);
						flag=true;
					}
					document.documentElement.scrollTop=now;
				},25)
			}
		});
		window.addEventListener("scroll",function(ele,index){
			if(flag){
				let st=document.documentElement.scrollTop;
				
				for(let i=0;i<containers.length;i++){
	   				if(st>containers[i].offsetTop+50){
	   					for(let i=0;i<tips.length;i++){
	   						tips[i].classList.remove("active");
	   					}
	   					
	   					tips[i].classList.add("active");
	   					
	   				}
				}
			}
		})
	}
}

	
//大聚惠部分效果
{
	const prev=document.querySelector(".dajuhui_lbtn");
	const next=document.querySelector(".dajuhui_rbtn");
	const inner=document.querySelector(".dajuhui_inner");
	let n=1;
	let flag=true;
	next.onclick=function(){
		if(flag){
			flag=false;
			n++;
			inner.style.transition="all 1s";
			inner.style.marginLeft=-1000*n+"px";
			
		}
	}
	prev.onclick=function(){
		if(flag){
			flag=false;
			n--;
			inner.style.transition="all 1s";
			inner.style.marginLeft=-1000*n+"px";
		}
	}
	inner.addEventListener("transitionend",function(){
		flag=true;
		if(n===4){
			inner.style.transition="none";
			inner.style.marginLeft="-1000px";
			n=1;
		}
		if(n===0){
			inner.style.transition="none";
			inner.style.marginLeft="-3000px";
			n=3;
		}
	})
}
//排行榜效果
{
	let prev=document.querySelector(".paihangbang .prev");
	let next=document.querySelector(".paihangbang .next");
	let inner=document.querySelector(".paihang_inner");
	let pagers=document.querySelectorAll(".paihang_pager");
	let n=1;
	let flag=true;
	next.onclick=function(){
		if(flag){
			flag=false;
			n++;
			inner.style.transition="all 1s";
			inner.style.marginLeft=-390*n+"px";
			pagers[n-1].classList.add("active");
			pagers[n-2].classList.remove("active");
			obj=pagers[n-1];
		}
	}

	prev.onclick=function(){
		if(flag){
			flag=false;
			n--;
			inner.style.transition="all 1s";
			inner.style.marginLeft=-390*n+"px";
			pagers[n].classList.add("active");
			pagers[n+1].classList.remove("active");
			obj=pagers[n];
		}

	}
	let obj=pagers[0];
	pagers.forEach(function(ele,index){
		ele.onclick=function(){
			obj.classList.remove("active");
			ele.classList.add("active");
			obj=ele;
			inner.style.marginLeft=index*-390+"px";
			n=index;
		}

	})

	inner.addEventListener("transitionend", function(){
		flag=true;
		if(n===4){
			inner.style.transition="none";
			inner.style.marginLeft="-390px";
			pagers[0].classList.add("active");
			pagers[2].classList.remove("active");
			obj=pagers[0];
			n=1;
		}
		if(n===0){
			inner.style.transition="none";
			inner.style.marginLeft="-1170px";
			pagers[2].classList.add("active");
			pagers[0].classList.remove("active");
			obj=pagers[2];
			n=3;
		}
	})
	
}
{

	const prev=document.querySelector(".shipin_lbtn");
	const next=document.querySelector(".shipin_rbtn");
	const inner=document.querySelector(".shipin_inner");
	let n=1;
	let flag=true;
	next.onclick=function(){
		if(flag){
			flag=false;
			n++;
			inner.style.transition="all 1s";
			inner.style.marginLeft=-390*n+"px";
			
		}
	}
	prev.onclick=function(){
		if(flag){
			flag=false;
			n--;
			inner.style.transition="all 1s";
			inner.style.marginLeft=-390*n+"px";
		}
	}
	inner.addEventListener("transitionend",function(){
		flag=true;
		if(n===3){
			inner.style.transition="none";
			inner.style.marginLeft="-390px";
			n=1;
		}
		if(n===0){
			inner.style.transition="none";
			inner.style.marginLeft="-780px";
			n=2;
		}
	})

}
//清单拼购效果
{
	let prev=document.querySelector(".shopping_lbtn");
	let next=document.querySelector(".shopping_rbtn");
	let inner=document.querySelector(".shopping_inner");
	let n=1;
	let flag=true;
	next.onclick=function(){
		if(flag){
			flag=false;
			n++;
			inner.style.transition="all 1s";
			inner.style.marginLeft=-570*n+"px";
		}
	}

	prev.onclick=function(){
		if(flag){
			flag=false;
			n--;
			inner.style.transition="all 1s";
			inner.style.marginLeft=-570*n+"px";
		}

	}
	inner.addEventListener("transitionend", function(){
		flag=true;
		if(n===4){
			inner.style.transition="none";
			inner.style.marginLeft="-570px";
			n=1;
		}
		if(n===0){
			inner.style.transition="none";
			inner.style.marginLeft="-1710px";
			n=3;
		}
	})
	
}