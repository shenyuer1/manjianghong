/*
* @Author: Administrator
* @Date:   2017-10-16 22:49:01
* @Last Modified by:   Administrator
* @Last Modified time: 2017-10-17 08:53:46
*/
$(function(){
	let list=$('.activities ul>li');
	let mask=$('.mask');
	let mimg=$('img',mask);
	let h=window.innerHeight;
	let scrolltop;
	$(window).scroll(function(event) {
		scrolltop=$(window).scrollTop();
	});	
	list.on('click',function(){
		$('body').css({height:h,'overflow':'hidden',top:scrolltop});
        let src=$('.img1',this).attr('src');
        mimg.attr('src',src);
        mask.addClass('active');
        let index1=$(this).index();
        let left=$('.mask .a2');
	    left.click(function(){
	    	index1--;
	    	if(index1==-1){
	    		index1=8;
	    	}

	    	let that=list[index1];
		    src=$('.img1',that).attr('src');
		    mimg.attr('src',src);

	    })
	    let right=$('.mask .a3');
	    right.click(function(){
		index1++;
	    	if(index1==8){
	    		index1=0;
	    	}
	    	// let s=$('list:nth-child(2)');
	    	// console.log(s);
	    	let that=list[index1];
		    src=$('.img1',that).attr('src');
		    mimg.attr('src',src);
	    })
	})
	let close=$('.mask .a1');
	close.click(function(){
		mask.removeClass('active');
        $('body').css({height:'auto','overflow':' visible',top:'0'});

	})
	
   })