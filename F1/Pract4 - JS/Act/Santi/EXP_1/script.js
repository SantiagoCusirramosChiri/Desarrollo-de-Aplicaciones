const btnAlerta = document.getElementById('btnAlerta');
const btnTexto = document.getElementById('btnTexto');
const btnColor = document.getElementById('btnColor');
const mensaje = document.getElementById('mensaje');

btnAlerta.onclick = function (){
    alert("Eres Nazi? Entonces que haces aqui?");
}
btnTexto.onclick = function (){
    mensaje.innerText = 'Santiago Jesus Cusirramos Chiri';
}
btnColor.onclick = function (){
    btnColor.style.backgroundColor = "blue";
}