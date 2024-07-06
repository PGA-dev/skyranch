/**
 * Main Javascript DOM interface for INDEX
 * Owner: PGA
 * APPROACH LOADS ALL SCRIPTS FOR ONLY INDEX PAGE -- SEE OTHER FOLDERS FOR EACH PAGE
 */


// Import the Bootstrap bundle
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import { initializePopover } from "./popover.js";
import { carouselLoader } from "./carousel.js";

document.addEventListener("DOMContentLoaded", function() {
  'use strict'
  /** 
   * SCRIPTS FOR SEPARATE FUNCTION IMPORTS FOR INDEX
   * */ 
  initializePopover();
  carouselLoader();


/**
 * CONSOLE MESSAGES
 */
  console.log('DOM fully loaded and scripts initialized');


});


