let currentSlide = 0;
let slideInterval;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');


window.onload = function () {
    showSlide(currentSlide);
    slideInterval = setInterval(nextSlide, 4000);
};


function showSlide(n) {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${n * 100}%)`;
        dots[index].classList.remove('active');
    });
    dots[n].classList.add('active');
    currentSlide = n;
}


function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}


function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}


function setSlide(n) {
    clearInterval(slideInterval);
    showSlide(n);
    slideInterval = setInterval(nextSlide, 8000); 
}

const sliderContainer = document.querySelector('.slider-container');
sliderContainer.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});
sliderContainer.addEventListener('mouseleave', () => {
    slideInterval = setInterval(nextSlide, 8000);
});
