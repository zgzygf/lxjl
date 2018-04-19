	
var data=['phone5','Ipad','三星笔记本','佳能相机','谢谢参与','50元充值卡','1000元超市购物券'];
   timer=null;
   flag=0;
   window.onload=function(){
		   var play=document.getElementById('play');
		   var stop=document.getElementById('stop');
		 startAuto();//轮播开始函数
		 startDate();//时间函数
		 startDjs();//倒计时
		 showTime();//倒计时扩展
		//开始抽奖
		play.onclick=playFun;  
		//结束抽奖
		stop.onclick=stopFun;
		//键盘事件
		document.onkeyup=function(event){
         event=event||window.event;
		 console.log(event.keyCode);//测试键盘对应键的键码值
		 if(event.keyCode==13){//键盘事件对象的keyCode属性用于得到键盘对应键的键码值
		   if(flag==0){
		    playFun();
			flag=1;	   
		}else{
		  stopFun();
		  flag=0;	
		}	  
	  }			 
	} 
 }	 
 function playFun(){
	   var title=document.getElementById('title');
	   var play=document.getElementById('play');
	    clearInterval(timer);	
	 timer=setInterval(function(){
	  	 var random=Math.floor(Math.random()*data.length);
		 title.innerHTML=data[random]; 
   },100); 
   play.style.background="#999";
  }
  
  function stopFun(){
   clearInterval(timer);            
   var play=document.getElementById('play');
   play.style.background='#036';  
 }       
//轮播函数
var curIndex=0;
var arrs=new Array();
arrs[0]="../images/1.jpg";
arrs[1]="../images/2.jpg";
arrs[2]="../images/3.jpg";
arrs[3]="../images/4.jpg";
function startAuto(){auto=setInterval(changeImg,1000);}
function clearAuto(){clearInterval(auto)}
function changeImg(){
   var obj=document.getElementById("obj");
   var zgb=document.getElementById("zgb");
   cls=zgb.getElementsByTagName("div");
   if(curIndex==arrs.length-1){
	  curIndex=0; 
  }	else{
	  curIndex +=1;
  }
  obj.src=arrs[curIndex];
  cls[curIndex].style.backgroundColor="#90f";
  if(curIndex!=0){
     cls[curIndex-1].style.backgroundColor="#000";
  }else{
    cls[cls.length-1].style.backgroundColor="#000";
}
}
function mnu(value){
	 var zgb=document.getElementById("zgb");
   cls=zgb.getElementsByTagName("div");
	var obj=document.getElementById("obj");
					 for(var i=0;i<4;i++)      
					     if(value==i){
					  obj.src=arrs[i];
					  cls[curIndex].style.backgroundColor="#000";
					  curIndex=i;
					  cls[i].style.backgroundColor="#90f";
  }
}
//全选案例
var a=0;
	function fn(){
    var list=document.getElementById("list");   
    bd=list.getElementsByTagName("input");
	if(a==0){
    for(var i=0; i<bd.length-1;i++){
    bd[i].checked=true;	
	a=1;	
 }	
 }else{
	 for(var i=0; i<bd.length-1;i++){
      bd[i].checked=false;	
	  a=0;	
       }	
	 }	
}
//时间函数
function checkTime(i){
    if(i<10){
	  i="0"+i;
	  return i;	
  }else{
      return i;	  
  }
}
  function startDate(){
   var myDate=new Date();
   var year=myDate.getFullYear();
   var month=myDate.getMonth()+1;
   var date=myDate.getDate();
  // alert(myDate.getMonth()+1);//返回月份值(从0开始，+1)
  var d=myDate.getDay();
  var h=myDate.getHours();
  var m=myDate.getMinutes();
  var s=myDate.getSeconds();
  m=checkTime(m);
  s=checkTime(s);
  var weekday=new Array()
  weekday[0]='星期日' 
  weekday[1]='星期一'
  weekday[2]='星期二'
  weekday[3]='星期三'
  weekday[4]='星期四'
  weekday[5]='星期五'
  weekday[6]='星期六'
  document.getElementById("show").innerHTML=year+'年'+month+'月'+date+'日'+weekday[d]+h+':'+m+':'+s;
  setTimeout(startDate,500);
}
//倒计时
function startDjs(){
  var curTime=new Date();//当前时间
  var endTime=new Date('2025,12,12');
  var djsTime=Math.ceil((endTime.getTime()-curTime.getTime())/(24*60*60*1000))
    //Maath.ceil()方法执行的是向上取正计算，返回大于或等于函数参数，与之最接近的整数如Math.ceil(12.1)返回13;
  //1天 =24小时, 1小时=60分 1分=60秒 1秒=1000毫秒
  document.getElementById('textShow').innerHTML=djsTime;
}
//倒计时扩展
function showTime(){
    var now=new Date();//当前时间
	var endTime=new Date('2025/11/11,12:20:12');//结束时间 
	var lefttime=parseInt((endTime.getTime()-now.getTime())/1000);
	var d=parseInt(lefttime/(24*60*60));
	var h=parseInt(lefttime/(60*60)%24);
	var m=parseInt(lefttime/60%60);
	var s=parseInt(lefttime%60);
	if(lefttime<=0){
		  document.getElementById('dd').innerHTML='活动已经结束';
		}else{
	document.getElementById('txtshow').innerHTML=d+'天'+h+'小时'+m+'分'+s+'秒';
	setTimeout(showTime,500)}		 
}

 