


const slides = document.querySelectorAll('.slide');
const prevArrow = document.querySelector('.prev');
const nextArrow = document.querySelector('.next');
let currentSlide = 0;

// Set initial slide to active
slides[currentSlide].classList.add('active');

// Handle arrow key presses
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'PageUp') {
    prevSlide();
  } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === 'PageDown') {
    nextSlide();
  }
});

// Handle prev arrow click
prevArrow.addEventListener('click', () => {
  prevSlide();
});

// Handle next arrow click
nextArrow.addEventListener('click', () => {
  nextSlide();
});

// Change slide to previous slide
function prevSlide() {
  if (currentSlide === 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide--;
  }
  setActiveSlide();
}

// Change slide to next slide
function nextSlide() {
  if (currentSlide === slides.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  setActiveSlide();
}

// Set active slide
function setActiveSlide() {
  // Remove active class from all slides
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  // Add active class to current slide
  slides[currentSlide].classList.add('active');
}

// Preload images for smoother transitions
function preloadImages() {
  for (let i = 0; i < slides.length; i++) {
    new Image().src = slides[i].style.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2').split(',')[0];
  }
}



// Get the current slide index
let currentSlideIndex = 0;

// Add event listeners for arrow keys and page up/page down
window.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowDown' || e.key === 'PageDown') {
    e.preventDefault();
    // Move to the next slide
    currentSlideIndex++;
    scrollToSlide(currentSlideIndex);
  } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
    e.preventDefault();
    // Move to the previous slide
    currentSlideIndex--;
    scrollToSlide(currentSlideIndex);
  }
});

// Function to scroll to a slide
function scrollToSlide(index) {
  const slides = document.querySelectorAll('.slide');
  // Make sure the index is within the bounds of the slides
  if (index < 0) {
    index = 0;
  } else if (index > slides.length - 1) {
    index = slides.length - 1;
  }
  const targetSlide = slides[index];
  targetSlide.scrollIntoView({ behavior: 'smooth' });
}
/*
// Add event listeners to each menu item
const menuItems = document.querySelectorAll('nav ul li a');
menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    const targetSlide = document.querySelector(this.getAttribute('href'));
    targetSlide.scrollIntoView({ behavior: 'smooth' });
  });
});

*/

const overlayMenu = document.querySelector('.overlay-menu');
const toggleButton = document.querySelector('.toggle-button');

toggleButton.addEventListener('click', function() {
  overlayMenu.classList.toggle('active');
});