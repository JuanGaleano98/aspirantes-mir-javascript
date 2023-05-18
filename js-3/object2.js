//BONUS I

/*
1. En un archivo llamado object2.js Crea un objeto literal
llamado "persona" con las siguientes propiedades: nombre,
edad, ciudad y profesión.
*/

let persona = {
    nombre : "Juan Galeano",
    edad : 25,
    ciudad : "Bogota",
    profesion : "Programador",
}

/*
2. Imprime en la consola el objeto "persona" completo.
*/

console.log(persona);

/*
3. Crea una función llamada "presentacion" que tome el
"persona" como argumento y devuelva una cadena de texto
que incluya el nombre, la edad y la ciudad de la persona.
*/

persona.presentacion = function(){
    return ("Hola, mi nombre es " + this.nombre + " tengo " + this.edad + " años y me dedico a ser " + this.profesion);
}

/*
4. Llama a la función "presentacion" y almacena el
resultado en una variable llamada "mensaje".
*/

var mensaje = persona.presentacion();

/*
5. Imprime en la consola el valor de la variable "mensaje".
*/

console.log(mensaje);

/*
6. Agrega una nueva propiedad al objeto "persona"
llamada "hobbies" que sea un arreglo con algunos 
pasatiempos.
*/

persona.hobbies = ["Estudiar", "Programar", "Ciclismo", "Leer"];

/*
7. Imprime en la consola la propiedad "hobbies" del 
objeto "persona".
*/

console.log(persona.hobbies);

/*
8. Utiliza un ciclo for para imprimir en la consola 
cada uno de los elementos del arreglo de hobbies.
*/

for (let i = 0; i < persona.hobbies.length; i++) {
    console.log(persona.hobbies[i]);
}
