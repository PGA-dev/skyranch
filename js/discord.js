  /**
   * DISCORD
   * 
   */
  
  const discord = document.getElementById('discordInviteBtn'); 
  discord.addEventListener('click', function(e) {
    e.preventDefault(); 
    window.open('https://discord.gg/PVtH2RBY', '_blank');
  });


/**
 * DISCORD
 * DISCORD FOR SERVER USE WITH JSON/EXPRESS
 */

//   document.getElementById('disCrdEXAMPLE').addEventListener('click', function() {
//     fetch('/get-discord-invite')
//     .then(response => response.json())
//     .then(data => {
//         if(data.url) {
//             window.location.href = data.url; // Redirect user to Discord invite link
//         } else {
//             alert('Failed to retrieve Discord invite. Please try again later.');
//         }
//     })
//     .catch(error => {
//         console.error('Error fetching Discord invite:', error);
//         alert('An error occurred. Please try again later.');
//     });
// });