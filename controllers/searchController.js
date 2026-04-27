const nlp = require("../services/plnService");
const intentService = require("../services/intentService");
const model = require("../models/productModel");

function processQuery(req,res){

 const text = req.query.q;

 const tokens = nlp.preprocess(text);

 const intent = intentService.detectIntent(tokens);

 let results = [];

 if(intent === "search"){

   const keyword = tokens.find(t =>
    ["notebook","mouse","monitor","cadeir","teclad"]
     .includes(t)
   );

   if(keyword){
    results = model.search(keyword);
   }

 }

 if(intent === "list"){
   results = model.listAll();
 }

 res.json({
  original:text,
  tokens,
  intent,
  results
 });

}

module.exports = { processQuery };