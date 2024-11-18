// Scroll-to-top button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.innerText = "Top";
scrollToTopButton.style.position = 'fixed';
scrollToTopButton.style.bottom = '20px';
scrollToTopButton.style.right = '20px';
scrollToTopButton.style.display = 'none';
document.body.appendChild(scrollToTopButton);

window.onscroll = function () {
    scrollToTopButton.style.display = window.scrollY > 100 ? 'block' : 'none';
};

scrollToTopButton.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
let slideIndex = 0;
showSlide(slideIndex);

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    let slides = document.getElementsByClassName("project-slide");
    
    // Wrap around to the first slide
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;
    
    // Hide all slides initially
    for (let slide of slides) {
        slide.style.display = "none";
    }
    
    // Display the current slide
    slides[slideIndex].style.display = "block";
}
// Initialize an index for each project’s image carousel
const imageIndexes = [0, 0];  // Each project can have its own image index

// Function to show the next image in the carousel
function nextImage(projectIndex) {
    const container = document.querySelectorAll('.slide-container')[projectIndex];
    const images = container.querySelectorAll('.project-slide');
    
    // Hide current image
    images[imageIndexes[projectIndex]].style.display = 'none';
    // Move to next image
    imageIndexes[projectIndex] = (imageIndexes[projectIndex] + 1) % images.length;
    // Display next image
    images[imageIndexes[projectIndex]].style.display = 'block';
}

// Function to show the previous image in the carousel
function previousImage(projectIndex) {
    const container = document.querySelectorAll('.slide-container')[projectIndex];
    const images = container.querySelectorAll('.project-slide');
    
    // Hide current image
    images[imageIndexes[projectIndex]].style.display = 'none';
    // Move to previous image
    imageIndexes[projectIndex] = (imageIndexes[projectIndex] - 1 + images.length) % images.length;
    // Display previous image
    images[imageIndexes[projectIndex]].style.display = 'block';
}
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});
