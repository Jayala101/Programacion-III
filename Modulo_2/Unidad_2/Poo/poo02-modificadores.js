var Libro = /** @class */ (function () {
    function Libro(nombre, paginas) {
        this.dni = "123456783324";
        this.nombre = nombre;
        this.paginas = paginas;
    }
    Libro.prototype.cantidadPaginas = function () {
        return "Cantidad de p\u00E1ginas del libro ".concat(this.paginas);
    };
    return Libro;
}());
var myLibro = new Libro("La Dama de Rosa", 350);
console.log(myLibro.nombre);
console.log(myLibro.cantidadPaginas());
