let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slides img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carouselSlides = document.querySelector('.carousel-slides');

prevButton.addEventListener('click', () => {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    carouselSlides.style.transform = `translateX(-${slideIndex * 800}px)`;
});

nextButton.addEventListener('click', () => {
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    carouselSlides.style.transform = `translateX(-${slideIndex * 800}px)`;
});