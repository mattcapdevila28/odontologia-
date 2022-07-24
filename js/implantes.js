function ofrecerDescuento(implante, nombre) {
    alert('¡Felicitaciones ' + nombre + ', ' + implante + ' a un 15% de descuento para vos!');
}

let tipoImplante = prompt('¿Que tipo de implante le interesa?');
let nombreUsuario =prompt('Ingrese su nombre'); 

ofrecerDescuento(tipoImplante,nombreUsuario);