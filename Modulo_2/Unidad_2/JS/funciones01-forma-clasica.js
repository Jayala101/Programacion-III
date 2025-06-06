function saludar(){
    console.log("Hola desde una función")
}
saludar();

function suma(){
    console.log("Suma 1 + 2 = ", 1 + 2);
}

function resta() {
    console.log("Resta 10 - 2 = ", 10 - 2);
}

suma();
resta();

// función con parámetros y retorno

function dividir(a, b){
    return a/b
}

let resultado = dividir(40, 8);
console.log("Resultado: ", resultado);

// Hacer una función que se le pase un número e imprime la tabla de multiplicar de ese numero

function tabla(a, b){
    return a * b
}

for (let i = 1; i <= 10; i++) {
    console.log(3, "x", i, "=", tabla(3, i)); 
}