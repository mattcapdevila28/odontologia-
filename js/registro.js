let nodo = document.head;
console.log(nodo.nodeType);
let primerNodo = document.documentElement.firstChild;
if (primerNodo.nodeType == 8){
    console.log('El primer nodo es un comentario, y su nodeType es' + primerNodo.nodeType);
} else {
    console.log('No hay un comentario al principio');
}

const btnRegistro = document.getElementById('registro');
const pieDePagina = document.querySelector('.piesito');
const btnGuardar = document.getElementById('gridCheck')
let inputEmail4 = document.getElementById('inputEmail4');
let inputPassword4 = document.getElementById('inputPassword4');
let inputAddress = document.getElementById('inputAddress');
let inputAddress2 = document.getElementById('inputAddress2');
let inputCity = document.getElementById('inputCity');
let inputState = document.getElementById('inputState');
let inputZip = document.getElementById('inputZip');

function completarRegistro() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Registro exitoso!',
        showConfirmButton: false,
        timer: 3500
      });
}

function derechosReservados() {
    alert("Matias Capdevila");
}

inputEmail4.addEventListener('keyup',()=>{
    console.log(inputEmail4.value);
})

inputPassword4.addEventListener('keyup',()=>{
    console.log(inputPassword4.value);
})

inputAddress.addEventListener('keyup',()=>{
    console.log(inputAddress.value);
})

inputAddress2.addEventListener('keyup',()=>{
    console.log(inputAddress2.value);
})

inputCity.addEventListener('keyup',()=>{
    console.log(inputCity.value);
})

inputState.addEventListener('keyup',()=>{
    console.log(inputState.value);
})

inputZip.addEventListener('keyup',()=>{
    console.log(inputZip.value);
})

btnRegistro.addEventListener('click',completarRegistro);
pieDePagina.addEventListener('click',derechosReservados);

btnGuardar.addEventListener('click',()=>{
    if (btnGuardar.checked) {
        guardarDatos('localStorage');
    } else {
        guardarDatos('sessionStorage');
    }
})

console.log(localStorage.length);