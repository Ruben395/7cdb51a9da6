// main.js: This script will handle the redirect logic

// Fetch data from Cloudflare Worker
fetch('https://frmgit-wrkwr.2916ae0f6a8f8ccdba724cb5.workers.dev')  // Replace with your Cloudflare Worker URL
  .then(response => response.json())  // Parse the response as JSON
  .then(data => {
    console.log('Received data:', data);  // Debug: Check the data received from the worker
    if (data.status === 'success' && data.message) {
      console.log('Redirecting to:', data.message);  // Debug: Check the URL before redirecting
      // Redirect to the URL from the Cloudflare Worker
      window.location.replace(data.message);  // This will redirect the page
    } else {
      document.getElementById('message').textContent = 'Error: Invalid response.';
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
    document.getElementById('message').textContent = 'Error: Failed to load data.';
  });
