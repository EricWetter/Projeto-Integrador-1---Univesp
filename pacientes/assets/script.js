document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o comportamento padrão do formulário de recarregar a página
    
    // Obter os valores dos campos
    var nomePaciente = document.getElementById("nomePaciente").value;
    var nomeResponsavel = document.getElementById("nomeResponsavel").value;
    var dataNascimento = document.getElementById("dataNascimento").value;
    var telefone = document.getElementById("telefone").value;
    var inicioTratamento = document.getElementById("inicioTratamento").value;
    var terminoTratamento = document.getElementById("terminoTratamento").value;
    var endereco = document.getElementById("endereco").value;
    var cidadeEstado = document.getElementById("cidadeEstado").value;
    
    // Aqui você pode fazer o que quiser com os valores, como enviar para um servidor, salvar localmente, etc.
    
    // Por exemplo, vamos apenas exibir os valores no console por enquanto
    console.log("Nome do paciente:", nomePaciente);
    console.log("Nome do responsável:", nomeResponsavel);
    console.log("Data de Nascimento:", dataNascimento);
    console.log("Telefone:", telefone);
    console.log("Início do tratamento:", inicioTratamento);
    console.log("Término do tratamento:", terminoTratamento);
    console.log("Endereço:", endereco);
    console.log("Cidade e Estado:", cidadeEstado);
});


// Edição do cadastro

// Simulando dados de paciente (substitua isso com a lógica de carregamento real)
var paciente = {
    nomePaciente: "Fulano de Tal",
    nomeResponsavel: "Ciclano de Tal",
    dataNascimento: "2000-01-01",
    telefone: "123456789",
    inicioTratamento: "2024-01-01",
    terminoTratamento: "2024-06-01",
    endereco: "Rua X, 123",
    cidadeEstado: "Cidade, Estado"
};

// Função para preencher o formulário de edição com os dados do paciente
function preencherFormulario() {
    document.getElementById("nomePaciente").value = paciente.nomePaciente;
    document.getElementById("nomeResponsavel").value = paciente.nomeResponsavel;
    document.getElementById("dataNascimento").value = paciente.dataNascimento;
    document.getElementById("telefone").value = paciente.telefone;
    document.getElementById("inicioTratamento").value = paciente.inicioTratamento;
    document.getElementById("terminoTratamento").value = paciente.terminoTratamento;
    document.getElementById("endereco").value = paciente.endereco;
    document.getElementById("cidadeEstado").value = paciente.cidadeEstado;
}

// Carregar os dados do paciente no formulário ao carregar a página
window.onload = preencherFormulario;

// Evento de envio do formulário de edição
document.getElementById("edicaoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o comportamento padrão do formulário de recarregar a página
    
    // Obter os valores atualizados dos campos
    paciente.nomePaciente = document.getElementById("nomePaciente").value;
    paciente.nomeResponsavel = document.getElementById("nomeResponsavel").value;
    paciente.dataNascimento = document.getElementById("dataNascimento").value;
    paciente.telefone = document.getElementById("telefone").value;
    paciente.inicioTratamento = document.getElementById("inicioTratamento").value;
    paciente.terminoTratamento = document.getElementById("terminoTratamento").value;
    paciente.endereco = document.getElementById("endereco").value;
    paciente.cidadeEstado = document.getElementById("cidadeEstado").value;
    
    // Aqui você pode fazer o que quiser com os valores atualizados, como enviar para um servidor, salvar localmente, etc.
    
    // Por exemplo, vamos apenas exibir os valores atualizados no console por enquanto
    console.log("Dados atualizados:", paciente);
});



// dados dos pacientes

// Dados dos pacientes (substitua isso com seus dados reais)
var pacientes = [
    { nome: "Fulano de Tal", idade: 30, cidade: "Cidade A" },
    { nome: "Ciclano de Tal", idade: 25, cidade: "Cidade B" }
];

// Função para exibir os pacientes na página
function exibirPacientes() {
    var pacientesContainer = document.getElementById("pacientesContainer");
    pacientesContainer.innerHTML = ""; // Limpa o conteúdo antes de adicionar os novos cards

    pacientes.forEach(function(paciente, index) {
        var card = document.createElement("div");
        card.classList.add("card");

        var html = "<h3>" + paciente.nome + "</h3>";
        html += "<p>Idade: " + paciente.idade + "</p>";
        html += "<p>Cidade: " + paciente.cidade + "</p>";
        html += "<button class='editar' data-index='" + index + "'>Editar</button>";
        html += "<button class='excluir' data-index='" + index + "'>Excluir</button>";
        html += "<button class='anotacoes' data-index='" + index + "'>Anotações</button>";

        card.innerHTML = html;
        pacientesContainer.appendChild(card);
    });
}

// Exibir os pacientes quando a página carregar
window.onload = exibirPacientes;

// Evento de clique nos botões de editar
document.addEventListener("click", function(event) {
    if (event.target.classList.contains("editar")) {
        var index = event.target.getAttribute("data-index");
        // Aqui você pode redirecionar para a página de edição com os dados do paciente ou abrir um modal de edição
        console.log("Editar paciente de índice " + index);
    }
});

// Evento de clique nos botões de excluir
document.addEventListener("click", function(event) {
    if (event.target.classList.contains("excluir")) {
        var index = event.target.getAttribute("data-index");
        // Aqui você pode implementar a lógica para excluir o paciente com o índice especificado
        pacientes.splice(index, 1); // Remove o paciente da lista
        exibirPacientes(); // Atualiza a exibição dos pacientes na página
        console.log("Paciente de índice " + index + " excluído");
    }
});

// Evento de clique nos botões de anotações
document.addEventListener("click", function(event) {
    if (event.target.classList.contains("anotacoes")) {
        var index = event.target.getAttribute("data-index");
        abrirModalAnotacoes(index);
    }
});

// Função para abrir o modal de anotações
function abrirModalAnotacoes(index) {
    var modal = document.getElementById("modal");
    modal.style.display = "block";

    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    var anotacoesTextarea = document.getElementById("anotacoesTextarea");
    anotacoesTextarea.value = ""; // Limpa o campo de anotações antes de exibir

    // Aqui você pode preencher o campo de anotações com os dados do paciente
    console.log("Abrindo anotações para o paciente de índice " + index);
}

// Evento de clique no botão de salvar no modal de anotações
document.getElementById("salvarAnotacoes").addEventListener("click", function() {
    var anotacoesTextarea = document.getElementById("anotacoesTextarea");
    var anotacoes = anotacoesTextarea.value;
    // Aqui você pode salvar as anotações, seja localmente ou em um servidor
    console.log("Anotações salvas:", anotacoes);
    document.getElementById("modal").style.display = "none"; // Fecha o modal após salvar as anotações
});
