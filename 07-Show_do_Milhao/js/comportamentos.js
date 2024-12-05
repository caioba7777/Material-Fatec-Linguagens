// Quando a página é totalmente carregada, a função 'tratar_eventos' é chamada
// e o áudio de abertura do jogo é tocado.
window.onload = function () {
    tratar_eventos(); // Chama a função que trata todos os eventos do jogo.
    tocar_audio("abertura"); // Toca o áudio de abertura do jogo (provavelmente uma introdução).
}

/**
 * Esta função configura os eventos para interação do jogador, como cliques e envios de formulários.
 */
function tratar_eventos() {
    // Evento que ocorre quando o jogador clica no botão "Começar".
    document.getElementById("btn-comecar").onclick = function () {
        tocar_audio('comecar'); // Toca o áudio de início do jogo.
        document.getElementById("comecar").style.display = "none"; // Esconde a seção do botão "Começar".
        document.getElementById("pergunta1000").style.display = "block"; // Exibe a primeira pergunta (R$ 1000).
    }

    /**
     * Evento de envio do formulário de resposta da pergunta de R$ 1000.
     * Aqui, a resposta do jogador é verificada e, dependendo da resposta, o jogo continua ou reinicia.
     */
    document.getElementById("form-pergunta1000").onsubmit = function () {
        var opcao_correta = "3"; // Define a opção correta para a pergunta de R$ 1000. A opção correta é a "3" (ESPÍRITO SANTO).
        var opcao_selecionada = this.pergunta1000.value; // Obtém o valor da opção selecionada pelo jogador no formulário.

        // Verifica se a resposta selecionada é a correta.
        if (opcao_selecionada == opcao_correta) {
            tocar_audio('pergunta-2000'); // Toca o áudio de transição para a próxima pergunta (R$ 2000).
            document.getElementById("pergunta1000").style.display = "none"; // Esconde a pergunta de R$ 1000.
            document.getElementById("pergunta2000").style.display = "block"; // Exibe a próxima pergunta (R$ 2000).
        } else {
            document.getElementById("pergunta1000").style.display = "none"; // Esconde a pergunta de R$ 1000 caso a resposta esteja errada.
            tocar_audio('errou'); // Toca o áudio de erro, indicando que a resposta estava incorreta.
            reiniciar_jogo(); // Chama a função que reinicia o jogo do início.
        }

        return false; // Impede o comportamento padrão do envio do formulário (evita recarregar a página).
    }
}



    /**
     * analisar resposta de pergunta de R$ 2000
     */
    document.getElementById("form-pergunta2000").onsubmit = function () {
        var opcao_correta = "4";
        var opcao_selecionada = this.pergunta2000.value;

        if (opcao_selecionada == opcao_correta) {
            tocar_audio('acertou')
            tocar_audio('pergunta-3000');
            document.getElementById("pergunta2000").style.display = "none";
            document.getElementById("pergunta3000").style.display = "block";
        } else {
            document.getElementById("pergunta-2000").style.display = "none";
            tocar_audio('errou');
            reiniciar_jogo();
        }
        return false;
    }


    /**
     * analisar resposta de pergunta de R$ 3000
     */
    document.getElementById("form-pergunta3000").onsubmit = function () {
        var opcao_correta = "2";
        var opcao_selecionada = this.pergunta3000.value;

        if (opcao_selecionada == opcao_correta) {
            tocar_audio('pergunta-4000');
            document.getElementById("pergunta3000").style.display = "none";
            document.getElementById("pergunta4000").style.display = "block";
        } else {
            document.getElementById("pergunta-3000").style.display = "none";
            tocar_audio('errou');
            reiniciar_jogo();
        }
        return false;
    }


    /**
     * analisar resposta de pergunta de R$ 4000
     */
    document.getElementById("form-pergunta4000").onsubmit = function () {
        var opcao_correta = "4";
        var opcao_selecionada = this.pergunta4000.value;

        if (opcao_selecionada == opcao_correta) {
            tocar_audio('pergunta-5000');
            document.getElementById("pergunta4000").style.display = "none";
            document.getElementById("pergunta5000").style.display = "block";
        } else {
            document.getElementById("pergunta-4000").style.display = "none";
            tocar_audio('errou');
            reiniciar_jogo();
        }
        return false;
    }


    /**
    * analisar resposta de pergunta de R$ 5000
    */
    document.getElementById("form-pergunta5000").onsubmit = function () {
        var opcao_correta = "2";
        var opcao_selecionada = this.pergunta5000.value;

        if (opcao_selecionada == opcao_correta) {
            tocar_audio('pergunta-10000');
            document.getElementById("pergunta5000").style.display = "none";
            document.getElementById("pergunta10000").style.display = "block";
        } else {
            document.getElementById("pergunta-5000").style.display = "none";
            tocar_audio('errou');
            reiniciar_jogo();
        }
        return false;
    }


    /**
     * analisar resposta de pergunta de R$ 10000
     */
    document.getElementById("form-pergunta10000").onsubmit = function () {
        var opcao_correta = "3";
        var opcao_selecionada = this.pergunta10000.value;

        if (opcao_selecionada == opcao_correta) {
            tocar_audio('pergunta-20000');
            document.getElementById("pergunta10000").style.display = "none";
            document.getElementById("pergunta20000").style.display = "block";
        } else {
            document.getElementById("pergunta-10000").style.display = "none";
            tocar_audio('errou');
            reiniciar_jogo();
        }
        return false;
    }

    /**
     * analisar resposta de pergunta de R$ 20000
     */
    document.getElementById("form-pergunta20000").onsubmit = function () {
        var opcao_correta = "3";
        var opcao_selecionada = this.pergunta20000.value;

        if (opcao_selecionada == opcao_correta) {
            tocar_audio('pergunta-30000');
            document.getElementById("pergunta20000").style.display = "none";
            document.getElementById("pergunta30000").style.display = "block";
        } else {
            document.getElementById("pergunta-20000").style.display = "none";
            tocar_audio('errou');
            reiniciar_jogo();
        }
        return false;
    }


    /**
* analisar resposta de pergunta de R$ 30000
*/
    document.getElementById("form-pergunta30000").onsubmit = function () {
        var opcao_correta = "3";
        var opcao_selecionada = this.pergunta30000.value;

        if (opcao_selecionada == opcao_correta) {
            tocar_audio('pergunta-40000');
            document.getElementById("pergunta30000").style.display = "none";
            document.getElementById("pergunta40000").style.display = "block";
        } else {
            document.getElementById("pergunta-30000").style.display = "none";
            tocar_audio('errou');
            reiniciar_jogo();
        }
        return false;
    }

    /**
     * analisar resposta de pergunta de R$ 40000
     */
    document.getElementById("form-pergunta40000").onsubmit = function () {
        var opcao_correta = "2";
        var opcao_selecionada = this.pergunta40000.value;

        if (opcao_selecionada == opcao_correta) {
            tocar_audio('pergunta-50000');
            document.getElementById("pergunta40000").style.display = "none";
            document.getElementById("pergunta50000").style.display = "block";
        } else {
            document.getElementById("pergunta-40000").style.display = "none";
            tocar_audio('errou');
            reiniciar_jogo();
        }
        return false;
    }

    /**
     * analisar resposta de pergunta de R$ 50000
     */
    document.getElementById("form-pergunta50000").onsubmit = function () {
        var opcao_correta = "3";
        var opcao_selecionada = this.pergunta50000.value;

        if (opcao_selecionada == opcao_correta) {
            tocar_audio('pergunta-100000');
            document.getElementById("pergunta50000").style.display = "none";
            document.getElementById("pergunta100000").style.display = "block";
        } else {
            document.getElementById("pergunta-50000").style.display = "none";
            tocar_audio('errou');
            reiniciar_jogo();
        }
        return false;
    }

    /**
     * analisar resposta de pergunta de R$ 100000
     */
    document.getElementById("form-pergunta100000").onsubmit = function () {
        var opcao_correta = "3";
        var opcao_selecionada = this.pergunta100000.value;

        if (opcao_selecionada == opcao_correta) {
            tocar_audio('pergunta-200000');
            document.getElementById("pergunta100000").style.display = "none";
            document.getElementById("pergunta200000").style.display = "block";
        } else {
            document.getElementById("pergunta-100000").style.display = "none";
            tocar_audio('errou');
            reiniciar_jogo();
        }
        return false;
    }

    /**
     * analisar resposta de pergunta de R$ 200000
     */
    document.getElementById("form-pergunta200000").onsubmit = function () {
        var opcao_correta = "1";
        var opcao_selecionada = this.pergunta200000.value;

        if (opcao_selecionada == opcao_correta) {
            tocar_audio('pergunta-300000');
            document.getElementById("pergunta200000").style.display = "none";
            document.getElementById("pergunta300000").style.display = "block";
        } else {
            document.getElementById("pergunta-200000").style.display = "none";
            tocar_audio('errou');
            reiniciar_jogo();
        }
        return false;
    }

    /**
    * analisar resposta de pergunta de R$ 300000
    */

    document.getElementById("form-pergunta300000").onsubmit = function () {
        var opcao_correta = "4";
        var opcao_selecionada = this.pergunta300000.value;

        if (opcao_selecionada == opcao_correta) {
            tocar_audio('pergunta-400000');
            document.getElementById("pergunta300000").style.display = "none";
            document.getElementById("pergunta400000").style.display = "block";
        } else {
            document.getElementById("pergunta-300000").style.display = "none";
            tocar_audio('errou');
            reiniciar_jogo();
        }
        return false;
    }




    /**
     * analisar resposta de pergunta de R$ 400000
     */
    document.getElementById("form-pergunta400000").onsubmit = function () {
        var opcao_correta = "2";
        var opcao_selecionada = this.pergunta400000.value;

        if (opcao_selecionada == opcao_correta) {
            tocar_audio('pergunta-500000');
            document.getElementById("pergunta400000").style.display = "none";
            document.getElementById("pergunta500000").style.display = "block";
        } else {
            document.getElementById("pergunta-400000").style.display = "none";
            tocar_audio('errou');
            reiniciar_jogo();
        }
        return false;
    }


    /**
     * analisar resposta de pergunta de R$ 500000
     */
    document.getElementById("form-pergunta500000").onsubmit = function () {
        var opcao_correta = "3";
        var opcao_selecionada = this.pergunta500000.value;

        if (opcao_selecionada == opcao_correta) {
            tocar_audio('pergunta-1000000');
            document.getElementById("pergunta500000").style.display = "none";
            document.getElementById("pergunta1000000").style.display = "block";
        } else {
            document.getElementById("pergunta-500000").style.display = "none";
            tocar_audio('errou');
            reiniciar_jogo();
        }
        return false;
    }


    /**
     * analisar resposta de pergunta de R$ 1000000
     */
    document.getElementById("form-pergunta1000000").onsubmit = function () {
        var opcao_correta = "2";
        var opcao_selecionada = this.pergunta1000000.value;

        if (opcao_selecionada == opcao_correta) {
            tocar_audio('ganhou');
            document.getElementById("pergunta500000").style.display = "none";
            document.getElementById("pergunta1000000").style.display = "block";
        } else {
            document.getElementById("pergunta-500000").style.display = "none";
            tocar_audio('errou');
            reiniciar_jogo();
        }
        return false;
    }


