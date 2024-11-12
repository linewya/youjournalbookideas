// Array para armazenar ideias de livros/diários
let ideias = [];

// Função para exibir as ideias na página
function exibirIdeias() {
    const listaIdeiasDiv = document.getElementById('lista-ideias');
    listaIdeiasDiv.innerHTML = ""; // Limpar a lista antes de reexibir

    ideias.forEach((ideia, index) => {
        const div = document.createElement('div');
        div.classList.add('ideia');
        div.innerHTML = `
            <h4>${ideia.titulo}</h4>
            <p>${ideia.descricao}</p>
            <p><strong>Enviado por:</strong> ${ideia.autor}</p>
        `;
        listaIdeiasDiv.appendChild(div);
    });
}

// Função para tratar o envio de ideias
document.getElementById('form-ideias').addEventListener('submit', function (e) {
    e.preventDefault();

    const titulo = document.getElementById('titulo').value;
    const descricao = document.getElementById('descricao').value;

    if (titulo && descricao) {
        // Adiciona a nova ideia ao array
        ideias.push({
            titulo: titulo,
            descricao: descricao,
            autor: "Anônimo"
        });

        // Exibe as ideias atualizadas
        exibirIdeias();

        // Limpa os campos do formulário
        document.getElementById('titulo').value = '';
        document.getElementById('descricao').value = '';
    }
});

// Função para tratar o envio de mensagens de contato
document.getElementById('form-contato').addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome && email && mensagem) {
        alert("Mensagem enviada com sucesso!");

        // Limpa os campos do formulário
        document.getElementById('nome').value = '';
        document.getElementById('email').value = '';
        document.getElementById('mensagem').value = '';
    }
});
// Array para armazenar ideias de livros/diários
let ideias = [];

// Função para exibir as ideias na página
function exibirIdeias() {
    const listaIdeiasDiv = document.getElementById('lista-ideias');
    listaIdeiasDiv.innerHTML = ""; // Limpar a lista antes de reexibir

    ideias.forEach((ideia, index) => {
        const div = document.createElement('div');
        div.classList.add('ideia');
        div.innerHTML = `
            <h4>${ideia.titulo}</h4>
            <p>${ideia.descricao}</p>
            <p><strong>Enviado por:</strong> ${ideia.autor}</p>
        `;
        listaIdeiasDiv.appendChild(div);
    });
}

// Função para tratar o envio de ideias
document.getElementById('form-ideias').addEventListener('submit', function (e) {
    e.preventDefault();

    const titulo = document.getElementById('titulo').value;
    const descricao = document.getElementById('descricao').value;

    if (titulo && descricao) {
        // Adiciona a nova ideia ao array
        ideias.push({
            titulo: titulo,
            descricao: descricao,
            autor: "Anônimo"
        });

        // Exibe as ideias atualizadas
        exibirIdeias();

        // Limpa os campos do formulário
        document.getElementById('titulo').value = '';
        document.getElementById('descricao').value = '';
    }
});

// Função para tratar o envio de mensagens de contato
document.getElementById('form-contato').addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome && email && mensagem) {
        alert("Mensagem enviada com sucesso!");

        // Limpa os campos do formulário
        document.getElementById('nome').value = '';
        document.getElementById('email').value = '';
        document.getElementById('mensagem').value = '';
    }
});
