//EL traversing es saber avegra por los elemeontos del dom
const body = document.body;
console.log(body);

//Nos devuelve todods los nodos (los espacios en blanco se cuentan como nodods tipo texto)
const nodosBody = document.body.childNodes;
console.log(nodosBody);

//sin queremos obtener los nodos de un elemento epecífico como un div
//gracias al child nodes de arriba sabemos que enb la posición 1 tenemos un div
const nodosDiv = document.body.childNodes[1];
console.log(nodosDiv.childNodes)

//PARA DEVOLVER LOS NODOS SIN CONTAR LOS ESPACIOS EN BLANCO
const nodos = document.body.children;
console.log(nodos);

//mas funciones
/*const nodos2 = document.body.firstChild //devuelve el primer hijo (contando espacioes en blanco)
const nodos2 = document.body.lastChild //devuele el ultimo hijo(contando esapcios en blanco)
const nodos2 = document.body.firstElementChild //devuelve el primer hijo (sin contar espacioes en blanco)
const nodos2 = document.body.lastElementChild //devuelve el ultimo hijo (sin contar espacios en blanco */

//comprobar si tiene hijos (contando espacios)
const nodods3 =document.body.children[0]; //estamos comprobando si el primer elemento html(sin contar espacios)tiene nodos dentro
console.log(nodods3.hasChildNodes());     //comprobando si tiene contando espacios


//comprobar si tiene espacios aolo contando elementos html
const nodos4 = document.body.children[0]; 
console.log(nodos4.children > 0); //ya que no hay un metodo para esto usaremos una condicional
// si los hijos sin espacios es mayor que 0 devolverá true