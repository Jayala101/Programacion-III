const caja = document.getElementById('caja');
caja.addEventListener('mouseover', () => caja.style.background = 'yellow');
caja.addEventListener('mouseout', () => caja.style.background = 'lightgray');
caja.addEventListener('click', () => alert('ckick'));

const area = document.getElementById('areaTouch');
area.addEventListener('touchstart', () => {
    area.style.background = 'deepskyblue';
    console.log('TOuch iniciado');
});
area.addEventListener('touchend', () => {
    area.style.background = 'skyblue';
    console.log('TOuch finalizado');
});

const circulo = document.getElementById('circulo');
let colores = ['red','green','blue','orange','purple','pink'];
let colorActual = 0;

let arrastrando = false;

function cambiarColor() {
    colorActual = (colorActual + 1) % colores.length;
    circulo.style.background = colores[colorActual];
}
