let model;

async function loadAI(){

model = await use.load();

console.log("AI model loaded");

}

loadAI();

function cosineSimilarity(a,b){

return tf.losses.cosineDistance(a,b,0).dataSync()[0];

}

async function aiDiagnosis(input){

let inputEmbedding = await model.embed([input]);

let results=[];

for(let d of diseases){

let text=d.symptoms.join(" ");

let emb=await model.embed([text]);

let similarity=cosineSimilarity(inputEmbedding,emb);

results.push({
disease:d,
score:similarity
});

}

results.sort((a,b)=>a.score-b.score);

return results.slice(0,5);

}
