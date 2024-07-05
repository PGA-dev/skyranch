/**
 * Main Javascript for entire site
 * Owner: PGA
 * 
 */


// Import the Bootstrap bundle
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import { initializePopover } from "./popover.js";

//NEST
document.addEventListener("DOMContentLoaded", function() {
  'use strict'
  initializePopover();
  console.log('DOM fully loaded and scripts initialized');






//end of Callback nest for DomContentloaded
});


