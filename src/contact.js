const contactTab = () => {
    let content = document.querySelector('#content');
    content.innerHTML = "";
    content.style.marginLeft = '25%';
    content.style.marginRight = '25%';
    content.style.height = "91.5vh";

    let h1 = document.createElement('h1');
    h1.innerHTML = "Contact Us"
    h1.style.fontSize = "2.5rem";
    h1.style.marginTop = '7%';
    let address = document.createElement('p');
    let addressHead = document.createElement('h3');
    let phone = document.createElement('p');
    let phoneHead = document.createElement('h3');
    addressHead.innerHTML = "Address:";
    addressHead.style.marginTop = '3%';
    addressHead.style.fontSize = "2rem";
    address.innerHTML = "123 ABC Street";
    address.style.fontSize = "1.5rem";
    phoneHead.innerHTML = "Phone:";
    phoneHead.style.fontSize = "2rem";
    phoneHead.style.marginTop = '3%';
    phone.innerHTML = "555-555-5555";
    phone.style.fontSize = "1.5rem";
    content.appendChild(h1);
    content.appendChild(addressHead);
    content.appendChild(address);
    content.appendChild(phoneHead);
    content.appendChild(phone);

}

export default contactTab