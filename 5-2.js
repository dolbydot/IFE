var scoreData=[
["Captain Dolb",90],
["Kevin",100],
["King Dolb",15],
["Babolsa",59]
];


var score=document.getElementById("score");
var arr=["一","二","三","四"];
// 降序重排
scoreData.sort(function(a,b){
	return b[1]-a[1];
});
score.innerHTML="";
for(var i=0;i<scoreData.length;i++){
	if(scoreData[i][1]>60){
		var olli=document.createElement("li");
		olli.innerHTML="第"+arr[i]+"名："+scoreData[i][0]+","+scoreData[i][1]+"分";
		score.appendChild(olli);
	}
}





