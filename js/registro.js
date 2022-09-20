const btnRegistro = document.getElementById('registro');
const btnGuardar = document.getElementById('gridCheck');
const email = document.getElementById('inputEmail4');
let inputEmail4 = document.getElementById('inputEmail4');
let inputPassword4 = document.getElementById('inputPassword4');

    
// alert de registro
btnRegistro.onclick = () => {
    e.preventDefault();
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Registro exitoso!',
        showConfirmButton: true,
        timer: 3500
    },
        function (isConfirm) {
            if (isConfirm) {
                return true;
            }
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
btnRegistro.addEventListener('click',()=>{
    if (btnGuardar.checked) {
        guardarDatos('localStorage');
    } else {
        guardarDatos('sessionStorage');
    }
})

// api
async function verificacionEmail (inputEmail4) {
let API =  `{inputEmail4}`;
const resp = await fetch(API);
const dataJson = await resp.json();
console.log(dataJson);
}

btnRegistro.addEventListener("click", function(event){
    event.preventDefault();
verificacionEmail(inputEmail4)
})