function mostrarAlerta(event) {
  event.preventDefault();
  alert("Login enviado");
}

function validarFormulario(event) {
  event.preventDefault();
  const usuario = document.querySelector('input[name="usuario"]').value;
  const password = document.querySelector('input[name="password"]').value;

  if (usuario === "" || password === "") {
    alert("Por favor complete todos los campos.");
    return;
  }

  alert("Datos enviados correctamente");
}
