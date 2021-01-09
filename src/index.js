import homeTab from './home.js';
import contactTab from './contact.js';
import menuTab from './menu.js';

let content = document.querySelector('#content');
let homeBTN = document.createElement('button');
let menuBTN = document.createElement('button');
let contactBTN = document.createElement('button');
let navContent = document.createElement('div');


function initialPage() {
    content.style.marginLeft = "24%";
    content.style.marginRight = "24%";
    homeBTN.classList.add('btn', 'active');
    homeBTN.innerHTML = "Home";
    menuBTN.classList.add('btn');
    menuBTN.innerHTML = "Menu";
    contactBTN.classList.add('btn');
    contactBTN.innerHTML = "Contact";
    navContent.appendChild(homeBTN);
    navContent.appendChild(menuBTN);
    navContent.appendChild(contactBTN);
    navContent.classList.add("navContent");
    let body = document.querySelector('body');
    body.insertBefore(navContent, content);
    let image = document.createElement('img');
    image.classList.add('homeImage');
    image.src = "../img/dining.jpeg";
    image.style.marginTop = "3%";
    let h1 = document.createElement('h1');
    h1.innerHTML = "Eat at our resturant";
    h1.style.margin = "5px";
    let p = document.createElement('p');
    p.innerHTML = "Our resturant only has the finest foods. Only the best steaks, seafood, and desserts for our customers. Our five star restuant is run by the most famous chef in the country and people travel across the world to taste their food. Be sure to make a reservation today and to partake in our fine dining experience."
    p.style.fontSize = '1.5rem';
    p.style.margin = "3%";
    content.appendChild(image);
    content.appendChild(h1);
    content.appendChild(p);
};

initialPage();

homeBTN.addEventListener('click', ()=> {
    content.innerHTML = ""
    homeBTN.classList.add('active');
    menuBTN.classList.remove('active');
    contactBTN.classList.remove('active');
    content.appendChild(homeTab());
});

contactBTN.addEventListener('click', ()=> {
    content.innerHTML = ""
    homeBTN.classList.remove('active');
    menuBTN.classList.remove('active');
    contactBTN.classList.add('active');
    content.appendChild(contactTab());
});

menuBTN.addEventListener('click', ()=> {
    content.innerHTML = ""
    homeBTN.classList.remove('active');
    menuBTN.classList.add('active');
    contactBTN.classList.remove('active');
    content.appendChild(menuTab());
});