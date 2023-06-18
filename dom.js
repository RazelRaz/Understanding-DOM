const loremId = document.getElementById('loremId');
loremId.textContent = 'DOM is handling Me.';
loremId.style.color = 'red';
loremId.style.fontWeight = 'bold';
loremId.style.fontSize = '24px';

// nav-item
const navItems = document.getElementsByClassName('nav-item');
for (const navItem of navItems) {
    navItem.style.backgroundColor = "red"
}

const myForm = document.getElementsByTagName('form');
console.log(myForm);

//it will catch first a tag of this page
const firstA = document.querySelector('a');
firstA.style.color ='green';

//it will catch All a tag of this page
const allA = document.querySelectorAll('a');
console.log(allA);


const specificA =  document.querySelector('.nav-item:last-child a');
console.log(specificA);
specificA.style.color = 'green';

//catch all last child items
const specificAs = document.querySelectorAll('li:last-child a');
for (const singleSpecificA of specificAs) {
    singleSpecificA.style.backgroundColor = 'black'
}

//DOM travarsal
//catch a parent div class and selec all specific items - not recommended
const artClass = document.querySelector('.artClass').querySelectorAll('a.text-uppercase.tm-color-primary.tm-font-semibold');
console.log(artClass);
for (const singleArtClass of artClass) {
    singleArtClass.style.fontSize = '20px';
}

// parent item to children item
const childNavitem = document.querySelector('.nav-item');
console.log(childNavitem.parentElement);
console.log(childNavitem.parentElement.children);

// create a div
const divElement = document.createElement('div');
divElement.className = 'hero_area';
divElement.style.color = 'red'
divElement.setAttribute('title', 'red div')
console.log(divElement);

//select a section
const tmSsection2 = document.querySelector('.tm-section-2');
tmSsection2.appendChild(divElement);

const nwLi = document.createElement('li');
console.log(nwLi);
nwLi.className = 'nav-item';
nwLi.style.background = 'white';
nwLi.innerHTML = 'hello'

const catchMAinmenu = document.querySelector('ul.navbar-nav.ml-auto');
catchMAinmenu.appendChild(nwLi);

// dom event

const fButton = document.querySelector('a.tm-color-white.tm-btn-white-bordered');
console.log(fButton);
fButton.addEventListener('click', (e) => {
    console.log('im first button');
    alert('You click the button')
})

const contact_name = document.getElementById('contact_name');
console.log(contact_name);
contact_name.addEventListener('keypress', () => {
    alert('Hi im from DOM. Please DOnt Write anyting')
})

const contact_email = document.getElementById('contact_email');
contact_email.addEventListener('blur', () => {
    alert('Hi Im DOM. DOnt be shy, write someting')
})