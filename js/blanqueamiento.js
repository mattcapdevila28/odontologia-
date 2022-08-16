const btnSwal = document.getElementById('botonSwal');

btnSwal.onclick = () => {
    Swal.fire(
        {
            title: '¡Hola!',
            text: 'Te damos la bienvenida a nuestra app',
            icon: 'info',
            iconColor: '#66f4ae',
            confirmButtonText: 'Gracias',
            showCancelButton: true,
            cancelButtonText: 'No me interesa',
            timer: 2500
        }
    )
}