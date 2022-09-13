const btnRegistro = document.getElementById('registro');
const btnGuardar = document.getElementById('gridCheck')
let inputEmail4 = document.getElementById('inputEmail4');
let inputPassword4 = document.getElementById('inputPassword4');
let inputAddress = document.getElementById('inputAddress');
let inputAddress2 = document.getElementById('inputAddress2');
let inputCity = document.getElementById('inputCity');
let inputState = document.getElementById('inputState');
let inputZip = document.getElementById('inputZip');

//form
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

// alert de registro
btnRegistro.onclick = () => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Registro exitoso!',
        showConfirmButton: true,
        timer: 3500
      });
}

// funcion de storage
function guardarDatos(storage) {   
    const email = {
        "inputEmail4": email,
    }

    if (storage === "localStorage") {
        localStorage.setItem('inputEmail4', JSON.stringify(email));
    }

    if (storage === "sessionStorage") {
        sessionStorage.setItem('inputEmail4', JSON.stringify(email));
    }
}
btnGuardar.addEventListener('click',()=>{
    if (btnGuardar.checked) {
        guardarDatos('localStorage');
    } else {
        guardarDatos('sessionStorage');
    }
})

// api
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch("https://api.eva.pingutil.com/email?email=test@mail7.io", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));