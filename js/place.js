   
function locked(obj,time){
		var aa = setTimeout(function(){
			obj1.lock = false;
			obj.show();
			clearTimeout(aa);
		},time)   		
}
locked($(".b1").find(".next"),1300);

var obj1=new Slider({
	lock : true,
	wrap:$(".wrap"),
	type:"touch",
	tagname:"section",
	callback:function(){
		idx = obj1._getIndex();
   		//obj1.lock = true;
   		locked($('.b'+(idx+1)+'').find(".next"),2000)
	}
})

//最后一页的路线图
var arr1 = [
	{
		moveX:70,
		moveY:70,
		toX:0,
		toY:-135
	},
	{
		moveX:70,
		moveY:205,
		toX:80,
		toY:0
	},
	{
		moveX:150,
		moveY:205,
		toX:0,
		toY:85
	},
	{
		moveX:150,
		moveY:120,
		toX:-20,
		toY:0
	}
]
var arr2 = [
	{
		moveX:280,
		moveY:50,
		toX:-125,
		toY:0
	},
	{
		moveX:155,
		moveY:50,
		toX:0,
		toY:-65
	},
	{
		moveX:155,
		moveY:-15,
		toX:-30,
		toY:0
	},
	{
		moveX:155,
		moveY:115,
		toX:-20,
		toY:0
	}
]
var arr4 = [
	{
		moveX:280,
		moveY:205,
		toX:-130,
		toY:0
	},
	{
		moveX:150,
		moveY:205,
		toX:0,
		toY:85
	},{
		moveX:150,
		moveY:205,
		toX:0,
		toY:85
	},
	{
		moveX:150,
		moveY:120,
		toX:-20,
		toY:0
	}
]
var arr3 = [
	{
		moveX:50,
		moveY:205,
		toX:100,
		toY:0
	},
	{
		moveX:150,
		moveY:205,
		toX:0,
		toY:85
	},{
		moveX:150,
		moveY:205,
		toX:0,
		toY:85
	},
	{
		moveX:150,
		moveY:120,
		toX:-20,
		toY:0
	}
]
var arr5 = [
	{
		moveX:70,
		moveY:250,
		toX:0,
		toY:40
	},
	{
		moveX:70,
		moveY:210,
		toX:80,
		toY:0
	},
	{
		moveX:150,
		moveY:210,
		toX:0,
		toY:85
	},
	{
		moveX:150,
		moveY:125,
		toX:-20,
		toY:0
	}
]

var canvas = document.getElementById("canvas"),
	cx = canvas.getContext("2d"),
	timer1 = null,timer2 = null, s = 0 ,idx = 0;


function line(arr,idx){
	s = 0;
	timer1 = setInterval(function(){
		s++;
		if(s>=10){
			 clearInterval(timer1);
		}
		cx.beginPath();
		cx.strokeStyle = "red";
		cx.lineWidth =4;
		if(arr[idx].toY == 0){
			cx.moveTo(arr[idx].moveX,arr[idx].moveY);
			cx.lineTo(arr[idx].moveX+arr[idx].toX/10*s,arr[idx].moveY);
		}else{
			cx.moveTo(arr[idx].moveX,arr[idx].moveY);
			cx.lineTo(arr[idx].moveX,arr[idx].moveY-arr[idx].toY/10*s);
		}
		cx.stroke();
		cx.lineCap = "square";
		cx.closePath();
	},100)

	timer2 = setTimeout(function(){
		idx++;
		if(idx>=arr.length){
			 return false;
		}
		console.log(idx);
		line(arr,idx);
	},1100)
}
	
$(".c1").on("click",function(){
	 line(arr1,0);
	  $(this).siblings(".che").hide();
	  $(".back").attr("data-key","mama");
})
$(".c2").on("click",function(){
	line(arr2,0);
	 $(this).siblings(".che").hide();
	 $(".back").attr("data-key","mama");
})
$(".c4").on("click",function(){
	line(arr4,0);
	$(this).siblings(".che").hide();
	$(".back").attr("data-key","mama");
})
$(".c3").on("click",function(){
	line(arr3,0);
	$(this).siblings(".che").hide();
	$(".back").attr("data-key","mama");
})
$(".c5").on("click",function(){
	line(arr5,0);
	$(this).siblings(".che").hide();
	$(".back").attr("data-key","mama");
})

$(".back").on("click",function(){
	if($(this).attr("data-key") == "clean"){
		document.location.reload();
	}
	if($(this).attr("data-key") == "mama"){
		$(this).attr("data-key","clean");
		cx.clearRect(0,0,260,300);
		$(".che").css("display","block");
	}
})