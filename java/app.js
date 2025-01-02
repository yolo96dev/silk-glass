document.addEventListener("DOMContentLoaded", () => {
    // Get all slides
    const slides = document.querySelectorAll(".slide");
    let currentSlideIndex = 0;
    const slideInterval = 5000; // 5 seconds

    // Function to change to the next set of images
    const changeSlide = () => {
        // Remove the 'active' class from all slides
        slides.forEach(slide => slide.classList.remove("active"));

        // Increment the slide index and loop back to the first one
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;

        // Add the 'active' class to the next slide
        slides[currentSlideIndex].classList.add("active");
    };

    // Start the slider with the changeSlide function every 5 seconds
    setInterval(changeSlide, slideInterval);

    // Initialize the first slide as active
    slides[currentSlideIndex].classList.add("active");
});
