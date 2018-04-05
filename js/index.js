//banner效果
{
	let imgs=document.querySelectorAll(".banner_img li");
	let pagers=document.querySelectorAll(".banner_pagerbox li");
	let banner=document.querySelector("#banner");
	let next=document.querySelector(".next");
	let prev=document.querySelector(".prev");
	// 点击按钮切换图片
	pagers.forEach(function(ele,index){
		ele.onclick=function(){
			for(let i=0;i<imgs.length;i++){
				imgs[i].classList.remove("banner_img_list1");
				pagers[i].classList.remove("active");
			}
				this.classList.add("active");
				imgs[index].classList.add("banner_img_list1");
				n=index;
		}
	});
	//图片自动轮播
	let n=0;
	let t=setInterval(move,3000);
		function move(){
			n++;
			if(n===imgs.length){
				n=0;
		    }
		    if(n<0){
		    	n=imgs.length-1;
		    }
			for(let i=0;i<imgs.length;i++){
			imgs[i].classList.remove("banner_img_list1");
				pagers[i].classList.remove("active");
			}
			imgs[n].classList.add("banner_img_list1");
			pagers[n].classList.add("active");
		
	}
	banner.onmouseenter=function(){
		clearInterval(t);
	};
	banner.onmouseleave=function(){
		t=setInterval(move,3000);
	};
	let flag=true;
	next.onclick=function(){
		// if(flag){
		// 	flag=false;
			move();
		// }
	};
	prev.onclick=function(){
		// if(flag){
		// 	flag=false;
			n-=2;
			move();
		// }
	};
	// imgs.forEach(function(ele){
	// 	ele.addEventListener("transitionend",function(){
	// 		flag=true;
	// 	});
	// });
}

//nav导航
{
	let labels=document.querySelectorAll(".nav_wenzi span");
	let contents=document.querySelectorAll(".nav_box");
	let obj=contents[0];
	console.log(obj);
	labels.forEach(function(ele,index){
		ele.onmouseenter=function(){
			obj.style.display="none";
			contents[index].style.display="block";
			obj=contents[index];
		}
		ele.onmouseleave=function(){
			contents[index].style.display="none";
		}
	})
}
{	
	let boxitems=document.querySelectorAll(".banner_nav li");
	let banner_navitems=document.querySelectorAll(".boxitem");
	let obj=banner_navitems[0];
	console.log(obj);
	boxitems.forEach(function(ele,index){
		ele.onmouseenter=function(){
			obj.style.display="none";
			banner_navitems[index].style.display="block";
			obj=banner_navitems[index];
		}
		ele.onmouseleave=function(){
			banner_navitems[index].style.display="none";
		}
	})
}

//单品部分
{
		let prev=document.querySelector(".star_prev");
		let next=document.querySelector(".star_next");
		let inner=document.querySelector(".star_inner");
		let n=0; //n代表往左移动的屏幕数
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
			inner.style.marginLeft=-992*n+"px";
		};
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
			inner.style.marginLeft=-992*n+"px";
		};
	// let n=0;
	// const innerlist=document.querySelectorAll(".star");
	// innerlist.forEach(function(ele){
	// 	innerlist.style.marginLeft=n*-1226+"px";
	// 	star(ele);
		
	// });
}
//为你推荐
{
    let prev=document.querySelector(".star_prev1");
    let next=document.querySelector(".star_next1");
    let inner=document.querySelector(".tuijian_inner");
    let n=0; //n代表往左移动的屏幕数
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
        inner.style.marginLeft=-1226*n+"px";
    };
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
        inner.style.marginLeft=-1226*n+"px";
    };
}

//搭配部分
{
	function dapei(parent){
		const types=parent.querySelectorAll(".type");
		const goods=parent.querySelectorAll(".dapei_rlist");
		types.forEach(function(ele,index){
			ele.onmouseenter=function(){
				for(let i=0;i<types.length;i++){
					types[i].classList.remove("dapei_wenzi_active");
					goods[i].classList.remove("active");
				}
				this.classList.add("dapei_wenzi_active");
				goods[index].classList.add("active");
			}
		})
	}
	const contentList=document.querySelectorAll(".dapei");
	contentList.forEach(function(ele){
		dapei(ele);
	});
}
//内容
{
	function neirong1(parent){
		let prev=parent.querySelector(".neirong_prev");
		let next=parent.querySelector(".neirong_next");
		let inner=parent.querySelector(".item_inner");
		let contents=parent.querySelectorAll(".neirong_bottom_item");
		let pagers=parent.querySelectorAll(".dian1");
		let n=0;
		next.onclick=function(){
			n++;
			if(n===contents.length){
				n=contents.length-1;
			}
			inner.style.marginLeft=n*-296+"px";
			pagers[n].classList.add("active");
			pagers[n-1].classList.remove("active");
		};
		prev.onclick=function(){
			n--;
			if(n<0){
				n=0;
			}
			inner.style.marginLeft=n*-296+"px";
			pagers[n].classList.add("active");
			pagers[n+1].classList.remove("active");
		};
		let obj=pagers[0];
		pagers.forEach(function(ele,index){
			ele.onclick=function(){
				obj.classList.remove("active");
				this.classList.add("active");
				obj=ele;
				inner.style.marginLeft=index*-296+"px";
				n=index;
			}
		});
	}
	const contentslist=document.querySelectorAll(".neirong_item");
	contentslist.forEach(function(ele){
		neirong1(ele);
	});

}










//tuijian
// {
// 	const prev=document.querySelector(".star_prev");
// 	const next=document.querySelector(".star_next");
// 	const inner1=document.querySelector(".tuijian_inner");
// 	// console.log(inner1);
// 	let n=0; //n代表往左移动的屏幕数
// 	next.onclick=function(){
// 		n++;
// 		prev.classList.remove("disable");
// 		if(n===2){
// 			this.classList.add("disable");
// 		}
// 		if(n===3){
// 			n=2;
// 			return;
// 		}
// 		inner1.style.marginLeft=-1226*n+"px";
// 	};
// 	prev.onclick=function(){
// 		n--;
// 		next.classList.remove("disable");
// 		if(n===0){
// 			this.classList.add("disable");
// 		}
// 		if(n===-1){
// 			n=0;
// 			return;
// 		}
// 		inner1.style.marginLeft=-1226*n+"px";
// 	};
// }
