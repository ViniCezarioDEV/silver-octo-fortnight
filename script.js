function again(){
    alert("Erro: 500\nServidor instável\nTente novamente baixar o boletim mais tarde")
}


function gerarNotaAleatoria(min, max) {
    let numero = Math.random() * (max - min) + min;
    return Math.round(numero * 10) / 10;
}

let nota1 = gerarNotaAleatoria(5.0, 8.7);
let nota2 = gerarNotaAleatoria(5.0, 8.7);
let nota3 = gerarNotaAleatoria(5.0, 8.7);
let nota4 = gerarNotaAleatoria(5.0, 8.7);

document.getElementById("nota1").textContent = nota1;
document.getElementById("nota2").textContent = nota2;
document.getElementById("nota3").textContent = nota3;
document.getElementById("nota4").textContent = nota4;

let media = (nota1 + nota2 + nota3 + nota4) / 4;
media = Math.round(media * 10) / 10;

document.getElementById("media").textContent = media;

let barra = document.querySelector(".progress");
barra.style.width = (media * 10) + "%";



function gerarFaltaAleatoria(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
// gerarFaltaAleatoria(5, 15)
let falta1 = gerarFaltaAleatoria(4, 8);
let falta2 = gerarFaltaAleatoria(0, 5);
let falta3 = gerarFaltaAleatoria(0, 2);
let falta4 = gerarFaltaAleatoria(7, 6);

document.getElementById("falta1").textContent = falta1;
document.getElementById("falta2").textContent = falta2;
document.getElementById("falta3").textContent = falta3;
document.getElementById("falta4").textContent = falta4;


