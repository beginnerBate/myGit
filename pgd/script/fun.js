
	
//--第一屏
function page1Fun(){
	  
	  var color="rgba(255,255,255,0.5)";
      var stage = new Kinetic.Stage({
        container: 'canvasBg',
        width: pageW,
        height: pageH
      });
		
      var layer = new Kinetic.Layer({});
	  
	  //--线条起始点
	  var line1 = new Kinetic.Line({
		points: [0, 1070*saleFF, 0, 1070*saleFF],
        tension: 0.5, closed: true, stroke: color, strokeWidth: 5*saleFF
	  }); 
	  var line2 = new Kinetic.Line({
		points: [205*saleFF, 495*saleFF, 205*saleFF, 495*saleFF],
        tension: 0.5, closed: true, stroke: color, strokeWidth: 3*saleFF
	  });
	  var line3 = new Kinetic.Line({
		points: [sw*saleFF, 200*saleFF, sw*saleFF, 200*saleFF],
        tension: 0.5, closed: true, stroke: color, strokeWidth: 3*saleFF
	  });
	  var line4 = new Kinetic.Line({
		points: [0, (sh-10)*saleFF, 0, (sh-10)*saleFF],
        tension: 0.5, closed: true, stroke: color, strokeWidth: 2*saleFF
	  });
	  var line5 = new Kinetic.Line({
		points: [310*saleFF, (sh-190)*saleFF, 310*saleFF, (sh-190)*saleFF],
        tension: 0.5, closed: true, stroke: color, strokeWidth: 2*saleFF
	  });
	  var line6 = new Kinetic.Line({
		points: [510*saleFF, (sh-30)*saleFF, 510*saleFF, (sh-30)*saleFF],
        tension: 0.5, closed: true, stroke: color, strokeWidth: 2*saleFF
	  });
	  
	  //--圆点起始状态
	  var yuan1 = new Kinetic.Circle({
		  radius: 12*saleFF, fill: '#fff', x:208*saleFF, y:495*saleFF, opacity:0
		  });
	  var yuan1Out = new Kinetic.Circle({
		  radius: 16*saleFF, stroke: '#fff', strokeWidth:2*saleFF, x:208*saleFF, y:495*saleFF, opacity:0
		  });
	  var yuan2 = new Kinetic.Circle({
		  radius: 12*saleFF, fill: '#fff', x:292*saleFF, y:270*saleFF, opacity:0
		  });
	  var yuan2Out = new Kinetic.Circle({
		  radius: 16*saleFF, stroke: '#fff', strokeWidth:2*saleFF, x:292*saleFF, y:270*saleFF, opacity:0
		  });
	  var yuan3 = new Kinetic.Circle({
		  radius: 12*saleFF, fill: color, x:638*saleFF, y:200*saleFF, opacity:0
		  });
	  var yuan4 = new Kinetic.Circle({
		  radius: 12*saleFF, fill: color, x:612*saleFF, y:495*saleFF, opacity:0
		  });
	  var yuan5 = new Kinetic.Circle({
		  radius: 8*saleFF, fill: "#4dd1d2", x:310*saleFF, y:(sh-190)*saleFF, opacity:0
		  });
	  var yuan6 = new Kinetic.Circle({
		  radius: 20*saleFF, fill: "#4dd1d2", x:510*saleFF, y:(sh-30)*saleFF, opacity:0
		  });
	  
	  //--添加到层和舞台
      layer.add(line1, line2, line3, line4, line5, line6, yuan1, yuan1Out, yuan2, yuan2Out, yuan3, yuan4, yuan5, yuan6);
      stage.add(layer);

      // tweens线条结束点
	  var line1Tween = new Kinetic.Tween({
        node: line1, duration: 1.5, points: [0, 1070*saleFF, 390*saleFF, 0]
      }); 
	  var line2Tween = new Kinetic.Tween({
        node: line2, duration: 0.5, points: [600*saleFF, 495*saleFF, 205*saleFF, 495*saleFF]
      });
	  var line3Tween = new Kinetic.Tween({
		node: line3, duration: 1, points: [sw*saleFF, 200*saleFF, (sw-100)*saleFF, 200*saleFF]
      });
	  var line4Tween = new Kinetic.Tween({
        node: line4, duration: 0.5, points: [0, (sh-10)*saleFF, 310*saleFF, (sh-190)*saleFF],
      });
	  var line5Tween = new Kinetic.Tween({
        node: line5, duration: 0.5, points: [310*saleFF, (sh-190)*saleFF, 510*saleFF, (sh-30)*saleFF],
      });
	  var line6Tween = new Kinetic.Tween({
        node: line6, duration: 0.5, points: [510*saleFF, (sh-30)*saleFF, sw*saleFF, (sh-50)*saleFF],
      });
	  
	  //--圆点结束状态
	  var yuan1Tween = new Kinetic.Tween({
        node: yuan1, duration: 0.5, opacity:1
      });
	  var yuan1OutTween = new Kinetic.Tween({
        node: yuan1Out, duration: 0.5, opacity:1
      });
	  var yuan2Tween = new Kinetic.Tween({
        node: yuan2, duration: 0.5, opacity:1
      });
	  var yuan2OutTween = new Kinetic.Tween({
        node: yuan2Out, duration: 0.5, opacity:1
      });
	  var yuan3Tween = new Kinetic.Tween({
        node: yuan3, duration: 0.5, opacity:1
      });
	  var yuan4Tween = new Kinetic.Tween({
        node: yuan4, duration: 0.5, opacity:1
      });
	  var yuan5Tween = new Kinetic.Tween({
        node: yuan5, duration: 0.5, opacity:1
      });
	  var yuan6Tween = new Kinetic.Tween({
        node: yuan6, duration: 0.5, opacity:1
      });
	  
	  line1Tween.play();
	  setTimeout(function(){
		  line2Tween.play();
		  yuan1Tween.play();
		  yuan1OutTween.play();
		  },1000);
	  setTimeout(function(){
		  line3Tween.play();
		  },500);
	  setTimeout(function(){
		  line4Tween.play();
		  },500);
	  setTimeout(function(){
		  line5Tween.play();
		  yuan5Tween.play();
		  },1000);
	  setTimeout(function(){
		  line6Tween.play();
		  yuan2Tween.play();
		  yuan2OutTween.play();
		  yuan3Tween.play();
		  yuan4Tween.play();
		  yuan6Tween.play();
		  },1500);
	  
	//-------------------logo图片--文字
	var layer2 = new Kinetic.Layer({});
	var logoGroup = new Kinetic.Group({
		x: -291*saleFF,
		y: 1070*saleFF,
		});
	
	var imageObj = new Image();//--logo背景
	imageObj.src = 'image/img291.png';
	imageObj.onload = function() {
		var logoImg = new Kinetic.Image({
			x: 0,
			y: 0,
			image: imageObj,
			width: 291*saleFF,
			height: 304*saleFF,
			});
		logoGroup.add(logoImg);	
		};
		
	layer2.add(logoGroup);
	stage.add(layer2);
	/**/
	var logoGroupTween = new Kinetic.Tween({
		node: logoGroup, duration: 2, easing: Kinetic.Easings.ElasticEaseInOut, x:0, y:190*saleFF
	  });
	setTimeout(function(){
		logoGroupTween.play();
		},1500);
	setTimeout(function(){
		$('#pageWal-1').find('.img01').addClass("on");
		$('#pageWal-1').find('.img02').addClass("on animated wobble");
		setInterval(function(){
			$('#pageWal-1').find('.img02').removeClass("animated wobble");
			setTimeout(function(){$('#pageWal-1').find('.img02').addClass("animated wobble")},500);
			},2000)
		},3500);
		
	
	var image2Obj = new Image();//--MBTI
	image2Obj.src = 'image/img412.png';
	image2Obj.onload = function() {
		var img2 = new Kinetic.Image({
			x: (sw+20)*saleFF,
			y: 245*saleFF,
			image: image2Obj,
			width: 428*saleFF,
			height: 103*saleFF,
			});
			
		layer2.add(img2);
		stage.add(layer2);
		
		/**/
		var img2Tween = new Kinetic.Tween({
			node: img2, duration: 2, easing: Kinetic.Easings.ElasticEaseInOut, x:295*saleFF
		  });
		setTimeout(function(){img2Tween.play()},2000);
		
		};
		
	var image3Obj = new Image();//--职业性格测试
	image3Obj.src = 'image/img571.png';
	image3Obj.onload = function() {
		var img3 = new Kinetic.Image({
			x: sw*saleFF,
			y: 385*saleFF,
			image: image3Obj,
			width: 566*saleFF,
			height: 99*saleFF,
			});
			
		layer2.add(img3);
		stage.add(layer2);
		
		/**/
		var img3Tween = new Kinetic.Tween({
			node: img3, duration: 2, easing: Kinetic.Easings.ElasticEaseInOut, x:(sw-525)*saleFF
		  });
		setTimeout(function(){img3Tween.play()},2500);
		setTimeout(function(){$('#pageWal-1').find('.content').addClass("animated fadeInUp")},3500);
		
		};
		
	//--开始测试按钮
	startBtnFun();
	$('.startBtn').animate({
		left:350*saleFF,
		top:(sh-80-231)*saleFF
		})
	setTimeout(function(){
			$('.startBtn').addClass('on');
			},4000);
	$('.startBtn').click(function(){
		$('#pageWal-1').addClass('on');
		//--播放第二屏
		setTimeout(function(){
			page2Fun();
			},1000);
		})
	
	
	}
	
	


