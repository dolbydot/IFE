
// 先取得对提交按钮和textarea的引用并为按钮添加事件管理程序
var submit=document.getElementById("submit");
submit.onclick = function(){
	var message=document.getElementById("message");
//移除事件管理程序 
	submit.onclick=null;
// 将textarea中输入的内容插入到span中
	document.getElementById("content").innerHTML=message.value;
}








