function emergencyCheck(text){

let emergency=["意識がない","呼吸できない","激しい胸痛"]

for(let e of emergency){

if(text.includes(e)){

alert("緊急症状の可能性があります。119に連絡してください。")

}

}

}
