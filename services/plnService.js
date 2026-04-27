const natural = require("natural");
const sw = require("stopword");

const tokenizer = new natural.WordTokenizer();

function processText(text){

 text = text.toLowerCase();

 // tokenização
 let tokens = tokenizer.tokenize(text);

 // remover stopwords
 tokens = sw.removeStopwords(tokens);

 return tokens;
}

module.exports = { processText };