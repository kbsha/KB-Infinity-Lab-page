document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.opacity = '0.7';
    });
    link.addEventListener('mouseout', () => {
        link.style.opacity = '1';
    });
});

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
