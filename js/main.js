// Import the Bootstrap bundle
//
// This includes Popper and all of Bootstrap's JS plugins.

//import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

//
// CAROUSEL
document.addEventListener("DOMContentLoaded", function() {
  // Function to go to a specific slide
  function goToSlide(carouselId, slideIndex) {
      let carouselInner = document.querySelector(carouselId + ' .carousel-inner');
      let slides = carouselInner.querySelectorAll('.carousel-item');
      let indicators = document.querySelectorAll(carouselId + ' .carousel-indicators [data-bs-slide-to]');

      if (slideIndex < 0 || slideIndex >= slides.length) {
          return; // Out of bounds
      }

      // Remove active class from all slides and indicators
      slides.forEach(slide => {
          slide.classList.remove('active');
      });
      indicators.forEach(indicator => {
          indicator.classList.remove('active');
          indicator.setAttribute('aria-current', 'false');
      });

      // Set active class to the current slide and indicator
      slides[slideIndex].classList.add('active');
      indicators[slideIndex].classList.add('active');
      indicators[slideIndex].setAttribute('aria-current', 'true');
  }

  // Event listeners for indicators
  let indicators = document.querySelectorAll('#carouselSrIndicators .carousel-indicators [data-bs-slide-to]');
  indicators.forEach(function(indicator) {
      indicator.addEventListener('click', function() {
          let slideIndex = parseInt(indicator.getAttribute('data-bs-slide-to'));
          goToSlide('#carouselSrIndicators', slideIndex);
      });
  });

  // Event listeners for next/previous buttons
  let nextButton = document.querySelector('#carouselSrIndicators .carousel-control-next');
  let prevButton = document.querySelector('#carouselSrIndicators .carousel-control-prev');
  nextButton.addEventListener('click', function() {
      let currentSlide = document.querySelector('#carouselSrIndicators .carousel-inner .active');
      let slides = document.querySelectorAll('#carouselSrIndicators .carousel-item');
      let nextSlideIndex = Array.from(slides).indexOf(currentSlide) + 1;
      if (nextSlideIndex >= slides.length) nextSlideIndex = 0; // Wrap around to first slide
      goToSlide('#carouselSrIndicators', nextSlideIndex);
  });

  prevButton.addEventListener('click', function() {
      let currentSlide = document.querySelector('#carouselSrIndicators .carousel-inner .active');
      let slides = document.querySelectorAll('#carouselSrIndicators .carousel-item');
      let prevSlideIndex = Array.from(slides).indexOf(currentSlide) - 1;
      if (prevSlideIndex < 0) prevSlideIndex = slides.length - 1; // Wrap around to last slide
      goToSlide('#carouselSrIndicators', prevSlideIndex);
  });
});

// var myCarousel = document.querySelector('#carouselSrIndicators');
// var carousel = new bootstrap.Carousel(myCarousel);

//POPOVER
// document.querySelectorAll('[data-bs-toggle="popover"]')
//   .forEach(popover => {
//     new bootstrap.Popover(popover)
//   })


document.addEventListener('DOMContentLoaded', function () {
    var popoverTrigger = document.getElementById('popoverButton');
    var popover = new bootstrap.Popover(popoverTrigger, {
      title: 'Leader',
      content: 'Loading content...',
      html: true
    });
  
    popoverTrigger.addEventListener('click', function () {
      // Fetch the external HTML page
      fetch('players.html')
        .then(response => response.text())
        .then(html => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, "text/html");
          // Assume the table has an ID or a unique class for easy selection
          const row = doc.querySelector('table#players tr:nth-child(2)');
  //WE NEED TO UPDATE THIS TO GRAB THE RIGHT VERSION, PLUS THE ROW HEADING AS THIS IS THE PLAYERS ID
          // Select only the first two <td> elements from this row
          const cells = row.querySelectorAll('td:nth-child(-n+2)');
          let filteredRowContent = '';
          cells.forEach(cell => {
            filteredRowContent += cell.outerHTML + ' ';
          });
  
          // Set the content of the popover
          popover.setContent({
            '.popover-body': filteredRowContent
          });
        })
        .catch(error => console.error('Error loading the table row:', error));
    });
  });


