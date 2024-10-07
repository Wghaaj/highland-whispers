document.addEventListener("DOMContentLoaded", () => {
    const img = document.querySelector('.img img');

    const observerOptions = {
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); 
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    observer.observe(img); 
});