const btnSwal = document.getElementById('botonSwal');

btnSwal.onclick = () => {
    Swal.fire(
        {
            title: '¡Hola!',
            text: '¡Nunca es tarde para tener la sonrisa perfecta que deseas!',
            icon: 'info',
            iconColor: '#76e5fd',
            confirmButtonText: '¡Si quiero!',
            showCancelButton: true,
            cancelButtonText: 'No me interesa.',
            color: '#6a9ddd',
            timer: 3500
        }
    )
}