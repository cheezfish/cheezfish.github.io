document.addEventListener('DOMContentLoaded', function() {

    // --- Scroll-triggered Animations ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });

    // --- Lightbox Gallery Initialization ---
    const galleryContainer = document.getElementById('lightgallery');
    if (galleryContainer) {
        lightGallery(galleryContainer, {
            speed: 500,
            download: false
        });
    }

});