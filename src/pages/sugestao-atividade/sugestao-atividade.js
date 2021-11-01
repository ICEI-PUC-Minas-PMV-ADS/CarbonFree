initPage();

function initPage() {
    const resultadoPegada = document.querySelector('#sugestao-atividade-resultado-pegada');
    const resultadoPegadaCalculada = sessionStorage.getItem('resultadoPegada');

    if(resultadoPegadaCalculada) {
        resultadoPegada.innerHTML = resultadoPegadaCalculada;
    }
};
