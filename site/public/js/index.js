let currentIndex = 0;

function nextSlide() {
    const slides = document.querySelectorAll('.carousel-content .slide');
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
}

function prevSlide() {
    const slides = document.querySelectorAll('.carousel-content .slide');
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
}

function updateCarousel() {
    const carouselContent = document.querySelector('.carousel-content');
    const slideWidth = carouselContent.offsetWidth; 
    carouselContent.style.transform = `translateX(${-currentIndex * slideWidth}px)`;


    const indicators = document.querySelectorAll('.slide-indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.remove('active');
        if (index === currentIndex) {
            indicator.classList.add('active');
        }
    });
}


document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-content .slide');
    const slideIndicatorsContainer = document.querySelector('.slide-indicators');
    slides.forEach((slide, index) => {
        const indicator = document.createElement('span');
        indicator.classList.add('slide-indicator');
        if (index === 0) {
            indicator.classList.add('active');
        }
        indicator.onclick = () => {
            currentIndex = index;
            updateCarousel();
        };
        slideIndicatorsContainer.appendChild(indicator);
    });
    

    window.addEventListener('resize', () => {
        updateCarousel();
    });


    setTimeout(() => {
        updateCarousel();
    }, 0);
});