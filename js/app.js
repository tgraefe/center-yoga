window.addEventListener('load', function() {
    var dots = document.getElementsByClassName('dot');
    var next = document.getElementsByClassName('next');
    var prev = document.getElementsByClassName('prev');

    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener('click', function(e) {
            for (let j = 0; j < e.target.classList.length; j++) {
                if (e.target.classList[j].includes('img')) {
                    var imageNumber = Number(e.target.classList[j].slice(3, e.target.classList[j].length));
                    currentSlide(imageNumber);
                }
            }
        });
    }

    next[0].addEventListener('click', function(e) {
        plusSlides(1);
    });

    prev[0].addEventListener('click', function(e) {
        plusSlides(-1);
    });

    var slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
        showSlides((slideIndex += n));
    }

    // Thumbnail image controls
    function currentSlide(n) {
        showSlides((slideIndex = n));
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName('mySlides');
        var dots = document.getElementsByClassName('dot');
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(' active', '');
        }
        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].className += ' active';
    }
});
