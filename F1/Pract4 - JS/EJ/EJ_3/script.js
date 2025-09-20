function generarcontra(longitud, incluirMay, incluirMin, incluirNum, incluirSim) {
  const mayusculas = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"; //caracteres considerados por cada caso
  const minusculas = "abcdefghijklmnñopqrstuvwxyz";
  const numeros = "0123456789";
  const simbolos = "!@#$%^&*()_-+=<>?/{}~|";

  let caracteres = "";

  if (incluirMay) caracteres += mayusculas;
  if (incluirMin) caracteres += minusculas;
  if (incluirNum) caracteres += numeros;
  if (incluirSim) caracteres += simbolos;

  if (caracteres.length === 0) {
    return "selecciona al menos un tipo de carácter.";
  }

  let contra = "";
  for (let i = 0; i < longitud; i++) {
    let indice = Math.floor(Math.random() * caracteres.length); //al azar
    contra += caracteres[indice];
  }

  return contra;
}

function generar() {
  let longitud = parseInt(document.getElementById("longitud").value);
  let mayus = document.getElementById("mayus").checked;
  let minus = document.getElementById("minus").checked;
  let numeros = document.getElementById("numeros").checked;
  let simbolos = document.getElementById("simbolos").checked;

  let password = generarcontra(longitud, mayus, minus, numeros, simbolos);

  document.getElementById("contra").textContent = password;
}
