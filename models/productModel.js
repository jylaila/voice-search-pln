const products = [
 {id:1, name:"notebook dell"},
 {id:2, name:"notebook lenovo"},
 {id:3, name:"mouse logitech"},
 {id:4, name:"teclado mecanico"},
 {id:5, name:"monitor gamer"},
 {id:6, name:"cadeira gamer"}
];

function searchByKeyword(keyword){

 return products.filter(p =>
  p.name.includes(keyword)
 );

}

function listAll(){

 return products;

}

module.exports = { searchByKeyword, listAll };