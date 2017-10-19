/*
* @Author: Administrator
* @Date:   2017-10-16 13:58:45
* @Last Modified by:   Administrator
* @Last Modified time: 2017-10-18 09:00:02
*/
window.onload=function(){
$(function(){
    let banner=$('.banner main');
	let left=$('a.icon-right1');
	let right=$('a.icon-right');
    let imglist=$('.banner main .content .left .imglist');
    let btn=$('.banner main .content .left .btnlist');
	let btnlist=$('.banner main .content .left .btnlist>li');
    let list=$('.banner main .content .left .imglist>li');
    let w=parseInt(getComputedStyle(imglist[0],null).width);
    let now=0;
    let next=0;
    let flag=true;
    function move(){
        if(!flag){
            return;
        }
        flag=false;
        next++;
        if(next==list.length){
            next=0;
        }
        list[next].style.left= w+'px';
        animate(list[now],{left:-w});
        animate(list[next],{left:0},function(){
            flag=true;
        });
        for(let i=0;i<btnlist.length;i++){
            btnlist[i].style.background='#dddddd';
        }
        btnlist[next].style.background='#515967';
        now=next;
    }
    let t;
    t=setInterval(move,1000);
    right.on('click',move)
    left .on('click',function(){
    	next--;
    	if(next==-1){
    		next=list.length-1;
    	}
    	list[next].style.left=-w+'px';
    	animate(list[now],{left:w});
    	animate(list[next],{left:0});
        for(let i=0;i<btnlist.length;i++){
            btnlist[i].style.background='#dddddd';
        }
        btnlist[next].style.background='#515967';
    	now=next;
    })
    banner.mouseover(function(){
        clearInterval(t);
     });
    banner.mouseout(function(){
     t=setInterval(move,1500);
     });
})
}
