var catalogo = require("./catalago.json")
//console.log(catalogo.data)
var catalogoString = JSON.stringify(catalogo)
//console.log(catalogoString)
var catalogoObjeto = JSON.parse(catalogoString)
console.log(catalogoObjeto)

function listarTodosFilmes(filmes){
    for(let i = 0; i < filmes.length; i++){
        console.log(filmes[i].titulo);


   }
}
listarTodosFilmes(catalogoObjeto.data)


function listarFilmesEmCartaz(filmes) {
    const filmesEmCartaz = filmes.filter((filme) => {
      if (filme.emCartaz === true) {
        return true;
      }
    });
    return filmesEmCartaz;
  }
  console.log(listarFilmesEmCartaz(catalogoObj.data));
  


