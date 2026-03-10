let model;
let ready = false;

async function loadAI(){

model = await use.load();

ready = true;

console.log("AI loaded");

}

loadAI();

async function aiDiagnosis(text){

if(!ready){
alert("AI読み込み中です。10秒ほど待ってください");
return [];
}

let input = await model.embed([text]);

let results = [];

for(let d of diseases){

let sentence = d.symptoms.join(" ");

let emb = await model.embed([sentence]);

let score = tf.losses.cosineDistance(input,emb,0).dataSync()[0];

results.push({
disease:d,
score:score
});

}

results.sort((a,b)=>a.score-b.score);

return results.slice(0,3);

}
