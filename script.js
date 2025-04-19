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
let nota5 = gerarNotaAleatoria(0.0, 3.5);// algebra (exame final)
let nota6 = gerarNotaAleatoria(0.0, 4.7);// soft (reprovado)

document.getElementById("nota1").textContent = 'S/N'; // nota1
document.getElementById("nota2").textContent = 'S/N'; // nota2
document.getElementById("nota3").textContent = 'S/N'; // nota3
document.getElementById("nota4").textContent = 'S/N'; // nota4
document.getElementById("nota5").textContent = 'S/N'; // algebra (exame final) nota5
document.getElementById("nota6").textContent = 'S/N'; // soft (reprovado) nota6

// AQUI MEXE NA MEDIA

//media = Math.round(media * 10) / 10;
media = 'S/N'

if (typeof media === 'string' || myVar instanceof String){
    media = 'S/N'

    let barra = document.querySelector(".progress");
    barra.style.width = 0 + "%";

    
} else {
    let media = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6) / 6;
    media = Math.round(media * 10) / 10;

    let barra = document.querySelector(".progress");
    barra.style.width = (media * 10) + "%";
}

document.getElementById("media").textContent = media;




function gerarFaltaAleatoria(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
// gerarFaltaAleatoria(5, 15)
let falta1 = gerarFaltaAleatoria(4, 8);
let falta2 = gerarFaltaAleatoria(0, 5);
let falta3 = gerarFaltaAleatoria(0, 2);
let falta4 = gerarFaltaAleatoria(6, 7);
let falta5 = gerarFaltaAleatoria(9, 15);
let falta6 = gerarFaltaAleatoria(8, 13);

document.getElementById("falta1").textContent = falta1;
document.getElementById("falta2").textContent = falta2;
document.getElementById("falta3").textContent = falta3;
document.getElementById("falta4").textContent = falta4;
document.getElementById("falta5").textContent = falta5;
document.getElementById("falta6").textContent = falta6;


const nomesMasculinos = [
    "Lucas",
    "Gabriel",
    "Matheus",
    "Rafael",
    "João",
    "Pedro",
    "Henrique",
    "Caio",
    "Bruno",
    "Thiago",
    "André",
    "Felipe",
    "Gustavo",
    "Daniel",
    "Vinícius",
    "Eduardo",
    "Leandro",
    "Diego",
    "Fernando",
    "Alexandre",
    "Marcelo",
    "Rodrigo",
    "Igor",
    "Nathan",
    "Vitor",
    "Samuel",
    "Murilo",
    "Leonardo",
    "Otávio",
    "Antonio"
  ];

let nomeId = gerarFaltaAleatoria(0, 30)
document.getElementById('nome').textContent = nomesMasculinos[nomeId]


