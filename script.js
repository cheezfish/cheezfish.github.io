$(document).ready(function(){
    $('.boxbox').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        pauseOnHover: true,
    });
  });

//and a thing to make the contact form fuck off

var button = document.getElementById('contact'); // Assumes element with id='button'

button.onclick = function() {
    var div = document.getElementById('contact-form');
    if (div.style.display !== 'block') {
        div.style.display = 'block';
    }
    else {
        div.style.display = 'none';
    }

};

var granimInstance = new Granim({
    element: '#canvas-image-blending',
    direction: 'radial',
    isPausedWhenNotInView: true,
    image : {
        source: '/profile/ppACTUAL.png',
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
            transitionSpeed: 7000
        }
    }
});