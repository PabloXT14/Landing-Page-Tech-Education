const header = document.querySelector("header"),
    menuBars = document.querySelector(".fa-bars"),
    navbar = document.querySelector(".navbar"),
    sections = document.querySelectorAll('section');

// Show navbar
menuBars.addEventListener('click', (event) => {
    event.target.classList.toggle("fa-times");
    navbar.classList.toggle("nav-toggle");
});


// Teste para quando estiver dando scroll na pagina
window.addEventListener("scroll", (event) => {
    // Esconder navbar se der scroll na page
    // let scroll = this.scrollY;
    // console.log(scroll)// retorna a posição do scroll da window
    menuBars.classList.remove("fa-times");
    navbar.classList.remove("nav-toggle");

    // Mudando design do header se der scroll na pagina
    if (this.scrollY > 30) {
        header.classList.add("header-active");
    } else {
        header.classList.remove("header-active");
    }


    // Teste de Altura da section em relação ao scroll da pagina
    sections.forEach(section => {
        let idSection = section.getAttribute("id");

        // getBoundingClientRect() retorna as dimensões e a localização do elemento como números de ponto flutuante após a realização de transformações CSS.
        let heightSection = section.getBoundingClientRect().height;// retorna somento o numero do height da section

        let offsetTop = section.getBoundingClientRect().top - 200;// top: retorna a ditancia do elemento em relação ao top da pagina (assemelhe com o top do position)

        let top = window.screenTop;//scrollY: propriedade obtém ou define o número de pixels em que o conteúdo de um elemento é rolado verticalmente


        // Calculo para saber se entrou em outra section
        if (top >= offsetTop && top < offsetTop + heightSection) {
            let linksMenu = document.querySelectorAll(".navbar ul li a");
            linksMenu.forEach(link => {
                link.classList.remove('active')
                if (link.getAttribute("href") == `#${idSection}`) {
                    link.classList.add('active');
                }
            })
        }
    });


});
