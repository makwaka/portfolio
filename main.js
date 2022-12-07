const projects = [
    {
        id:1,
        title: "A school website",
        img: "school.png",
        link: "https://makwaka.github.io/demowebschool.com/SJSS%20FILES/",
    },
    {
        id: 2,
        title: "color flipper",
        img: "colo-flipper.png",
        link: "https://makwaka.github.io/color-flipper/",
    },
    {
        id: 3,
        title: "Tip Calculator",
        img: "tip.png",
        link: "https://makwaka.github.io/tipcalculator.com/",
    },
    {
        id: 4,
        title: "Responsive navbar",
        img: "navbar.png",
        link: "https://makwaka.github.io/navbar-HTML-CSS-/",
    },
    {
        id: 5,
        title: "ShopAria Landing Page",
        img: "shopAria.png",
        link: "https://makwaka.github.io/shopAria/",
    },
    {
        id: 6,
        title: "football review",
        img: "football.png",
        link: "https://makwaka.github.io/footballer-review/",
    },
    {
        id: 7,
        title: "weather app",
        img: "weather.png",
        link: "https://makwaka.github.io/weather_app/",
    },


]

// select items
const projectsContainer = document.querySelector('.projects-container');


let currentItem = 0;

window.addEventListener('DOMContentLoaded', () =>{
let displayItems = projects.map((project) => {
    return `<article id="projects">
            <h4 class="title">${project.id}. ${project.title}</h4>
            <div class="web-links">
                <img class="myImage" src=${project.img} alt=${project.title}>
                <div class="myText">
                    <a class="link" href=${project.link} target="_blank">Visit Website</a>
                </div>
            </div>
        </article>`;
});

displayItems = displayItems.join('');
projectsContainer.innerHTML = displayItems;

});


// set date
const date = document.querySelector('.date');
date.innerHTML = new Date().getFullYear();


// nav toggle
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', () => {
    linksContainer.classList.toggle('show-links');
});
