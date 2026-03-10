async function analyze(){

let text = document.getElementById("symptom").value;

if(text === ""){
alert("症状を書いてください");
return;
}

let result = await aiDiagnosis(text);

if(result.length === 0){
return;
}

let html = "";

for(let r of result){

html += "<h3>"+r.disease.name+"</h3>";
html += "危険度: "+r.disease.danger+"<br>";
html += "対処: "+r.disease.treatment+"<br><br>";

}

document.getElementById("result").innerHTML = html;

}
