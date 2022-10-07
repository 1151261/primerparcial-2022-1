var nombre;
console.log(nombre);
typeof nombre;

const button = document.querySelector('button');

button.onclick = function() {
  let nombre2 = prompt('¿Cuál es tu nombre?');
  alert('¡Hola ' + nombre2 + ', encantado de verte!');
  document.getElementById('codigo').innerHTML="hola";
  nombre=nombre2;
}

const b1= document.querySelector('button');

InputEvent.onclick = function con_alcohol(){
    window.location.href = "carrito.html";
}

InputEvent.onclick= function sin_alcohol(){
    window.location.href = "carrito2.html";
}