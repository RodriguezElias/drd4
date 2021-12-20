const form_contact = document.querySelector("#form_contact");
form_contact.addEventListener("submit", (e) => {
  if (validacion()) {
    alert("Mensaje enviado")
    e.preventDefault();
    form_contact.reset();
  } else {
    e.preventDefault();
  }
});

/* validacion */
function validacion() {
  var nombre, apellido, telefono, correo;
  nombre = document.getElementById("nombre").value;
  apellido = document.getElementById("apellido").value;
  telefono = document.getElementById("telefono").value;
  correo = document.getElementById("email").value;

  if (nombre === "" || apellido === "" || telefono === "" || correo === "") {
    alert("Todos los campos son obligatorio");
    return false;
  } else if (nombre.length > 30) {
    alert(" nombre esta muy largo");
    return false;
  } else if (!isNaN(nombre)) {
    alert("No se puede agregar numero en el nombre");
    return false;
  } else if (apellido.length > 80) {
    alert(" apellido muy largo");
    return false;
  } else if (!isNaN(apellido)) {
    alert("No se puede agregar numero en el apellido");
    return false;
  } else if (telefono.length > 30) {
    alert("Numero de telefono muy largo");
    return false;
  } else if (correo.length > 100) {
    alert("El correo esta muy largo");
    return false;
  } else if (isNaN(telefono)) {
    alert("El telefono ingresado es incorrecto");
    return false;
  }
  return true
}
