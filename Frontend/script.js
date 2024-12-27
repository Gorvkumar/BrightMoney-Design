
const accordionItems = document.querySelectorAll('.faq-item');

accordionItems.forEach(item => {
  const header = item.querySelector('.faq-header');

  header.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});



// Carousel JavaScript
const carousel = document.getElementById("carousel");
const items = document.querySelectorAll(".rating-item");
let index = 0;

const slideCarousel = () => {
  index++;
  if (index >= items.length) index = 0;
  const offset = index * -100; // Each item takes 100% of the width
  carousel.style.transform = `translateX(${offset}%)`;
};

// Check viewport width and start sliding for mobile
const startCarousel = () => {
  if (window.innerWidth >= 220 && window.innerWidth <= 768) {
    setInterval(slideCarousel, 3000); // Slide every 3 seconds
  }
};

window.addEventListener("load", startCarousel);
