
function retraso(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

async function onGuardaPerfil() {
  // alert("entro guarda");
  const miTitulo = document.getElementById("mensaje");

  miTitulo.textContent = "Comprobando datos...";
  await retraso(1500);
  miTitulo.textContent = "Creando cuenta...";
  await retraso(2000);
  miTitulo.textContent = "Cuenta creada. Redirigiendo...";
  await retraso(1500); //esperamos 1s
  window.open("./principal_main.html", "_self");
}

async function onCancelaPerfil() {
  const miTitulo = document.getElementById("mensaje");
  // alert("entro cancel");
  miTitulo.textContent = "Redirigiendo...";
  await retraso(1500);
  window.open("./ingreso_login.html", "_self");
}