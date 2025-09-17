class Animal {
    _nombre;
    constructor(nombre) {
        this._nombre = nombre;
    }
    hacerSonido() {
        console.log("Sonido Generico");
    }
}

class Perro extends Animal {
    caminar() {
        console.log("Perro caminando");
    }
}
const miPerro = new Perro("Firulais");
miPerro.hacerSonido(); 
miPerro.caminar(); 
const gato = new Animal("hello kitty");
gato.hacerSonido ();
//gato.caminar();