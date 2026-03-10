async function analyze(){

let input=document.getElementById("symptom").value;

if(input===""){
alert("症状を書いてください");
return;
}

let result=await aiDiagnosis(input);

if(result.length===0){
return;
}

showResult(result);

}

function showResult(list){

let html="";

list.forEach(r=>{

html+=
"<h3>"+r.disease.name+"</h3>"+
"危険度:"+r.disease.danger+"<br>"+
"対処:"+r.disease.treatment+"<br><br>";

});

document.getElementById("result").innerHTML=html;

}