/**
 * função caso o jogador perca
 */

function reiniciar_jogo() {

    document.getElementById("comecar").style.display = "block";
    document.getElementById("btn-comecar").innerHTML = "Jogar Novamente";
}

/**
 * função para exucutar a voz do silvio santos, em cada uma das ocasiões
 */

function tocar_audio(qual_tocar) {
    var audio = document.getElementById("silvio-santos");

    switch (qual_tocar) {
        case "abertura":
            audio.src = "img_audio/audio/abertura-show-do-milhao.mp3";
            break;

        case "comecar":
            audio.src = "img_audio/audio/1000.wav";
            break;

        case "acertou":
            audio.src = "img_audio/audio/parabens.wav";
            break;

        case "ganhou":
            audio.src = "img_audio/audio/ganhou.wav";
            break;

        case "errou":
            audio.src = "img_audio/audio/errou.wav";
            break;

        case "pergunta-2000":
            audio.src = "img_audio/audio/2000.wav";
            break;

        case "pergunta-3000":
            audio.src = "img_audio/audio/3000.wav";
            break;

        case "pergunta-4000":
            audio.src = "img_audio/audio/4000.wav";
            break;

        case "pergunta-5000":
            audio.src = "img_audio/audio/5000.wav";
            break;

        case "pergunta-10000":
            audio.src = "img_audio/audio/10000.wav";
            break;

        case "pergunta-20000":
            audio.src = "img_audio/audio/20000.wav";
            break;

        case "pergunta-30000":
            audio.src = "img_audio/audio/30000.wav";
            break;

        case "pergunta-40000":
            audio.src = "img_audio/audio/40000.wav";
            break;

        case "pergunta-50000":
            audio.src = "img_audio/audio/50000.wav";
            break;

        case "pergunta-100000":
            audio.src = "img_audio/audio/100000b.wav";
            break;

        case "pergunta-200000":
            audio.src = "img_audio/audio/200000.wav";
            break;

        case "pergunta-300000":
            audio.src = "img_audio/audio/300000.wav";
            break;

        case "pergunta-400000":
            audio.src = "img_audio/audio/400000.wav";
            break;

        case "pergunta-500000":
            audio.src = "img_audio/audio/500000.wav";
            break;

        case "pergunta-1000000":
            audio.src = "img_audio/audio/1000000.wav";
            break;

    }

    audio.play();
}