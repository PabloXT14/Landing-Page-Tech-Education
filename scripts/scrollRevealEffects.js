/* ScrollReveal
- Definição: 
    * ScrollReveal é uma biblioteca JavaScript para animar facilmente os elementos conforme eles entram / saem da janela de visualização. Ele foi projetado para ser robusto e flexível, mas com sorte você ficará surpreso com a facilidade de utilizá-lo
    * Quick Start:
        - Para utilizá-la basta importar o seguinte link no <head> da página:
            <script src="https://unpkg.com/scrollreveal"></script>
        - Isso nos fornece a função construtora ScrollReveal(). Chamar essa função retorna a instância ScrollReveal, o “cérebro” por trás da mágica. Agora em outro script você pode gerenciar suas animações, há muito que podemos fazer com esta instância, mas na maioria das vezes usaremos o reveal() método para criar animação. Fundamentalmente, é assim que se usa ScrollReveal.

- Sintaxe(principal):
    - Ao ligar ScrollReveal(), você pode passar um "objeto options" para alterar a configuração padrão (que precisa ter o campo reset: true):
        ScrollReveal(options);
        Ex: 
        <head>
            <script src="https://unpkg.com/scrollreveal"></script>
            <script>
                ScrollReveal({ reset: true });
            </script>
        </head>
    - Reveal Options (Opções de Revelação):
        ScrollReveal().reveal(target, options);
        * target: elemento html alvo da revelação/animação
        * options: objeto js com a configurações da animação
        Ex:
        <h1 class="headline">
            Widget Inc.
        </h1>
        <p class="tagline">
            The perfect widgets.
            <span class="punchline">Forever.</span>
        </p>
        ---------------------------------- (in script js)
        ScrollReveal().reveal('.headline');
        ScrollReveal().reveal('.tagline', { delay: 500 });
        ScrollReveal().reveal('.punchline', { delay: 2000 });
*/

/* Common reveal options to create reveal animations */
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
});


/* ===== Animation Titles and Subtitles ===== */
ScrollReveal().reveal('.home h1, h2.heading, h3.title', {
    delay: 100,
    origin: 'left'
});


/* ===== Animations with interval ===== */
ScrollReveal().reveal('.home .box, footer .icons i', {
    delay: 300,
    origin: 'bottom',
    interval: 200
});

/* ===== Home Animations ===== */
ScrollReveal().reveal('.home p', {
    delay: 100,
    origin: 'right'
});

ScrollReveal().reveal('.home a', {
    delay: 200,
    origin: 'bottom'
});

/* ===== Images Animation ===== */
ScrollReveal().reveal('section .image img', {
    delay: 500,
    origin: 'top',
});

/* ===== Form Animation ===== */
ScrollReveal().reveal('.form-container', {
    delay: 500,
    origin: 'bottom'
});

/* ===== About Content Text Animation ===== */
ScrollReveal().reveal('.about .content', {
    delay: 400,
    origin: 'bottom'
});