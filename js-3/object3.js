//BONUS II

/*
1. En un archivo llamado object3.js Crear una
 variable llamada receta e inicialízalo con 
 un objeto literal vacío.
*/

var receta = {}

/*
2. Agrégale una propiedad nombre con valor 
“Sandwich”.
*/

receta.nombre = "Sandwich";

/*
3. Agrégale una propiedad ingredientes con 
un arreglo vacío.
*/

receta.ingredientes = [];

/*
4. Agrega un objeto al arreglo ingredientes 
con las siguientes propiedades: 
    1. nombre: “Pan”
    2. cantidad: 2
*/

var pan = {
    nombre : "Pan",
    cantidad : 2,
}

receta.ingredientes.push(pan);

/*
5. Agrega otro ingrediente al arreglo con 
las siguientes propiedades: 
    1. nombre: “Queso”
    2. cantidad: 1
*/

var queso = {
    nombre : "Queso",
    cantidad : 1,
}

receta.ingredientes.push(queso);

/*
6. Debajo del objeto imprime en la consola el
nombre del primer ingrediente, debería aparecer
“Pan”.
*/

console.log(receta.ingredientes[0].nombre);

/*
7. Suma todos las cantidades de los ingredientes 
y muestra el resultado en consola.
*/

var cantidadIngredientes = 0;

for (let i = 0; i < receta.ingredientes.length; i++) {
    cantidadIngredientes += receta.ingredientes[i].cantidad;
}

console.log(cantidadIngredientes);
