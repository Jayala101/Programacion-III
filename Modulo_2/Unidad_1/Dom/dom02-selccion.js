const titulo = document.getElementById('titulo');
console.log(titulo.textContent);
const notas = document.getElementsByClassName('nota');
Array.from(notas).forEach(n => console.log(n.textContent));
const item = document.querySelector('.item');
item.forEach(el => console.log(el.textContent));