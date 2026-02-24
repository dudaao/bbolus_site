// Seleciona todos os containers de contador da página
const containers = document.querySelectorAll('.contador-container');

containers.forEach(container => {
    // Seleciona os elementos específicos DESTA caixa de bolo
    const display = container.querySelector('.contador');
    const botaoAumentar = container.querySelector('.btnAumentar');
    const botaoDiminuir = container.querySelector('.btnDiminuir');

    let valorAtual = 0;

    botaoAumentar.addEventListener('click', () => {
        valorAtual++;
        display.textContent = valorAtual;
    });

    botaoDiminuir.addEventListener('click', () => {
        if (valorAtual > 0) { // Opcional: impede que o número fique negativo
            valorAtual--;
            display.textContent = valorAtual;
        }
    });
});