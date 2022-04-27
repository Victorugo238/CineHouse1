var catalogo = require("./catalago.json")
//console.log(catalogo.data)
var catalogoString = JSON.stringify(catalogo)
//console.log(catalogoString)
var catalogoObjeto = JSON.parse(catalogoString)
//console.log(catalogoObjeto)

function listarTodosFilmes(filmes){
    for(let i = 0; i < filmes.length; i++){
        //console.log(filmes[i].titulo);


   }
}
listarTodosFilmes(catalogoObjeto.data)


function listarFilmesEmCartaz(filmes) {
    const filmesEmCartaz = filmes.filter((value) => {
      if (value.emCartaz === true) {
        return true;
    }
    })
    return filmesEmCartaz;
 }
  console.log(listarFilmesEmCartaz(catalogoObjeto.data));
  
// const listarFilmesEmCartaz = (filmes) =>
//   filmes.filter((filme) => filme.emCartaz);

//function listarFilmesEmCartaz(filmes) {
    //return filmes.filter((filme) => filme.emCartaz);
 // }
  //console.log(listarFilmesEmCartaz(catalogoObj.data));
  
  function alterarStatusEmCartaz(id, filmes) {
    const idxFilme = filmes.findIndex((value) => {
      if (value.codigo === id) {
        return true;
      }
    });
    if (idxFilme >= 0) {
      filmes[idxFilme].emCartaz = !filmes[idxFilme].emCartaz;
      return true;
    }
  }
  

  console.log(alterarStatusEmCartaz(1, catalogoObj.data));
  console.log(catalogoObj.data);
  