let cantidad: number = 19;
let nombre: string = "JOSE ZAMBRANO";
let opcion: boolean = true;
console.log("cantidad",  cantidad);
console.log("nombre",  nombre);
console.log("opcion",  opcion);


let opcional:any = "comodin any";

opcional = 100;

let equipos: string[] = ["Barcelona", "Real Madrid", "ecuador", "vino tinto","la liga"];
console.log("equipos",  equipos);
let edades: Array<number> = [10, 12, 23, 456]
console.log("edades",  edades);
//tuplas
let persona: [string, number] = ["ute", 616161];
console.log("persona",  persona);

// Enums
enum Estados{
    PENDIENTE, 
    ENVIADO,
    ENTREGADO,
}
let miEstado: Estados = Estados.ENTREGADO;
console.log(miEstado);


