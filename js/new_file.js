window.onload = function() {
	//console.log(window.innerHeight);
	var warp = document.getElementById('warp');
	var p = warp.children;
	var movea = $('.movenav span');
	var num = 0;
	var onoff = true;
	var iH = window.innerHeight;
	var iW = window.innerWidth;
	var head = document.getElementById('HEAD');
	var p2ls = aData.p2list;
	var p3ls = aData.p3list;
	var p6ls = aData.p6list;
	//console.log(aData.p3list);
	var p2lis = document.querySelectorAll('.p2lis')[0];
	var p3lis = document.getElementById('p3Conw');
	var p6lis = document.querySelectorAll('.p6ul')[0];
	//console.log(p6lis);
	var q = 0;
	var p4Cll = document.querySelectorAll('.p4Cll');
	var p4Clr = document.querySelectorAll('.p4Clr');
	var p4CllM = document.querySelectorAll('.p4CllM');
	var p4ClrM = document.querySelectorAll('.p4ClrM');
	var timerp3 = null;
	var p5img = document.querySelectorAll('.p5img');
	var p5h2 = document.querySelectorAll('.p5h2');
	var p6btn = document.querySelectorAll('.btn');
	var p6ul = document.querySelectorAll('.p6ul')[0];
	//console.log(p4Cll.currentStyle);
	//console.log(p4Cll)
	var moveul = document.querySelectorAll('.moveul li a');
	var atop = document.getElementById('a_top');
	var fxdiv = document.querySelectorAll('.fixeddiv')[0];
	var heada = document.querySelectorAll('.nav a');
	var zc = document.getElementById('Zc');
	p6btn[5].style.display = "none";
	var p1down = document.getElementById('p1Down');
	var p6rtxt = document.querySelectorAll('.p6rtxt')[0];
	p1down.onclick = function(){
		num = 1;
		movep();
	}
	atop.onclick = function(){
		//console.log(-num * iH + warp.offsetTop + 'px')
		 var timer = setInterval(function(){
			//var scT = fxdiv.offsetTop;
			var bktop = num * iH + warp.offsetTop + 'px';
			warp.style.top = bktop;

			console.log(warp.style.top)
			if(warp.style.top == bktop){//console.log(1)
				num = 0;
				for(var i = 0; i < movea.length; i++){
					movea[num].style.backgroundColor = 'transparent';
					movea[i].style.backgroundColor = 'rgb(255, 255, 255)';
					movea[i].className = '';
					
				};
				movep();
				movea[num].className = 'active';
				clearInterval(timer);
			}
		},30);
	}
	for(var i = 0; i < moveul.length; i++){
		moveul[i].index = i;
		moveul[i].onclick = function(){
			num = this.index;
			movep();
		};
	};
	function movep(){
		if(num == 0){
			p6btn[5].style.display = "none";
			head.className = 'hd1';
		}else{
			p6btn[5].style.display = "block";
		}
		if(num == 1){
			setTimeout(function(){
				$('#p2Conw')[0].style.opacity = '1';
				$('#p2Conw')[0].style.top = '0px';
				$('.p2Ch2')[0].style.opacity = '1';
				$('.p2Ch2')[0].style.top = '0px';
			},1000)		
		}else{				
			$('#p2Conw')[0].style.opacity = '0';
			$('#p2Conw')[0].style.top = '50px';
			$('.p2Ch2')[0].style.opacity = '0';
			$('.p2Ch2')[0].style.top = '40px';						
		}
		if(num == 2 ){
			head.className = 'hd3';
			setTimeout(function(){
				
				$('.p3h2')[0].style.top = '50%';
				$('.p3h2')[0].style.opacity = '1';
				picover();
				timerp3 = setInterval(function(){
					//console.log($('.p3_ld')[q])
					//console.log(1)
					move($('.p3_ld')[q],{
						left:0,							
						opacity:1
					},200,'easeOut');
					q++;
					//console.log(q)
					if(q == $('.p3_ld').length){//console.log(1)
						$('.p3_more')[0].style.marginTop = '20px';
						$('.p3_more')[0].style.opacity = '1';
						clearInterval(timerp3);
					}
				},500);
			},600)
		}else {
			
			clearInterval(timerp3);
			picout();
			$('.p3_more')[0].style.marginTop = '30px';
			$('.p3_more')[0].style.opacity = '0';
			$('.p3_more')[0].style.transition = '0.3s';
			$('.p3h2')[0].style.transition = '0.3s';
			$('.p3h2')[0].style.top = '45%';
			$('.p3h2')[0].style.opacity = '0';
			q = 0;
			for(var i = 0; i < $('.p3_ld').length; i++){
				//$('.p3_ld')[i].style.transition = i*0.7+1+'s';
				$('.p3_ld')[i].style.left = '-100px';
				$('.p3_ld')[i].style.opacity = '0';
			}
		}
		if(num == 3){
			setTimeout(function(){
				
				//$('.p4Cll').each(function(i,elem){})
					move(p4Cll[0],{
						left:0,							
						opacity:1
					},600,'linear',function(){
						move(p4CllM[0],{
							right:14,							
							opacity:1
						},300,'linear')
					});
					move(p4Cll[1],{
						left:0,							
						opacity:1
					},600,'linear',function(){
						move(p4CllM[1],{
							right:14,							
							opacity:1
						},300,'linear')
					});
					move(p4Cll[2],{
						left:0,							
						opacity:1
					},600,'linear',function(){
						move(p4CllM[2],{
							right:14,							
							opacity:1
						},300,'linear')
					});
					move(p4Clr[0],{
						right:0,							
						opacity:1
					},600,'linear',function(){
						move(p4ClrM[0],{
							left:14,							
							opacity:1
						},300,'linear')
					});
					move(p4Clr[1],{
						right:0,							
						opacity:1
					},600,'linear',function(){
						move(p4ClrM[1],{
							left:14,							
							opacity:1
						},300,'linear')
					});
					move(p4Clr[2],{
						right:0,							
						opacity:1
					},600,'linear',function(){
						move(p4ClrM[2],{
							left:14,							
							opacity:1
						},300,'linear')
					});
				//}
			},800)
		}else{
			
			for(var i = 0; i < p4Cll.length; i++){
				p4Cll[i].style.transition = '0.6s';
				p4Cll[i].style.left = '-100px';
				p4Cll[i].style.opacity = '0';
				//p4CllM[i].style.transition = '0.5s';
				p4CllM[i].style.right = '-41px';
				p4CllM[i].style.opacity = '0';
			};
			for(var i = 0; i < p4Clr.length; i++){
				p4Clr[i].style.transition = '0.6s';
				p4Clr[i].style.right = '-100px';
				p4Clr[i].style.opacity = '0';
				//p4ClrM[i].style.transition = '0.5s';
				p4ClrM[i].style.left = '-41px';
				p4ClrM[i].style.opacity = '0';
			}
		}
		if(num == 4){
			head.className = 'hd5';
			setTimeout(function(){
				p5h2[0].style.marginTop = '-22px';
				p5h2[0].style.opacity = '1';
			},500)
			setTimeout(function(){
				p5img[0].style.transform = 'scale(1)';
				p5img[0].style.opacity = '1';
			},500)
		}else{
			p5h2[0].style.marginTop = '20px';
			p5h2[0].style.opacity = '0';
			p5img[0].style.transform = 'scale(3)';
			p5img[0].style.opacity = '0';
		}
		if(num == 5){
			head.className = 'hd6';
			setTimeout(function(){
				p6rtxt.style.opacity = '1';
				p6rtxt.style.marginLeft = '100px';
			},500)
			
		}else{
			
			p6rtxt.style.opacity = '0';
			p6rtxt.style.marginLeft = '300px';
		}
		if(num == 1 || num == 3){
			head.className = 'header';
		}
		if(num == 0 || num == 2 || num == 5){
			movea.css('background','#fff');
		}else{
			movea.css('background','#ccc');
		}
		if(num == 2 || num == 4 || num == 5){
			zc.style.color = "#fff";
			for(var i = 0; i < heada.length; i++){
				heada[i].style.color = '#fff';
			}
		}else{
			zc.style.color = "#5c5c5c";
			for(var i = 0; i < heada.length; i++){
				heada[i].style.color = '#5c5c5c';
			}
		}
		for(var i = 0; i < movea.length; i++){
			movea[i].className = '';
			movea[num].style.backgroundColor = 'transparent';
		}
		movea[num].className = 'active';
		warp.style.top = -num * iH + 'px';
	}
	for(var i = 0; i < p.length; i++){//console.log(warp);
		p[i].style.height = iH + 'px';
		p[i].style.width = iW + 'px';
	}
	movea[0].className = 'active';
	movea[0].style.backgroundColor = 'transparent';
	movea[0].style.borderColor = '#fff';
	console.log(p2ls.length)
	for(var i = 0; i < p2ls.length; i++){
		p2lis.innerHTML += '<a href = "'+p2ls[i].hf+'" class = "p2la">'+
		'<div class ="p2abg '+p2ls[i].cl+'"></div>'+
		'<h4>'+p2ls[i].hd+'</h4>'+
		'<p>'+p2ls[i].content+'</p></a>'	
	};
	for(var i = 0; i < p3ls.length-1; i++){
		p3lis.innerHTML += '<div class = "p3_ld">'+
		'<div class = "p3_img '+p3ls[i].cl+'"></div>'+
		'<h4>'+p3ls[i].hd+'</h4>'+
		'<p>'+p3ls[i].content+'</p></div>'		
	};
	p3lis.innerHTML += '<a href="'+p3ls[3].hf+'" class = "'+p3ls[3].cl+' hovermore">'+p3ls[3].content+'</a>';
	var p3ld = $('.p3_ld')[0];
	var arrbp1 = ['0 0','-42px 0','-84px 0'];
	var arrbp2 = ['0 -42px','-42px -42px','-84px -42px'];
	$('.p3_ld')[0].children[0].style.backgroundPosition = arrbp2[0];
	$('.p3_ld')[0].children[1].style.color = '#00a0e9';
	$('.p3pic')[0].className = 'p3pic p3bok';
	$('.p3pic')[0].style.opacity = '1';
	for(var i = 0; i < p6ls.length; i++){
		p6lis.innerHTML += '<li><span class="p6lit">'+p6ls[i].tm+'</span>'+
		'<a href="'+p6ls[i].hf+'">'+p6ls[i].content+'</a></li>'
	}
	for(var i = 1; i < p6btn.length-1; i++){
		p6btn[i].onmouseover = function(){
			this.children[1].style.display = 'block';
		};
		p6btn[i].onmouseout = function(){
			this.children[1].style.display = 'none';
		};
	}
	function picover(){
		for(var i = 0; i < $('.pic1').length; i++){
			$('.pic1')[i].style.right = '130px';
			$('.pic1')[i].style.opacity = '1';
		};
		for(var i = 0; i < $('.pic2').length; i++){
			$('.pic2')[i].style.right = '0px';
			$('.pic2')[i].style.opacity = '1';
		};
	};
	function picout(){
		for(var i = 0; i < $('.pic1').length; i++){
				$('.pic1')[i].style.right = '0px';
				$('.pic1')[i].style.opacity = '0';
				$('.pic1')[i].style.transition = '0.5s';
			}
			for(var i = 0; i < $('.pic2').length; i++){
				$('.pic2')[i].style.right = '130px';
				$('.pic2')[i].style.opacity = '0';
				$('.pic2')[i].style.transition = '0.5s';
			}
	}
//	for(var i = 0; i < p4CllM.length; i++){
//		p4CllM[i].onmouseover = function(){
//			this.style.backgroundPosition = 
//		}
//	}
	var onoff2 = true;
	for(var i = 0; i < $('.p3_ld').length; i++){
		$('.p3_ld')[i].index = i;		
		$('.p3_ld')[i].onmouseover = function(){
			console.log(1)
//			if(onoff2){
//				onoff2 = false;
				for(var i = 0; i < $('.p3pic').length; i++){//console.log($('.p3pic')[i])
					//$('.p3pic')[i].className = 'p3pic p3none';
					//$('.p3pic')[i].style.transition = '1s';
					$('.p3pic')[i].style.opacity = '0';
				};
				//picover();
				$('.p3pic')[this.index].className = 'p3pic p3bok';
				var that = this;
				setTimeout(function(){
					$('.p3pic')[that.index].style.opacity = '1';
				},200);
	//			
				//$($('.p3pic')[this.index]).siblings().css('display','none');
				p3ld.children[0].style.backgroundPosition = arrbp1[p3ld.index];
				p3ld.children[1].style.color = '#fff';
				this.children[0].style.backgroundPosition = arrbp2[this.index];
				this.children[1].style.color = '#00a0e9';
				p3ld = this;
			//};
//			setTimeout(function(){
//				onoff2 = true;
//			},500)
	};				
//		$('.p3_ld')[i].onmouseout = function(){
//			picout();
//		}
	};
	for(var i = 0; i < $('.p3pic').length; i++){
		$('.p3pic')[i].onmouseover = function(){
			picover();
		};
		$('.p3pic')[i].onmouseout = function(){
			for(var i = 0; i < $('.pic1').length; i++){
				$('.pic1')[i].style.right = '0px';
				$('.pic1')[i].style.opacity = '1';
				$('.pic1')[i].style.transition = '0.5s';
			}
			for(var i = 0; i < $('.pic2').length; i++){
				$('.pic2')[i].style.right = '130px';
				$('.pic2')[i].style.opacity = '1';
				$('.pic2')[i].style.transition = '0.5s';
			}
		};
	};
	var numT = 0;
	p6ul.innerHTML+=p6ul.innerHTML;
	var timer2 = setInterval(function(){
		numT++;
		
		if(Math.abs(parseInt($(p6ul).css('marginTop'))) == $(p6ul).height()/2){
			//console.log(1);
			p6ul.style.marginTop = '0';
			numT = 0;
		}
		
//		if(numT > 200){
//			
//		}
		$(p6ul).css({
			marginTop:-numT
		})
//		move(p6ul,{
//			marginTop : '-30'
//		},1950,'linear',function(){//console.log(1)
//			p6ul.style.marginTop = '0';
//			p6ul.appendChild(p6ul.firstChild);
//		});
	},30);
	
	
	
	
	addWhell(document,function(down){
		if(onoff){
			onoff = false;
			if(down){
				num --;
				if(num <= 0){
					num = 0;
				}				
			}else{
				num++;
				if(num == p.length){
					num = p.length - 1;
				}
			}		
			//console.log(num)
			
			movep();
			setTimeout(function(){
				onoff = true;
			},1500);			
		}
	});
	//console.log(num)
}
