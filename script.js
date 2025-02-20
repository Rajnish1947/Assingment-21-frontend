// GSAP animation for smoother interactions
gsap.from(".hero-content", { opacity: 0, duration: 2, delay: 0.5, y: 50 });
gsap.from(".hero-title", { opacity: 0, duration: 1.5, delay: 0.5, x: -100 });
gsap.from(".hero-subtitle", { opacity: 0, duration: 1.5, delay: 1, y: 100 });

// Mouse movement effect (parallax effect)
document.addEventListener('mousemove', (e) => {
    const hero = document.querySelector('.hero');
    const x = (e.clientX / window.innerWidth) * 30;
    const y = (e.clientY / window.innerHeight) * 30;
    hero.style.transform = `translate(-${x}px, -${y}px)`;
});
