document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.opacity = '0.7';
    });
    link.addEventListener('mouseout', () => {
        link.style.opacity = '1';
    });
});
