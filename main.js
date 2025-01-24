// Fetch data from Cloudflare Worker
fetch('https://frmgit-wrkwr.2916ae0f6a8f8ccdba724cb5.workers.dev')  // Replace with your Cloudflare worker URL
  .then(response => response.json())  // Parse the response as JSON
  .then(data => {
    console.log('Received data:', data);  // Check the data in the console
    if (data.status === 'success' && data.message) {
      console.log('Redirecting to URL:', data.message); // Verify the URL
      
      // Redirect to the URL using window.location.replace()
      window.location.replace(data.message);  // This should trigger the redirect
    } else {
      document.getElementById('message').textContent = 'Failed to fetch data or no URL provided.';
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
    document.getElementById('message').textContent = 'Error: Failed to load data.';
  });
