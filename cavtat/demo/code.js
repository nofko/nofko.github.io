const processbar = document.querySelector('.progress');

const presentr = new Presentr({
    slides: '.presentr .slides > section'
}).on('action', () => {
    processbar.style.width = `${(100 * (presentr.slideIndex / presentr.totalSlides))}vw`;
});


window.addEventListener('load', () => {
    setTimeout(() => {
        const hash = window.location.hash.slice(1);

        console.log("final hash:", hash);

        const num = Number(hash);

        if (!isNaN(num)) {
            presentr.jumpSlide(num - 1);
        }
    }, 50);
});

const slides = document.querySelectorAll('.slides > section');

slides.forEach((slide, index) => {
    const footer = slide.querySelector('.footer');

    if (footer) {
        footer.innerHTML += `
            <span class="slide-number">
                ${index + 1} / ${slides.length}
            </span>
        `;
    }
});
