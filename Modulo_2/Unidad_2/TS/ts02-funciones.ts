function saludar(nombre: string): string {
    return `Hola, ${nombre}`;
}

console.log(saludar("Betty Mármol"))

// Parámetros opcionales
function obtenerApellido(apellido?: string){
    return `Mi apellido, ${apellido ?? "invitado"}`;
}
console.log(obtenerApellido("Picapiedra"));
console.log(obtenerApellido());

// Parámetros por  defecto
function obtenerEdad(edad: number=18): string{
    return `Mi edad, ${edad}`;
}
console.log(obtenerEdad(25));
console.log(obtenerEdad());

// Funciones tipo flecha
const sumar=(a: number, b: number): number => {
    return a+b;
}
console.log("La suma es: ", sumar(5, 5));

function mostrarInformacion(informacion: string): void{
    console.log(informacion);
}
mostrarInformacion("Suceso en Norte de Quito");

// Tipar funiones como variales
let operacion: (x:number, y:number) => number;
operacion = function(a,b){
    return a+b;
}
console.log("resultado suma ", operacion(15,30));

// función que reciba un arreglo string y saluda a cada persona
function saludarPersonas(personas: string[]): void {
    personas.forEach(persona => {
        console.log(`Hola, ${persona}`);
    });
}

const nombres = ["Juan", "Marco", "José"];
saludarPersonas(nombres);