Manipulación de un array

Tome el siguiente array:

const theList = ['Laurence', 'Svekis', true, 35, null, undefined, ['one', 'two']];

Manipule su array utilizando varios métodos, como pop(), push(), shift() y unshift(), y transfórmelo en lo siguiente:

["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]

El método unshift() agrega uno o más elementos al comienzo de una matriz y devuelve la nueva longitud de la matriz.

sugerencia

• Eliminar el primer elemento y el último elemento.
• Agregue FIRST al inicio de la matriz.
• Asigne hola mundo al valor del cuarto elemento.
• Asigne MEDIO al tercer valor de índice.
• Agregue ÚLTIMO a la última posición en la matriz.
• Enviarlo a la consola.


const theList = ['Laurence', 'Svekis', true, 35, null, undefined, ['one', 'two']];
theList.pop ();
theList.shift ()
theList.unshift ("first") //AGREGA UNA COSA AL PRINCIPIO O AL FINAL
theList[3]= "hola mundo"
theList.splice (2, 1, "MEDIO")
theList.splice(4, 2) //pongo plice en cuarta posicion y borra dos el numero dos me indica que borro dos. 
theList.push ("ULTIMO") //AGREGA UNA COSA AL PRINCIPIO O AL FINAL
console.log("theList");



