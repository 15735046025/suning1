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
//页面右侧部分
{
	let totop=document.querySelector(".totop");
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
//页面上 左部分

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

			banner_quanbu.style.position="fixed";
			banner_quanbu.style.top="5px";
			banner_quanbu.style.left="11%";

			banner_nav.style.display="none";

			banner_nav.style.position="fixed";
			banner_nav.style.top="40px";
			banner_nav.style.left="11%";

			sousuo_box.style.position="fixed";
			sousuo_box.style.top="5px";
			sousuo_box.style.left="36%";

			topBar_wenzi.style.position="fixed";
			topBar_wenzi.style.top="8px";
			topBar_wenzi.style.left="73%";

			topBar_right.style.position="fixed";
			topBar_right.style.top="8px";
			topBar_right.style.left="83%";

			banner_quanbu.onmouseenter=function(){
				banner_nav.style.display="block";
			}
			banner_nav.onmouseleave=function(){
				banner_nav.style.display="none";
			}

		}else{
			topBar.style.display="none";

			banner_quanbu.style.position="absolute";
			banner_quanbu.style.top="0";
			banner_quanbu.style.left="0";

			banner_nav.style.position="absolute";
			banner_nav.style.top="0";
			banner_nav.style.left="0";

			sousuo_box.style.position="absolute";
			sousuo_box.style.top="30px";
			sousuo_box.style.left="0";

			// topBar_wenzi.style.position="relative";

			// topBar_right.style.position="relative";

			banner_nav.style.display="block";	
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
		tips.forEach(function(ele,index){
			ele.onclick=function(){
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
					}
					document.documentElement.scrollTop=now;
				},25)
			}
		});
		window.addEventListener("scroll",function(ele,index){
			let st=document.documentElement.scrollTop;
			
			for(let i=0;i<containers.length;i++){
   				if(st>containers[i].offsetTop-50){
   					for(let i=0;i<tips.length;i++){
   						tips[i].classList.remove("active");
   					}
   					
   					tips[i].classList.add("active");
   					
   				}
			}
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
//大聚惠部分效果
{
	const prev=document.querySelector(".dajuhui_lbtn");
	const next=document.querySelector(".dajuhui_rbtn");
	const inner=document.querySelector(".dajuhui_inner");
	let n=0;
	next.onclick=function(){
		n++;
		prev.classList.remove("disable");
		if(n===2){
			this.classList.add("disable");
		}
		if(n===3){
			n=2;
			return;
		}
		inner.style.marginLeft=-1000*n+"px";
	}
	prev.onclick=function(){
		n--;
		next.classList.remove("disable");
		if(n===0){
			this.classList.add("disable");
		}
		if(n===-1){
			n=0;
			return;
		}
		inner.style.marginLeft=-1000*n+"px";
	}
}