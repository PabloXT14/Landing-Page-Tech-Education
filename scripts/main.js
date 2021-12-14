const header = document.querySelector("header"),
    menuBars = document.querySelector(".fa-bars"),
    navbar = document.querySelector(".navbar"),
    sections = document.querySelectorAll('section');


// Pré carregamento de dados
const coursesContainer = document.querySelector("#course .boxes-container"),
    reviewsContainer = document.querySelector("#review .boxes-container"),
    teachersContainer = document.querySelector("#teacher .cards-container");

const teachers = [
    {
        id: 01,
        teacherProfile: './assets/img1.jpg',
        teacherName: 'John Doe',
        description: 'Senior Backend Engineer',
        socialMediasLinks: {
            facebook: 'https://www.facebook.com/pablo.alan.336',
            twitter: 'https://twitter.com/PabloAl73579607',
            instagram: 'https://www.instagram.com/pabloalan3/',
            github: 'https://github.com/PabloXT14'
        }
    },
    {
        id: 02,
        teacherProfile: './assets/img2.jpg',
        teacherName: 'John Doe',
        description: 'Senior Frontend Engineer',
        socialMediasLinks: {
            facebook: 'https://www.facebook.com/pablo.alan.336',
            twitter: 'https://twitter.com/PabloAl73579607',
            instagram: 'https://www.instagram.com/pabloalan3/',
            github: 'https://github.com/PabloXT14'
        }
    },
    {
        id: 03,
        teacherProfile: './assets/img3.jpg',
        teacherName: 'John Doe',
        description: 'Web designer',
        socialMediasLinks: {
            facebook: 'https://www.facebook.com/pablo.alan.336',
            twitter: 'https://twitter.com/PabloAl73579607',
            instagram: 'https://www.instagram.com/pabloalan3/',
            github: 'https://github.com/PabloXT14'
        }
    },
    {
        id: 04,
        teacherProfile: './assets/img4.jpg',
        teacherName: 'John Doe',
        description: 'SEO Analyst',
        socialMediasLinks: {
            facebook: 'https://www.facebook.com/pablo.alan.336',
            twitter: 'https://twitter.com/PabloAl73579607',
            instagram: 'https://www.instagram.com/pabloalan3/',
            github: 'https://github.com/PabloXT14'
        }
    }

]
const courses = [
    {
        id: 01,
        nameCourse: 'html5',
        tagIcon: '<i class="fab fa-html5"></i>',
        descriptionCourse:
            `Learn how to organize your web system's content with HTML. You'll learn how to create Sections, Forms, play Videos, and more`
    },
    {
        id: 02,
        nameCourse: 'css3',
        tagIcon: '<i class="fab fa-css3-alt"></i>',
        descriptionCourse:
            `Learn how to style and design your project with the latest in CSS. You will learn Flexbox, Grid, animations and more`
    },
    {
        id: 03,
        nameCourse: 'javascript',
        tagIcon: '<i class="fab fa-js-square"></i>',
        descriptionCourse:
            `Create professional, interactivity-rich systems with JavaScript. you will dominate
            object orientation, filter, map, reducer, promises and more`
    },
    {
        id: 04,
        nameCourse: 'web development',
        tagIcon: '<i class="fas fa-code"></i>',
        descriptionCourse:
            `Master modern Web Development fundamentals as well as advanced topics`
    },
    {
        id: 05,
        nameCourse: 'seo marketing',
        tagIcon: '<i class="fas fa-bullhorn"></i>',
        descriptionCourse:
            `Master digital marketing concepts and tools to drive your business. It's no use
            a project if your client doesn't know it exists`
    },
    {
        id: 06,
        nameCourse: 'graphic design',
        tagIcon: '<i class="fas fa-paint-brush"></i>',
        descriptionCourse:
            `Go even deeper into how to create web pages with a visually pleasing appearance`
    },
    {
        id: 07,
        nameCourse: 'react',
        tagIcon: '<i class="fab fa-react"></i>',
        descriptionCourse:
            `Master creating web applications with React and Redux. From simple to more complex applications using Protected Routes and much more`
    },
    {
        id: 08,
        nameCourse: 'nodeJS',
        tagIcon: '<i class="fab fa-node"></i>',
        descriptionCourse:
            `Create dynamic and complex web systems that run on the back end. Make applications using REST, Socket, Express and other modules`
    }
]
const reviews = [
    {
        id: 01,
        studentProfile: './assets/pic1.jpg',
        nameStudent: 'John Doe',
        comment:
            `The course is good for all that wanted to learn web development from the scratch because it discusses important lessons from intermediate to mastery level of programming(web development).`,
        numberStars: 5
    },
    {
        id: 02,
        studentProfile: './assets/pic2.jpg',
        nameStudent: 'John Doe',
        comment:
            `The course is good. but the problem is we cant folllow it efficiently, because majority of the videos are old. and that makes difficult to follow up.`,
        numberStars: 4
    },
    {
        id: 03,
        studentProfile: './assets/pic3.jpg',
        nameStudent: 'John Doe',
        comment:
            `Great course. Covers a lot of information - kept up-to-date. I would recommend this course to anyone just starting in web development`,
        numberStars: 4.5
    }
]

