class Libro {
    public nombre: string;
    private paginas: number;
    protected dni: string = "123456783324";
    constructor (nombre: string, paginas: number){
        this.nombre = nombre;
        this.paginas = paginas;
    }

    cantidadPaginas(): string{
        return `Cantidad de páginas del libro ${this.paginas}`
    }
}

const myLibro = new Libro("La Dama de Rosa", 350);
console.log(myLibro.nombre);
console.log(myLibro.cantidadPaginas());