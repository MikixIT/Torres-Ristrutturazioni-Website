const hamburgerbtn = document.getElementById('hamburgerbtn');
const navbar = document.getElementById('navbar')

hamburgerbtn.addEventListener('click', () => {
    navbar.classList.toggle('open');
});



