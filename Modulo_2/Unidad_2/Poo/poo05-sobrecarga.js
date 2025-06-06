class Calculadora{
    sumar(a, b, c){
        if (c===undefined){
            console.log("suma de dos 2 números: ${a+b}"); 
        } else {
            console.log("suma de tres números: ${a+b+c}");
        }
    }
    multiplicar(x, y=1, z=3){
        console.log("Resultado ${x*y*z}");
    }
}

const calc = new Calculadora();
calc.sumar(2, 3);
calc.sumar(2, 3, 4);
calc.multiplicar(2);
calc.multiplicar(2, 3);
calc.multiplicar(2, 3, 4);