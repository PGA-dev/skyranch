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


//module.exports = {}
