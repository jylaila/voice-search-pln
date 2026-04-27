const natural = require("natural");
const sw = require("stopword");

const tokenizer = new natural.WordTokenizer();

function preprocess(text){

 text = text.toLowerCase();

 let tokens = tokenizer.tokenize(text);

 tokens = sw.removeStopwords(tokens);

 const stems = tokens.map(t =>
  natural.PorterStemmer.stem(t)
 );

 return stems;

}

module.exports = { preprocess };