$(function(){
	//--不能横屏提示
	walFun();
	$(window).resize(function(){
		walFun();
		})
	//--logo上的小动画
	$('#pageWal-1').find('.img01').animate({
		width:32*saleFF,
		left:(124)*saleFF,
		top:(106+190)*saleFF
		})
	$('#pageWal-1').find('.img02').animate({
		width:40*saleFF,
		left:(150)*saleFF,
		top:(194+190)*saleFF
		})
	//--页面加载效果
	//--页面整体切换
	//--第一屏背景线条(复杂特效)
	//--第一屏logo出现
	//--第一屏MBTI出现
	//--第一屏文字出现
	//--第一屏按钮(复杂特效)
	//--第二屏线条(复杂特效)
	//--第二屏文字现出
	//--第二屏按钮出现
	//--第三屏标题文字再现
	//--第三屏文字列表再现
	//--第三屏滑动选项(复杂特效)
	//--第五屏线条出现(复杂特效)
	//--第五屏标题出现
	//--第五屏倾向图
	//--第五屏按钮出现
	//--第六屏线条出现
	//--第六屏标题出现
	//--第六屏文字出现
	//--js滚动条
	//--第六屏两个按钮出现
	//--第六屏返回效果
	//--第六屏内容切换
	//--新第二屏标题出现
	//--新第二屏三个圆(复杂特效)
	//--新第二屏按钮出现
	page2setFun();
	//
	})

var pageW;
var pageH;
pageW = $(window).width()<$(window).height()?$(window).width():$(window).height();
pageW = pageW<640?pageW:640;
pageH = $(window).width()<$(window).height()?$(window).height():$(window).width();

var sw = 750;
var sh = sw*(pageH/pageW);
var saleFF=pageW/sw;
function walFun(){//--不能横屏提示
	if($(window).width()>$(window).height()){
		$('.walTips').show();
		}else{
			$('.walTips').hide();
			}
	}
	
//--开始按钮
function startBtnFun(){
	var btnW=271*saleFF;
	var btnH=271*saleFF;
	$('.startBtn').animate({
			width:btnW,
			height:btnW
			})
	$('.startBtn').find('.bg').animate({
			width:btnW-58*saleFF,
			height:btnW-58*saleFF,
			left:29*saleFF,
			top:29*saleFF
			})
	$('.startBtn').find('.bg').find('div').animate({
			height:76*saleFF
			})
	$('.startBtn').find('.bg3').animate({
			width:btnW-40*saleFF,
			height:btnW-40*saleFF,
			left:20*saleFF,
			top:20*saleFF
			})
	$('.startBtn').find('.bg3').css('border',"rgba(255,255,255,0.7) solid "+9*saleFF+"px");
	}

//--第二屏内容位置
function page2setFun(){
	$('#pageWal-2').find('li').each(function(){
		var _this=$(this);
		var _thisW=_this.find('p').width();
		_this.find('.bg').animate({
		  width:_thisW,
		  height:_thisW
		  })
		_this.find('p').css("margin-top",-_this.find('p').height()/2);
		})
	}
	