function handleStarsReview(numberStars) {
    let tagStarFilled = '<i class="fas fa-star"></i>';
    let tagStarEmpty = '<i class="far fa-star"></i>';
    let tagHalfStar = '<i class="fas fa-star-half-alt"></i>';
    let tagAllStars = '';

    for (let i = 1; i <= 5; i++) {
        if (i <= numberStars) {
            tagAllStars += tagStarFilled;
        }
        if (i > numberStars) {
            // Checando se é a estrela vazia ou pela metade
            if (numberStars - Math.floor(numberStars) != 0) {
                // StarHalf
                numberStars = Math.floor(numberStars);
                tagAllStars += tagHalfStar;
            } else {
                // StartEmpty
                tagAllStars += tagStarEmpty;
            }
        }
    }

    return tagAllStars;
}

function loadingDatas() {
    let tagCourses = '';
    let tagReviews = '';
    let tagTeachers = '';

    courses.forEach(course => {
        tagCourses += `
        <div class="box">
            ${course.tagIcon}
            <h3>${course.nameCourse}</h3>
            <p>${course.descriptionCourse}</p>
        </div>
        `
    });

    reviews.forEach(review => {
        tagReviews += `
        <div class="box">
            <img src="${review.studentProfile}" alt="${review.nameStudent} Student Profile">
            <h3>${review.nameStudent}</h3>
            <p>${review.comment}</p>
            <div class="stars">
                ${handleStarsReview(review.numberStars)}
            </div>
        </div>
        `
    });

    teachers.forEach(teacher => {
        tagTeachers += `
        <div class="card">
            <img src="${teacher.teacherProfile}" alt="${teacher.teacherName} Teacher Profile">
            <h3>${teacher.teacherName}</h3>
            <p>${teacher.description}</p>
            <div class="icons">
                <a href="${teacher.socialMediasLinks.facebook}" class="fab fa-facebook-f" target="_blank"></a>
                <a href="${teacher.socialMediasLinks.twitter}" class="fab fa-twitter" target="_blank"></a>
                <a href="${teacher.socialMediasLinks.instagram}" class="fab fa-instagram" target="_blank"></a>
                <a href="${teacher.socialMediasLinks.github}" class="fab fa-github" target="_blank"></a>
            </div>
        </div>
        `
    })

    teachersContainer.innerHTML = tagTeachers;
    coursesContainer.innerHTML = tagCourses;
    reviewsContainer.innerHTML = tagReviews;
}
loadingDatas();


// Show navbar em telas pequenas
menuBars.addEventListener('click', (event) => {
    event.target.classList.toggle("fa-times");
    navbar.classList.toggle("nav-toggle");
});


// Testes para quando estiver dando scroll na pagina
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
