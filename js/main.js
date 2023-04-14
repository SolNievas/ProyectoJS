//DOM.

const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const usuario = document.getElementById("usuario");
const contraseña = document.getElementById("contraseña");

//Funciones.

function mensaje() {
    Swal.fire(
        'Registro exitoso',
        'Te has registrado correctamente',
        'success'
    )
}

//Ciclos.

form.addEventListener("submit", e => {
    e.preventDefault();
    let ingresar = false

    if (nombre.value.length <=3) {
        Swal.fire('El Nombre debe tener más de 3 caracteres',
        '*Asegurate de completar todos los campos para continuar*');       
        ingresar = true
    }

    else if (apellido.value.length <=3) {
        Swal.fire('El Apellido debe tener más de 3 caracteres',
        '*Asegurate de completar todos los campos para continuar*');
        ingresar = true
    }

    else if (usuario.value.length <= 4) {
        Swal.fire('El Nombre de Usuario debe tener más de 4 caracteres',
        '*Asegurate de completar todos los campos para continuar*');
        ingresar = true
    }

    else if (contraseña.value.length <= 6) {
        Swal.fire('La Contraseña debe tener más de 6 caracteres',
        '*Asegurate de completar todos los campos para continuar*'); 
        ingresar = true       
    }
    
    else {
       mensaje()
       ingresar = true
    }
})

//Objetos.

let casilleros = [nombre, apellido, usuario, contraseña]

const instrucciones = {
    nombre:"debe colocar su nombre",
    apellido: "debe colocar su apellido",
    usuario: "debe colocar su nombre de usuario",
    contraseña: "debe colocar su contraseña",
}

console.log (instrucciones);

//Arrays.

casilleros.push ("repetir contraseña si hay error");
console.log(casilleros);

const instruccionesArray = [contraseña];
const repetirContraseña = instruccionesArray.map ((contraseña => {
    return {
        contraseña: ("debe colocar su contraseña nuevamente de ser necesario")
    }
   
}))

console.log (repetirContraseña);

//Storage & JSON.

const registro = {
    nombre: 'colocar nombre',
    apellido: 'colocar apellido',
    usuario:'colocar usuario',
    contraseña: 'colocar contraseña'
};
  
localStorage.setItem('registro', JSON.stringify(registro));
  
let registroLS = JSON.parse(localStorage.getItem('registro'));
console.log(typeof registroLS);
console.log(registroLS);

//Fetch.

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "post",
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({
        title: "Formulario",
        body: "Registro de usuario en Form Company",
    })
})
.then((response) => response.json())
.then((data) => {
    console.log(data);
});