//--第二屏
function page2Fun(){
	  
	  
	  $('#pageWal-2').find('.title').addClass("animated fadeInUp")
	  setTimeout(function(){
		  $('#pageWal-2').find('li').eq(0).addClass("animated zoomIn on")
		  },500);
	  setTimeout(function(){
		  $('#pageWal-2').find('li').eq(1).addClass("animated zoomIn on")
		  },800);
	  setTimeout(function(){
		  $('#pageWal-2').find('li').eq(2).addClass("animated zoomIn on")
		  },1200);
	  setTimeout(function(){
		  $('#pageWal-2').find('.btn').addClass("animated fadeInUp")
		  },1500);
	  
	  $('#pageWal-2').find('.btn').click(function(){
		  $('#pageWal-2').addClass('on');
			//--播放第三屏第一道试题
			setTimeout(function(){
				testFun(0);
				},100);
		  })
	  
}


//--播放试题
function testFun(i){
	var _this=$('.testWal').eq(i);
	_this.find('.testTitle').addClass("animated fadeInDown");
	setTimeout(function(){
				_this.find('.testList').find('li').eq(0).addClass("animated fadeInRight");
				},500);
	setTimeout(function(){
				_this.find('.testList').find('li').eq(1).addClass("animated fadeInRight");
				},800);
	setTimeout(function(){
				_this.find('.testSlider').addClass("animated fadeInUp");
				},1200);
    setTimeout(function(){
				_this.find('.pageBtn').addClass("animated fadeInUp on");
				},1500);
	}
