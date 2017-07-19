// 1.重排序
// var number,city,aqi=new Array();
// var li=document.getElementById("source").querySelectorAll("li"),
//     b=document.getElementById("source").querySelectorAll("b");
// // 取得文字与数字并传入新创建的数组aqi中
// for(var i=0;i<li.length;i++){
// 	city=li[i].innerHTML.substring(0,li[i].innerHTML.indexOf("<"));
// 	number=b[i].innerHTML;
// 	aqi.push([city,number]);
// }
// // 将数组中的项降序重排
// aqi.sort(function(a,b){
// 	return b[1]-a[1];
// });
// // 将重排后的信息传入新创建的li元素中并显示在id为resort的ul中
// var ul=document.getElementById("resort");
// for(var i=0;i<aqi.length;i++){
// 		var uli=document.createElement("li");
// 		uli.innerHTML="第"+(i+1)+"名："+aqi[i][0]+"<b>"+aqi[i][1]+"</b>";
// 		ul.appendChild(uli);
// }

// 2.按下按钮实现重排列
var button=document.getElementById("sort-btn");
// 创建一个函数并向其中传入1中的代码，将函数赋值给事件管理程序
button.onclick=function(){
	var number,city;
	// document.querySelector
	var li=document.querySelectorAll("#source li");
	// var li=document.getElementById("source").querySelectorAll("li"),
	// for(var i=0;i<li.length;i++){
	// 	aqi.push(li[i]);
	// };
	var aqi=Array.from(li);
	// li.sort(()=>-1);
	console.log(li);
	console.log(aqi);
	aqi.sort(function(a,b){
		var qualityA=a.querySelector("b").innerHTML;
		var qualityB=b.querySelector("b").innerHTML;
		return qualityB-qualityA;
	});
	// console.log(aqi);
	var ul=document.getElementById("resort");
    for(var i=0;i<aqi.length;i++){
		var uli=document.createElement("li");
		uli.innerHTML=aqi[i].innerHTML;
		// uli.innerHTML="第"+(i+1)+"名："+aqi[i][0]+"<b>"+aqi[i][1]+"</b>";
		ul.appendChild(uli);
	}

    // var b=document.querySelectorAll("li b");


 //    for(var i=0;i<li.length;i++){
	//     city=li[i].innerHTML.substring(0,li[i].innerHTML.indexOf("<"));
	//     number=b[i].innerHTML;
	//     aqi.push([city,number]);
 //    }
 //    aqi.sort(function(a,b){
	//     return b[1]-a[1];
 //    });
 //    var ul=document.getElementById("resort");
 //    for(var i=0;i<aqi.length;i++){
	// 	var uli=document.createElement("li");
	// 	uli.innerHTML=`第${i+1}名：${aqi[i][0]}<b>${aqi[i][1]}</b>`;
	// 	// uli.innerHTML="第"+(i+1)+"名："+aqi[i][0]+"<b>"+aqi[i][1]+"</b>";
	// 	ul.appendChild(uli);
	// }
}























