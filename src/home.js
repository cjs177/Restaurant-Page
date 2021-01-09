const homeTab = () => {
    let content = document.querySelector('#content');
    let image = document.createElement('img');
    image.classList.add('homeImage');
    image.src = "../img/dining.jpeg";
    image.style.marginTop = "3%";
    content.innerHTML = ""
    content.style.marginLeft = '24%';
    content.style.marginRight = '24%';
    let h1 = document.createElement('h1');
    h1.style.margin = "5px";
    h1.innerHTML = "Eat at our resturant";
    let p = document.createElement('p');
    p.innerHTML = "Our resturant only has the finest foods. Only the best steaks, seafood, and desserts for our customers. Our five star restuant is run by the most famous chef in the country and people travel across the world to taste their food. Be sure to make a reservation today and to partake in our fine dining experience."
    p.style.fontSize = '1.5rem';
    p.style.margin = "3%";
    content.appendChild(image);
    content.appendChild(h1);
    content.appendChild(p);
}

export default homeTab