$(function(){
	//--做题
	$('.testWal').each(function(i){
		$(this).find('.pageBtn').click(function(){
			if(i<$('.testWal').length-1){
				$('.testWal').eq(i).addClass('on');
				testFun(i+1);
				}else{
					//alert("做完了");播放第四屏
					$('.testWal:last').addClass('on');
					page4Fun();
					}
			})
		})
	})
	

//--第四屏
function page4Fun(){
	  
	  var color="rgba(255,255,255,0.5)";
      var stage = new Kinetic.Stage({
        container: 'canvasBg4',
        width: pageW,
        height: pageH
      });
		
      var layer = new Kinetic.Layer({});
	  
	  //--线条起始点
	  var line1 = new Kinetic.Line({
		points: [30*saleFF, 0, 30*saleFF, 0],
        tension: 0.5, closed: true, stroke: color, strokeWidth: 3*saleFF
	  }); 
	  var line2 = new Kinetic.Line({
		points: [95*saleFF, 25*saleFF, 95*saleFF, 25*saleFF],
        tension: 0.5, closed: true, stroke: color, strokeWidth: 3*saleFF
	  });
	  var line3 = new Kinetic.Line({
		points: [170*saleFF, 145*saleFF, 170*saleFF, 145*saleFF],
        tension: 0.5, closed: true, stroke: color, strokeWidth: 3*saleFF
	  });
	  var line4 = new Kinetic.Line({
		points: [335*saleFF, 109*saleFF, 335*saleFF, 109*saleFF],
        tension: 0.5, closed: true, stroke: color, strokeWidth: 3*saleFF
	  });
	  var line5 = new Kinetic.Line({
		points: [500*saleFF, 300*saleFF, 500*saleFF, 300*saleFF],
        tension: 0.5, closed: true, stroke: color, strokeWidth: 3*saleFF
	  });
	  
	  //--圆点起始状态
	  var yuan1 = new Kinetic.Circle({
		  radius: 14*saleFF, fill: '#4dd1d2', x:95*saleFF, y:25*saleFF, opacity:0
		  });
	  var yuan2 = new Kinetic.Circle({
		  radius: 14*saleFF, fill: '#4dd1d2', x:170*saleFF, y:145*saleFF, opacity:0
		  });
	  var yuan3 = new Kinetic.Circle({
		  radius: 8*saleFF, fill: "#4dd1d2", x:335*saleFF, y:109*saleFF, opacity:0
		  });
	  var yuan4 = new Kinetic.Circle({
		  radius: 14*saleFF, fill: "#4dd1d2", x:500*saleFF, y:300*saleFF, opacity:0
		  });
	  
	  //--添加到层和舞台
      layer.add(line1, line2, line3, line4, line5, yuan1, yuan2, yuan3, yuan4);
      stage.add(layer);
	  
	  // tweens线条结束点
	  var line1Tween = new Kinetic.Tween({
        node: line1, duration: 0.5, points: [30*saleFF, 0, 95*saleFF, 25*saleFF],
      }); 
	  var line2Tween = new Kinetic.Tween({
        node: line2, duration: 0.5, points: [95*saleFF, 25*saleFF, 170*saleFF, 145*saleFF],
      });
	  var line3Tween = new Kinetic.Tween({
		node: line3, duration: 0.5, points: [170*saleFF, 145*saleFF, 335*saleFF, 109*saleFF],
      });
	  var line4Tween = new Kinetic.Tween({
        node: line4, duration: 0.5, points: [335*saleFF, 109*saleFF, 500*saleFF, 300*saleFF],
      });
	  var line5Tween = new Kinetic.Tween({
        node: line5, duration: 0.5, points: [500*saleFF, 300*saleFF, sw*saleFF, 10*saleFF],
      });
	  
	  //--圆点结束状态
	  var yuan1Tween = new Kinetic.Tween({
        node: yuan1, duration: 0.5, opacity:1
      });
	  var yuan2Tween = new Kinetic.Tween({
        node: yuan2, duration: 0.5, opacity:1
      });
	  var yuan3Tween = new Kinetic.Tween({
        node: yuan3, duration: 0.5, opacity:1
      });
	  var yuan4Tween = new Kinetic.Tween({
        node: yuan4, duration: 0.5, opacity:1
      });
	  
	  line1Tween.play();
	  setTimeout(function(){
		  line2Tween.play();
		  yuan1Tween.play();
		  },400);
	  setTimeout(function(){
		  line3Tween.play();
		  yuan2Tween.play();
		  },800);
	  setTimeout(function(){
		  line4Tween.play();
		  yuan3Tween.play();
		  },1200);
	  setTimeout(function(){
		  line5Tween.play();
		  yuan4Tween.play();
		  },1600);
	  $('#pageWal-4').find('.pageTitle').addClass("animated fadeInDown")
	  setTimeout(function(){$('#pageWal-4').find('.Tendency').addClass("animated bounceIn")},1000);
	  setTimeout(function(){$('#pageWal-4').find('.btnDiv').addClass("animated fadeInUp")},1500);
	  
	  //--播放第五屏
	  $('#pageWal-4').find('.btnDiv').find('a').each(function(i){
		$(this).click(function(){
			$('#pageWal-4').find('.btnDiv').find('a').removeClass('on');
			$(this).addClass('on');
			$('#canvasBg5').html("");
			$('#pageWal-4').addClass('on');
			page5Fun(i);
			})
	   })
	  
}

