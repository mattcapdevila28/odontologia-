// array de objetos
const doctor1 = {
    nombreYapellido: 'Doctor Sebastiano Lozano',
    calle: 'avenida caseros 3547',
    edad: 24,
    esSoltero: true,
    dias: 'Lunes',
}


const doctor2 = {
    nombreYapellido: 'Doctor Yao Ming',
    calle: 'avenida Jujuy 550',
    edad: 38,
    esSoltera: false,
    dias: 'miercoles',
}

const doctor3 = {
    nombreYapellido: 'Doctor Dario Chaile',
    calle: 'avenida La plata 751',
    edad: 34,
    esSoltero: true,
    dias: 'viernes',
}

function Doctor(nombreYapellido, calle, edad, dias) {
    this.nombreYapellido = nombreYapellido;
    this.calle = calle;
    this.edad = edad;
    this.dias = dias;
}

alert("Si buscas formar parte de nuestro equipo, ingresa tus datos")    
let nombreYapellidoDoctor = prompt('Ingresa tú nombre y apellido');
let edadDoctor = prompt('Ingresa tú edad');
let diasDoctor = prompt('Ingresa tus días disponibles');
listadoDoctores.push(nombreYapellidoDoctor);
listadoDoctores.log(listadoDoctores);
const DoctorUsuario = new Doctor(nombreYapellidoDoctor,edadDoctor,diasDoctor);

console.log(DoctorUsuario)

const listadoDoctores = ['Sebastian Lozano', 'Yao Ming', 'Dario Chaile', 'Ailin Farias', 'Lucia Frey', 'Amara'];
const numeros = [1, 2, 3, 4, 5];

console.log(listadoDoctores[0]);
console.log(listadoDoctores[1]);
console.log(listadoDoctores[2]);
console.log(listadoDoctores[3]);
console.log(listadoDoctores[4]);
console.log(listadoDoctores[5]);


