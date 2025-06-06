console.log("Declaración de Arreglos");
let numeros = [2,3,2,3,267,4]
for (let num of arreglo){
    console.log("numero: ", num)
}

let ciudades = ["Quito", "Guayaquil", "Caracas", "Maracaibo", "Tumbaco"]
for(let i=0; i<ciudades.length; i++){
    console.log("Ciudad: ", ciudades[i])
}

let colores = ["azul", "amarillo", "verde", "rojo"];
colores.forEach(function(valor, indice) {
    console.log("color: ", indice, " : ", valor);
});