/**
 * Main Javascript DOM interface for entire site
 * Owner: PGA
 * 
 */


// Import the Bootstrap bundle
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import { initializePopover } from "./popover.js";


document.addEventListener("DOMContentLoaded", function() {
  'use strict'
  /** 
   * SCRIPTS FOR SEPARATE PAGES
   * */ 
  initializePopover();



/**
 * CONSOLE MESSAGES
 */
  console.log('DOM fully loaded and scripts initialized');


});


