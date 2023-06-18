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

//it will catch first a of this page
const firstA = document.querySelector('a');
firstA.style.color ='green';