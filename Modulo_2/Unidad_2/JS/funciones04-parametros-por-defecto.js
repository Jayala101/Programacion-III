function multiplicar(num1 = 5, num2 = 10){
    console.log("Multiplicación de: ", num1,"*",num2,"=", num1*num2);
}

areaTriangulo()


function areaTriangulo(base = 5, altura = 10) {
    console.log("Área del triángulo=", (base * altura) / 2);
}

function areaCuadrado(lado = 4) {
    console.log("Área del cuadrado=", lado * lado);
}

areaTriangulo(); 
areaTriangulo(6, 8); 

areaCuadrado(); 
areaCuadrado(7);

function promedioNotas(nota1 = 0, nota2 = 0, nota3 = 0, nota4 = 0, nota5 = 0) {
    const suma = nota1 + nota2 + nota3 + nota4 + nota5;
    const promedio = suma / 5;
    console.log("El promedio de las notas es:", promedio);
}


promedioNotas(8, 5, 8, 7, 9); 
promedioNotas(); 