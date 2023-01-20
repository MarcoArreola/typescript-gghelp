/* Las clases genéricas sirven para crear una clase que reciba
    datos de diferencias tipos de datos, la sintaxis es la siguiente:
    function<T> (argumento:T) 
*/

function queTipoSoy<T>(argumento: T) {
  return argumento;
}

let soyString = queTipoSoy("hola_mundo");
console.log(soyString);
let soyNumero = queTipoSoy(25);
console.log(soyNumero);
let soyArreglo = queTipoSoy([1,2,3]);
console.log(soyArreglo);
//  tambien puede ser de la siguiente manera:
let soyExplicito = queTipoSoy<number>(255);
let soyExplicitox2 = queTipoSoy<string>("aaa");