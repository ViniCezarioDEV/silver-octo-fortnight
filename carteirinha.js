document.addEventListener('DOMContentLoaded', function () {
    function adjustCardForMobile() {
        if (window.innerWidth <= 768) {
            document.body.style.overflow = 'hidden';
            document.body.style.height = '100vh';
        } else {
            document.body.style.overflow = '';
            document.body.style.height = '';
        }
    }
    
    // Executa ao carregar e redimensionar
    window.addEventListener('load', adjustCardForMobile);
    window.addEventListener('resize', adjustCardForMobile);
    
    
    const photoUpload = document.getElementById('photoUpload');
    const fileInput = document.getElementById('fileInput');
    const previewImage = document.getElementById('previewImage');
    const defaultIcon = document.getElementById('defaultIcon');

    photoUpload.addEventListener('click', function () {
        fileInput.click();
    });

    fileInput.addEventListener('change', function (e) {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();

            reader.onload = function (event) {
                previewImage.src = event.target.result;
                previewImage.style.display = 'block';
                defaultIcon.style.display = 'none';
            }

            reader.readAsDataURL(e.target.files[0]);
        }
    });
});



const nomesMasculinos = [
    "Lucas Oliveira Santos",
    "Gabriel Silva Pereira",
    "Matheus Costa Rodrigues",
    "Rafael Almeida Souza",
    "João Pedro Fernandes",
    "Pedro Henrique Lima",
    "Henrique Barbosa Carvalho",
    "Caio Martins Ribeiro",
    "Bruno Gomes Ferreira",
    "Thiago Nascimento Alves",
    "André Cunha Monteiro",
    "Felipe Castro Mendes",
    "Gustavo Rocha Teixeira",
    "Daniel Pires Cardoso",
    "Vinícius Moura Correia",
    "Eduardo Lopes Vasconcelos",
    "Leandro Moreira Brito",
    "Diego Ramos Andrade",
    "Fernando Xavier Dias",
    "Alexandre Torres Campos",
    "Marcelo Guerra Peixoto",
    "Rodrigo Santana Machado",
    "Igor Melo Guimarães",
    "Nathan Duarte Freitas",
    "Vitor Hugo Rezende",
    "Samuel Caldeira Tavares",
    "Murilo Fonseca Aragão",
    "Leonardo Barros Siqueira",
    "Otávio Miranda Dantas",
    "Antonio Bezerra Neves"
];

function gerarNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let nomeId = gerarNumero(0, 29)
document.getElementById('nome').textContent = nomesMasculinos[nomeId]

let matricula = gerarNumero(124152, 786858)
document.getElementById('matricula').textContent = matricula
document.getElementById('matricula2').textContent = matricula


const nomesCursos= [
    'Engenharia da Computação',
    'Ciência da Computação',
    'Sistemas de Informação',
    'Engenharia de Software',
    'Segurança da informação',
    'Rede de Computadores'
];

let cursoId = gerarNumero(0, 5)
document.getElementById('curso').textContent = nomesCursos[cursoId]