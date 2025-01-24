// main.js

// Function to fetch data from the Cloudflare Worker
function fetchWorkerData() {
  const workerUrl = 'https://your-cloudflare-worker-url.workers.dev';  // Replace with your actual Cloudflare Worker URL

  fetch(workerUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      return response.json();
    })
    .then(data => {
      if (data.status === 'success') {
        // Update the DOM with success message
        document.getElementById('message').textContent = `Success: ${data.message}`;
      } else {
        // Update the DOM with failure message
        document.getElementById('message').textContent = `Failed: ${data.message}`;
      }
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      document.getElementById('message').textContent = 'Error fetching data.';
    });
}

// Fetch data when the page loads
window.onload = fetchWorkerData;
