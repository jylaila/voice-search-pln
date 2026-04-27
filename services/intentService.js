function detectIntent(tokens){

 if(tokens.includes("list")){
  return "list"
 }

 if(tokens.includes("busc") ||
    tokens.includes("compr")){
  return "search"
 }

 return "unknown"

}

module.exports = { detectIntent };