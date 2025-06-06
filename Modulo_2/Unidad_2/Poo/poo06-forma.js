//Con una clse Figura cambiar el color de fondo de un dive
//método cmabiarColor y cambiar texto con metodo 

class Figura {
    _mensaje;
    constructor(_mensaje){
        this._mensaje=_mensaje;
    }
    cambiarColor(){
        const div = document.getElementById("divCambiante");
        div.textContent = this._mensaje;
    }

    cambiarTexto(){
        const div = document.getElementById("divCambiante");
        div.style.background = "skyblue";
    }
}
const figura = new Figura("Hello world");
document.getElementById("btnCambiarColor").addEventListener('click', () => {
    figura.cambiarColor
})
document.getElementById("btnCambiarTexto").addEventListener('click', () => {
    figura.cambiarTexto
})