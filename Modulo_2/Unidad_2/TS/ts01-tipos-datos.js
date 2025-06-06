var cantidad = 19;
var nombre = "JOSE ZAMBRANO";
var opcion = true;
console.log("cantidad", cantidad);
console.log("nombre", nombre);
console.log("opcion", opcion);
var opcional = "comodin any";
opcional = 100;
var equipos = ["Barcelona", "Real Madrid", "ecuador", "vino tinto", "la liga"];
console.log("equipos", equipos);
var edades = [10, 12, 23, 456];
console.log("edades", edades);
//tuplas
var persona = ["ute", 616161];
console.log("persona", persona);
// Enums
var Estados;
(function (Estados) {
    Estados[Estados["PENDIENTE"] = 0] = "PENDIENTE";
    Estados[Estados["ENVIADO"] = 1] = "ENVIADO";
    Estados[Estados["ENTREGADO"] = 2] = "ENTREGADO";
})(Estados || (Estados = {}));
var miEstado = Estados.ENTREGADO;
console.log(miEstado);
