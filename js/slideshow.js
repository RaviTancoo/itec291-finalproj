    const testimonials = document.querySelectorAll('.testimonial');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.toggle('active', i === index);
        });
    }

    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        nextTestimonial();
    });

    const autoplayInterval = 7000; 
    setInterval(nextTestimonial, autoplayInterval);

    showTestimonial(currentIndex);
