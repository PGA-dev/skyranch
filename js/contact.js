// FORM

// Example starter JavaScript for disabling form submissions if there are invalid fields
document.addEventListener('DOMContentLoaded', function(){
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

    const discord = document.getElementById('discordInviteBtn'); 
    discord.addEventListener('click', function(e) {
      e.preventDefault(); 
      window.open('https://discord.gg/PVtH2RBY', '_blank');
    });


})

  // FORM
// function handleFormSubmission(event) {
//     const form = event.target.closest('form');
  
//     if (form.checkValidity()) {
//         // Get form data
//         const formData = new FormData(form);
  
//         // Convert formData to object
//         const formDataObject = {};
//         formData.forEach((value, key) => {
//             formDataObject[key] = value;
//         });
  
//         // Fetch for email handler
//         fetch('https://clan.com/email-handler', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(formDataObject)
//         })
//         .then(response => {
//             if (response.ok) {
//                 console.log('Form data submitted successfully');
//                 // You can optionally redirect the user to a thank you page or show a success message
//             } else {
//                 console.error('Error submitting form data');
//                 // Handle error
//             }
//         })
//         .catch(error => {
//             console.error('Error submitting form data:', error);
//             // Handle error
//         });
//     }
  
//     form.classList.add('was-validated'); // Add 'was-validated' class to show validation feedback
  
//     event.preventDefault(); // Prevent default form submission
//     event.stopPropagation(); // Stop event propagation
//   }
  
//   // Add form submission event listener to the submit button
//   const submitButton = document.querySelector('.btn-primary');
//   submitButton.addEventListener('click', handleFormSubmission);
  
  
  