$(document).ready(function(){
    // MODIFIED: Target all three carousel classes with the same settings
    $('.boxbox, .clients-carousel, .past-projects-carousel').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        dots: false, // No navigation dots
        pauseOnHover: true,
        pauseOnFocus: true,
        infinite: true,
        speed: 800,
        cssEase: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        adaptiveHeight: false,
        variableWidth: true,
        centerMode: true, // MODIFIED: Center items by default
        centerPadding: '40px', // Adds padding for center mode
        swipeToSlide: true,
        touchThreshold: 10,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    speed: 600,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    centerMode: true,
                    centerPadding: '20px',
                    arrows: false,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 400,
                    centerMode: true,
                    centerPadding: '15px',
                    arrows: false,
                    dots: false,
                    autoplaySpeed: 5000
                }
            }
        ]
    });

    // Pause autoplay when user interacts
    $('.boxbox, .clients-carousel, .past-projects-carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        // Optional: Add smooth fade effect or other transitions here
    });

    // Resume autoplay after interaction ends
    $('.boxbox, .clients-carousel, .past-projects-carousel').on('afterChange', function(event, slick, currentSlide) {
        // Optional: Analytics tracking or other callbacks
    });
});

// Contact form toggle with smooth animation
var button = document.getElementById('contact');

button.onclick = function() {
    var div = document.getElementById('contact-form');
    
    // Add smooth slide animation
    if (div.style.display !== 'block') {
        div.style.display = 'block';
        div.style.opacity = '0';
        div.style.transform = 'translateY(-20px)';
        
        // Trigger animation
        setTimeout(function() {
            div.style.transition = 'all 0.3s ease-in-out';
            div.style.opacity = '1';
            div.style.transform = 'translateY(0)';
        }, 10);
        
        // Update button text
        button.textContent = 'Hide Contact Form';
        
        // Smooth scroll to form
        div.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }
    else {
        div.style.transition = 'all 0.3s ease-in-out';
        div.style.opacity = '0';
        div.style.transform = 'translateY(-20px)';
        
        setTimeout(function() {
            div.style.display = 'none';
        }, 300);
        
        // Update button text
        button.textContent = 'Contact Me';
    }
};

// Improved Granim with better performance
var granimInstance = new Granim({
    element: '#canvas-image-blending',
    direction: 'radial',
    isPausedWhenNotInView: true,
    image : {
        source: '/profile/pptesty.png',
        blendingMode: 'destination-atop',
    },
    states : {
        "default-state": {
            gradients: [
                ['#000000', '#1EAEDB'],
                ['#000000', '#9412A5'],
                ['#000000', '#1E6AE1'],
                ['#000000', '#1EAEDB']
            ],
            transitionSpeed: 8000 // Slightly slower for smoother effect
        }
    },
    onGradientChange: function(colorDetails) {
        // Optional: Reduce frequency of updates on mobile for better performance
        if (window.innerWidth <= 768) {
            // Throttle updates on mobile
        }
    }
});

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation for better perceived performance
window.addEventListener('load', function() {
    // Add fade-in animation to main content
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    
    setTimeout(function() {
        document.body.style.opacity = '1';
    }, 100);
});