//--第五屏
function page5Fun(i){
	  
	  var color="rgba(255,255,255,0.5)";
      var stage = new Kinetic.Stage({
        container: 'canvasBg5',
        width: pageW,
        height: pageH
      });
		
      var layer = new Kinetic.Layer({});
	  
	  //--线条起始点
	  var line1 = new Kinetic.Line({
		points: [0*saleFF, 245*saleFF, 0*saleFF, 245*saleFF],
        tension: 0.5, closed: true, stroke: color, strokeWidth: 3*saleFF
	  }); 
	  var line2 = new Kinetic.Line({
		points: [200*saleFF, 190*saleFF, 200*saleFF, 190*saleFF],
        tension: 0.5, closed: true, stroke: color, strokeWidth: 3*saleFF
	  });
	  var line3 = new Kinetic.Line({
		points: [335*saleFF, 245*saleFF, 335*saleFF, 245*saleFF],
        tension: 0.5, closed: true, stroke: color, strokeWidth: 3*saleFF
	  });
	  var line4 = new Kinetic.Line({
		points: [445*saleFF, 120*saleFF, 445*saleFF, 120*saleFF],
        tension: 0.5, closed: true, stroke: color, strokeWidth: 3*saleFF
	  });
	  var line5 = new Kinetic.Line({
		points: [695*saleFF, 180*saleFF, 695*saleFF, 180*saleFF],
        tension: 0.5, closed: true, stroke: color, strokeWidth: 3*saleFF
	  });
	  
	  //--圆点起始状态
	  var yuan1 = new Kinetic.Circle({
		  radius: 14*saleFF, fill: '#4dd1d2', x:200*saleFF, y:190*saleFF, opacity:0
		  });
	  var yuan2 = new Kinetic.Circle({
		  radius: 14*saleFF, fill: '#4dd1d2', x:335*saleFF, y:245*saleFF, opacity:0
		  });
	  var yuan3 = new Kinetic.Circle({
		  radius: 8*saleFF, fill: "#4dd1d2", x:445*saleFF, y:120*saleFF, opacity:0
		  });
	  var yuan4 = new Kinetic.Circle({
		  radius: 14*saleFF, fill: "#4dd1d2", x:695*saleFF, y:180*saleFF, opacity:0
		  });
	  
	  //--添加到层和舞台
      layer.add(line1, line2, line3, line4, line5, yuan1, yuan2, yuan3, yuan4);
      stage.add(layer);
	  
	  // tweens线条结束点
	  var line1Tween = new Kinetic.Tween({
        node: line1, duration: 0.5, points: [0*saleFF, 245*saleFF, 200*saleFF, 190*saleFF],
      }); 
	  var line2Tween = new Kinetic.Tween({
        node: line2, duration: 0.5, points: [200*saleFF, 190*saleFF, 335*saleFF, 245*saleFF],
      });
	  var line3Tween = new Kinetic.Tween({
		node: line3, duration: 0.5, points: [335*saleFF, 245*saleFF, 445*saleFF, 120*saleFF],
      });
	  var line4Tween = new Kinetic.Tween({
        node: line4, duration: 0.5, points: [445*saleFF, 120*saleFF, 695*saleFF, 180*saleFF],
      });
	  var line5Tween = new Kinetic.Tween({
        node: line5, duration: 0.5, points: [695*saleFF, 180*saleFF, 710*saleFF, 0*saleFF],
      });
	  
	  //--圆点结束状态
	  var yuan1Tween = new Kinetic.Tween({
        node: yuan1, duration: 0.5, opacity:1
      });
	  var yuan2Tween = new Kinetic.Tween({
        node: yuan2, duration: 0.5, opacity:1
      });
	  var yuan3Tween = new Kinetic.Tween({
        node: yuan3, duration: 0.5, opacity:1
      });
	  var yuan4Tween = new Kinetic.Tween({
        node: yuan4, duration: 0.5, opacity:1
      });
	  
	  line1Tween.play();
	  setTimeout(function(){
		  line2Tween.play();
		  yuan1Tween.play();
		  },400);
	  setTimeout(function(){
		  line3Tween.play();
		  yuan2Tween.play();
		  },800);
	  setTimeout(function(){
		  line4Tween.play();
		  yuan3Tween.play();
		  },1200);
	  setTimeout(function(){
		  line5Tween.play();
		  yuan4Tween.play();
		  },1600);
	  pageWal_5Fun(i,true);
	  $('.pageWal-5').find('.pageTitle').addClass("animated fadeInDown")
	  setTimeout(function(){$('.pageWal-5').find('.scroll').addClass("animated fadeIn")},1000);
	  setTimeout(function(){
		  //$('.pageWal-5').find('.btn').addClass("animated fadeInUp");
		  $('.pageWal-5').addClass('onon');
		  },1500);
	  //setTimeout(function(){$('.pageWal-5').find('.pageBtn').addClass("animated fadeInUp on")},2500);
	  //--返回第四屏
	  $('.pageWal-5').find('.pageBtn').find('a').click(function(){
		  $('#pageWal-4').removeClass('on');
		  setTimeout(function(){
			  $('.pageWal-5').find('.pageTitle').removeClass("fadeInDown");
			  $('.pageWal-5').find('.scroll').removeClass("fadeIn");
			  $('.pageWal-5').find('.btn').removeClass("fadeInUp");
			  $('.pageWal-5').find('.pageBtn').removeClass("animated fadeInUp on")
			  $('.pageWal-5').removeClass('onon');
			  $('.pageWal-5').find('.pageWal-5D').removeClass('on');
			  $('.pageWal-5').find('.pageWal-5D').removeClass('on2');
			  },1000);
		  })
	  
}
//--第五页内容切换
$(function(){
	$('.pageWal-5').find('.pageWal-5D').each(function(i){
		$(this).find('.btn').click(function(){
			pageWal_5Fun(i);
			})
		})
	})
function pageWal_5Fun(i,now){
	$('.pageWal-5').find('.pageWal-5D').each(function(){
		var _this=$(this);
		if($(this).hasClass('on')){
			$(this).removeClass('on');
			$(this).addClass('on2');
			setTimeout(function(){
				_this.removeClass('on2');
				},500);
			}
		})
	if(now==true){
		$('.pageWal-5').find('.pageWal-5D').eq(i).addClass('on');
		}else{
			$('.pageWal-5').find('.pageWal-5D').eq(i+1).addClass('on');
			}
	
	}
