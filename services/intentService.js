function detectIntent(tokens){

 const listKeywords = ["list","listar","mostr","exib"];
 const searchKeywords = ["busc","compr","procur"];

 if(tokens.some(t => listKeywords.includes(t))){
  return "list";
 }

 if(tokens.some(t => searchKeywords.includes(t))){
  return "search";
 }

 return "unknown";
}

module.exports = { detectIntent };