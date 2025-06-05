
/*---------------------------------------------------------*/
/*Menu burger*/
let burger = document.querySelector('#burger-icon')
let navbar = document.querySelector('.navbar');

burger.addEventListener('click', () => {
    burger.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

/*---------------------------------------------------------*/
/*Fermer le menu burger au scroll*/
window.addEventListener('scroll', () =>{
    burger.classList.remove('bx-x');
    navbar.classList.remove('active');
});

