function saludar(nombre) {
    return "Hola, ".concat(nombre);
}
console.log(saludar("Betty Mármol"));
// Parámetros opcionales
function obtenerApellido(apellido) {
    return "Mi apellido, ".concat(apellido !== null && apellido !== void 0 ? apellido : "invitado");
}
console.log(obtenerApellido("Picapiedra"));
console.log(obtenerApellido());
// Parámetros por  defecto
function obtenerEdad(edad) {
    if (edad === void 0) { edad = 18; }
    return "Mi edad, ".concat(edad);
}
console.log(obtenerEdad(25));
console.log(obtenerEdad());
// Funciones tipo flecha
var sumar = function (a, b) {
    return a + b;
};
console.log("La suma es: ", sumar(5, 5));
function mostrarInformacion(informacion) {
    console.log(informacion);
}
mostrarInformacion("Suceso en Norte de Quito");
// Tipar funiones como variales
var operacion;
operacion = function (a, b) {
    return a + b;
};
console.log("resultado suma ", operacion(15, 30));
// función que reciba un arreglo string y saluda a cada persona
function saludarPersonas(personas) {
    personas.forEach(function (persona) {
        console.log("Hola, ".concat(persona));
    });
}
var nombres = ["Juan", "Marco", "José"];
saludarPersonas(nombres);
