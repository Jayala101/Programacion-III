class Animal {
    public nombre: string;
    constructor(nombre:string){
        this.nombre = nombre;
    }

    emitirSonido(): void{
        console.log(`Sonido del animal`);
    }
}

class Gato extends Animal {
    emitirSonido(): void{
        console.log(`Miau`);
    }
}

class Vaca extends Animal {
    emitirSonido(): void{
        console.log(`Muuu`);
    }
}

const MiGato = new Gato("Hello Kitty");
MiGato.emitirSonido();
const MiVaca = new Vaca("Lechera");
MiVaca.emitirSonido();