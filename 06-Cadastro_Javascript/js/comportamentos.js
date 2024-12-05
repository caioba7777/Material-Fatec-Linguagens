// Função que será chamada quando a janela terminar de carregar
window.onload = tratar_eventos;

function tratar_eventos() {
    /**
     * Mostrar o formulário de cadastro de contato quando o link é clicado.
     */
    document.getElementById("mostra-form-cadastro").onclick = function() {
        this.style.display = 'none'; // Oculta o link
        document.getElementById("formulario-cadastro-contato").style.display = 'block'; // Exibe o formulário

        return false; // Previne o comportamento padrão do link
    }

    /**
     * Botão para "esconder" (cancelar) o cadastro de contato.
     */
    document.getElementById("esconde-form-cadastro").onclick = function() {
        document.getElementById("formulario-cadastro-contato").style.display = 'none'; // Oculta o formulário
        document.getElementById("mostra-form-cadastro").style.display = 'block'; // Exibe o link novamente
    }

    /**
     * Ação ao submeter o formulário de contato.
     */
    document.getElementById("form-contato").onsubmit = function() {
        // Captura os valores dos campos do formulário
        var nome = document.getElementById("nome").value;
        var email = document.getElementById("email").value;
        var telefone = document.getElementById("telefone").value;
        var cidade = document.getElementById("cidade").value;

        // Criação do ícone para remover contato
        var img_remove = document.createElement("img");
        img_remove.setAttribute('src', 'img/cross.png'); // Define a imagem de remoção
        img_remove.className = 'botao-remover-contato'; // Define a classe para estilização

        // Criação de uma célula (td) para o botão de remover
        var td_remove = document.createElement("td");
        td_remove.appendChild(img_remove); // Adiciona a imagem à célula

        // Criação da célula para o avatar selecionado
        var img_avatar = document.createElement("img");
        img_avatar.setAttribute('src', 'img/' + this.avatar_selecionado.value); // Define a imagem do avatar

        var td_avatar = document.createElement("td");
        td_avatar.appendChild(img_avatar); // Adiciona a imagem do avatar à célula

        // Criação das células para as informações do contato
        var td_nome = document.createElement("td");
        td_nome.appendChild(document.createTextNode(nome)); // Adiciona o nome

        var td_email = document.createElement("td");
        td_email.appendChild(document.createTextNode(email)); // Adiciona o e-mail

        var td_telefone = document.createElement("td");
        td_telefone.appendChild(document.createTextNode(telefone)); // Adiciona o telefone

        var td_cidade = document.createElement("td");
        td_cidade.appendChild(document.createTextNode(cidade)); // Adiciona a cidade

        // Criação da linha (tr) para a tabela
        var tr = document.createElement("tr");
        tr.appendChild(td_remove); // Adiciona a célula de remoção
        tr.appendChild(td_avatar); // Adiciona a célula de avatar
        tr.appendChild(td_nome); // Adiciona a célula de nome
        tr.appendChild(td_email); // Adiciona a célula de e-mail
        tr.appendChild(td_telefone); // Adiciona a célula de telefone
        tr.appendChild(td_cidade); // Adiciona a célula de cidade

        // Adiciona a nova linha à tabela de contatos
        document.getElementById("tbl-contatos").getElementsByTagName("tbody")[0].appendChild(tr);

        // Esconde o formulário e mostra o link novamente
        document.getElementById("formulario-cadastro-contato").style.display = 'none';
        document.getElementById("mostra-form-cadastro").style.display = 'block';

        // Ativa os botões de exclusão para os novos contatos
        ativar_botoes_exclusao();

        return false; // Previne o envio do formulário
    }

    // Ativa os botões de exclusão inicialmente
    ativar_botoes_exclusao();
}

/**
 * Função para ativar os botões de remover contato.
 */
function ativar_botoes_exclusao() {
    var corpo_tabela = document.getElementById("tbl-contatos").getElementsByTagName("tbody")[0];
    var imagens_tabela = corpo_tabela.getElementsByTagName("img"); // Obtém todas as imagens da tabela

    // Itera sobre as imagens para configurar os botões de remoção
    for (var i = 0; i < imagens_tabela.length; i++) {
        if (imagens_tabela[i].getAttribute('class') == 'botao-remover-contato') {
            imagens_tabela[i].onclick = function() { // Configura a ação de clique
                if (confirm("Tem certeza que deseja remover da sua lista?")) { // Confirmação antes de remover
                    this.parentElement.parentElement.remove(); // Remove a linha correspondente da tabela
                }
            }
        }
    }
}
