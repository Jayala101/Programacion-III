console.log("Declaración de Arreglos");
let numeros = [2,3,2,3,267,4]
for (let num of arreglo){
    console.log("numero: ", num)
}
let vacio = new Array();
for(let v of vacio){
    console.log("elemento: ", v)
}
console.log(vacio);

///Acceder a un eemento
console.log("elemento 0: ", numeros[0]);
console.log("elemento 1: ", numeros[1]);
console.log("elemento 2: ", numeros[2]);
console.log("Array números: ", numeros);

//Modificación de elementos de un arreglo 
console.log("Array de Números", numeros);
numeros[0] = 8888;
numeros[2] = 98;
numeros[5] = 1000;
console.log("Array de numeros modificados", numeros);


//Agregar el elemento a un array
//Agregar al final del array
numeros.push(50);
//Agregar al inicio del array
numeros.unshift(70);
console.log("Array con elementos incluidos", numeros);

//Borrar elemento de un array
//Eliminar el último
numeros.pop();
//Eliminar el primero
numeros.shift();
console.log("Array con elementos eliminados", numeros);

