class cuentaBancaria {
    _saldo;
    constructor(saldoInicial) {
        this._saldo = saldoInicial;
    }
    depositar(cantidad) {
        this._saldo += cantidad;
    }
    retirar(cantidad) {
        if (cantidad <= this._saldo) {
            this._saldo -= cantidad;
        } else {
            console.log("Fondos insuficientes ");
        }
    }
    getSaldo() {
        return this._saldo;
    }
}


const cuenta = new cuentaBancaria(1000);
console.log(cuenta.getSaldo());
cuenta.depositar(500);
console.log(cuenta.getSaldo());
cuenta.retirar(2000);
cuenta.retirar(100);
console.log(cuenta.getSaldo());