obtemPegadaCalculada();

function obtemPegadaCalculada() {
    const resultado = document.querySelector('#perguntas-resultado-pegada');
    const resultadoPegadaCalculada = sessionStorage.getItem('resultadoPegada');

    if(resultadoPegadaCalculada) {
        resultado.innerHTML = resultadoPegadaCalculada;
    }
}

function calcularPegada(e) {
    e.preventDefault();

    const resultado = document.querySelector('#perguntas-resultado-pegada');
    let banho = document.querySelector('#input-banho').value;
    let celular = document.querySelector('#input-celular').value;
    let computador = document.querySelector('#input-computador').value;
    let game = document.querySelector('#input-game').value;
    let televisao = document.querySelector('#input-tv').value;
    let mediaMensal = 0;
    
    banho = (0,833 * banho) * 0,11;
    celular = (0,173 * celular);
    computador = (0,35 * computador) * 0,11;
    game = (0,22 * game) * 0,11;
    televisao = (0,2 * televisao) * 0,11;

    mediaMensal = (banho + celular + computador + game + televisao) * 30;

    resultado.innerHTML = mediaMensal;
    sessionStorage.setItem('resultadoPegada', mediaMensal)
}