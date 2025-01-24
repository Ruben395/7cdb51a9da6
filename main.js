// Fetch data from Cloudflare Worker
fetch('https://frmgit-wrkwr.2916ae0f6a8f8ccdba724cb5.workers.dev')
  .then(response => response.json())  // Parse the response as JSON
  .then(data => {
    if (data.status === 'success' && data.message) {
      // If the response is successful and contains a URL in message, redirect to the URL
      window.location.replace(data.message);  // Use window.location.replace() for redirection
    } else {
      // Handle failure case (show an error message or something else)
      document.getElementById('message').textContent = 'Failed to fetch data. Please try again.';
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
    document.getElementById('message').textContent = 'Error: Failed to load data.';
  });
