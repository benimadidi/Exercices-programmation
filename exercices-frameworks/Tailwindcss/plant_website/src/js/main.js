
/* ============================ Bouton de bascule ============================ */
const navMenu = document.getElementById('nav-menu'); 
const navLink = document.querySelectorAll('.nav-link');
const menuIcon = document.getElementById('menu-icon');

menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('left-[0]');
    menuIcon.classList.toggle('ri-close-large-line');
});

navLink.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('left-[0]');
        menuIcon.classList.remove('ri-close-large-line');
    });
}); 

/* ============================ Afficher btn du defilement vers le haut ============================ */
const scrollUp = () => {
    const scrollUpBtn = document.getElementById('scroll-up');

    if(this.scrollY >= 250){
        scrollUpBtn.classList.remove('-bottom-1/2');
        scrollUpBtn.classList.add('bottom-4');
    }
    else{
        scrollUpBtn.classList.remove('bottom-4');
        scrollUpBtn.classList.add('-bottom-1/2');
    }
};

window.addEventListener('scroll', scrollUp);

/* ============================ changer le bg du header ============================ */
const scrollHeader = () => {
    const header = document.getElementById('navbar');

    if(this.scrollY >= 50){
        header.classList.add('border-b', 'border-yellow-500');
    }
    else{
        header.classList.remove('border-b', 'border-yellow-500');
    }
};

window.addEventListener('scroll', scrollHeader);


/* ============================ swiper JS ============================ */
const swiper = new Swiper('.swiper', {
    // parametres optionnels
    speed: 400,
    spaceBetween: 30,
    autoplay: {
        delay:2000,
        disableOnInteraction : false
    },

    // si besoin de pagination
    pagination: {
    el: '.swiper-pagination',
    clickable: true
    },
    grabCursor: true,
    breakpoints:{
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }

});


/*

Swiper permet de créer des carrousels dynamiques et intuitifs sur une large gamme de plateformes, notamment les sites web, les applications mobiles et les plateformes de jeu en ligne.


Les paramètres de configuration sont les suivants :

- speed : vitesse de transition entre les slides
- spaceBetween : distance entre les slides
- grabCursor : permet de changer le curseur lorsqu'on survole les slides
- autoplay : paramètres d'automatisation
    delay : durée de l'automatisation
    disableOnInteraction : désactive l'automatisation lorsqu'on interagit avec les slides
- pagination : paramètres de pagination
    el : sélecteur de l'élément de pagination
    clickable : permet de cliquer sur les boutons de pagination
- grabCursor : permet de changer le curseur lorsqu'on survole les slides
- breakpoints : paramètres de responsive
    slidesPerView : nombre de slides à afficher 


*/

/* ============================ lien actif de la section de défilement ============================ */
const activeLink = () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 100; 
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav ul li a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

window.addEventListener('scroll', activeLink);

/* ============================ scroll reveal ============================ */
 const sr =ScrollReveal({
    origin: 'top',
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 300
});

sr.reveal('.home-data, .about-top, .popular-top, .review-top, review-leaf, .review-swiper, .about-leaf, .footer-icon, .footer-content, .copy-right');
sr.reveal('.home-img', {delay:500, scale:0.5});

sr.reveal('.service-card, .popular-card', {interval: 100});

sr.reveal('.about-leaf', {delay: 1000, origin: 'right'});
sr.reveal('.about-item-1-content, .about-item-2-img', {origin: 'right'});
sr.reveal('.about-item-2-content, .about-item-1-img', {origin: 'left'});

sr.reveal('.review-leaf, .footer-floral', {delay: 1000, origin: 'left'});