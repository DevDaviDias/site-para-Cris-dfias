
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav');

hamburger.addEventListener('click', () => 
    navList.classList.toggle('active')
);
