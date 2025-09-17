interface Persona {
    nombre: string,
    apellido: string,
}
let empleado: Persona = {
    nombre: "Bot",
    apellido: "Marley"
}
console.log('empleado:', empleado);

interface Credenciales {
    clave:string,
    usuario: string,
}
function login(credencial: Credenciales): void {
    console.log("Biemvenido:", credencial.usuario);
}
let miUsuario: Credenciales = {
    clave: "123",
    usuario: "Jesus"
}
login(miUsuario);

//hacer una interface figura que tenga base, altura y tipo de figura (cuadrado y rectángulo ) 
// se pase a una función según el tipo que se le calcule el area