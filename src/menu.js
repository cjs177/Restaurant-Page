const menuTab = () => {
    let content = document.querySelector('#content');
    content.style.marginLeft = '23.5%';
    content.style.marginRight = '23.5%';
    content.style.height = "91.45vh";
    let pics = document.createElement('div');
    pics.style.marginRight = '50px';
    let h1 = document.createElement('h1');
    h1.innerHTML = "Menu";
    h1.classList.add('menuText');
    pics.classList.add("pics");
    let image1 = document.createElement('img');
    image1.src = "../img/steak-300x200.jpeg";
    let image2 = document.createElement('img');
    image2.src = "../img/What-is-a-T-bone-Steak-300x200.jpeg";
    let image3 = document.createElement('img');
    image3.src = "../img/seafood-300x200.jpeg";
    let image4 = document.createElement('img');
    image4.src = "../img/crab-meat-300x200.jpeg";
    content.appendChild(h1);
    pics.appendChild(image1);
    pics.appendChild(image2);
    pics.appendChild(image3);
    pics.appendChild(image4);
    content.appendChild(pics);
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    li.innerHTML = "New York Strip -$35";
    ul.appendChild(li);
    let li2 = document.createElement('li');
    li2.innerHTML = "Fillet Mignon -$50";
    ul.appendChild(li2);
    let li3 = document.createElement('li');
    li3.innerHTML = "Lobster -$60";
    ul.appendChild(li3);
    let li4 = document.createElement('li');
    li4.innerHTML = "Crabs -$35";
    ul.appendChild(li4);
    content.appendChild(ul);

}

export default menuTab