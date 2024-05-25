/**
 * Main Javascript for entire site
 * Owner: PGA
 * 
 */


// Import the Bootstrap bundle
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";


//NEST
document.addEventListener("DOMContentLoaded", function() {
  'use strict'

// CAROUSEL  
  // Function to go to a specific slide
  function goToSlide(carouselId, slideIndex) {
      let carouselInner = document.querySelector(carouselId + ' .carousel-inner');
      let slides = carouselInner.querySelectorAll('.carousel-item');
      let indicators = document.querySelectorAll(carouselId + ' .carousel-indicators [data-bs-slide-to]');

      if (slideIndex < 0 || slideIndex >= slides.length) {
          return; // If Out of bounds 
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

//POPOVER

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

     // Fetch the headers from the table
     const headers = Array.from(doc.querySelectorAll('table#players th')).map(th => th.textContent.trim());

     // Select the first row (leader) from the table #players
     const row = doc.querySelector('table#players tr#leader:first-child');
    //Inside the selected row grab a NodeList of all td items
     const cells = row.querySelectorAll('td');

     let content = '<div>';
     cells.forEach((cell, index) => {
       // Only include headings and cells for which there are both headers and data
       if (headers[index]) {
         content += `<h6>${headers[index]}</h6>${cell.outerHTML} <br><br>`;
       }
     });
     content += '</div>';

      popover.setContent({
        '.popover-body': content
      });
    })
    .catch(error => console.error('Error loading the table row:', error));
});

// FORM

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()


//end of Callback nest for DomContentloaded
});


