const heroImage = document.querySelector('.hero-image');
const minZoom = 1;
const maxZoom = 2;

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const vh = window.innerHeight / 100;
    const start = 0 * vh;
    const stop = 50 * vh;
    
    if (scrollTop > start && scrollTop < stop) {
        const scale = Math.max(2.2 - (scrollTop - start) / 500, 1);
        heroImage.style.transform = `scale(${scale})`;
    }
});
