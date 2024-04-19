// Selecionar elementos
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const navList = nav.querySelector('.nav-list'); // Atualização: encontrar .nav-list dentro de .nav
const navLinks = navList.querySelectorAll('a'); // Atualização: selecionar todos os links dentro de .nav-list

// Adicionar evento de clique ao botão hamburger
hamburger.addEventListener('click', () => {
    // Alternar a classe 'active' em nav
    nav.classList.toggle('active');
});

// Adicionar evento de clique a cada link na lista de navegação
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remover a classe 'active' de nav para fechar o menu
        nav.classList.remove('active');
    });
});
