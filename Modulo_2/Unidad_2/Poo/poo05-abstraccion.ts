abstract class Trabajador {
    public nombre : string;
    constructor( nombre: string) {
        this.nombre = nombre;
    }
    abstract calculoSueldo(salarioDiario:number): void ;
    saludoTrabajador (): void {
        console.log(`Hola ${this.nombre}`);
    }
}

class obrero extends Trabajador {
    calculoSueldo(salarioDiario: number): void {
        console.log("Porcentaje horas extra:", salarioDiario* 0.05);
    }
}

class medico extends Trabajador {
    calculoSueldo(salarioDiario: number): void {
        console.log("Porcentaje horas extra:", salarioDiario*0.1);
    }
}
const elmedico = new medico ("Dr.Chapatin");
elmedico.calculoSueldo (15);
const carpintero = new obrero ("Pinocho");
carpintero.calculoSueldo(10);