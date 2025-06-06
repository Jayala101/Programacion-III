function mostrarAlerta() {
    alert("Este boton usa un evento en linea");
}

function agregarProducto() {
    const ul = document.getElementById
    ('listaProductos1');
    const li = document.createElement('li');
    li.textContent = "Producto agregado desde un evento inline";
    ul.appendChild(li);
}

document.getElementById('boton').addEventListener
('click', () => {
    alert('click detectado!')
});

document.getElementById('campo').addEventListener
('input', (e) => {
    alert('Escribiendo: ', e.target.value)
});

document.getElementById('btnAgregar').addEventListener
('click', () => {
    const ul = document.getElementById
    ('listaProductos2');
    const li = document.createElement('li');
    li.textContent = "Item agregado desde un evento con addEventListener";
    ul.appendChild(li);
});