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

//catch a parent div class and selec all specific items
const artClass = document.querySelector('.artClass').querySelectorAll('a.text-uppercase.tm-color-primary.tm-font-semibold');
console.log(artClass);
for (const singleArtClass of artClass) {
    singleArtClass.style.fontSize = '20px';
}