const model = require("../models/productModel");
const nlp = require("../services/plnService");

function search(req,res){

 const text = req.query.q;

 const tokens = nlp.processText(text);

 const term = tokens.join(" ");

 const results = model.search(term);

 res.json({
  original:text,
  tokens:tokens,
  results:results
 });

}

module.exports = { search };