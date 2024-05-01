// Import the Bootstrap bundle
//
// This includes Popper and all of Bootstrap's JS plugins.

import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";


//
// Place any custom JS here
//
// const myCarouselElement = document.querySelector('#fadeCarousel')

// const carousel = new bootstrap.Carousel(myCarouselElement, {
//   interval: 2000,
//   touch: false
// })

// document.querySelectorAll('[data-bs-slide]')
// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new bootstrap.Popover(popover)
  })
