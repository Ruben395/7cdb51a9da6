// Fetch data from Cloudflare Worker
fetch('https://frmgit-wrkwr.2916ae0f6a8f8ccdba724cb5.workers.dev')
  .then(response => response.json())
  .then(data => {
    if (data.status === 'success') {
      // If the status is success, redirect the user to the provided URL
      window.location.href = data.message; // This will load the success URL
    } else {
      // Handle failure case (show an error message or something else)
      document.getElementById('message').textContent = 'Failed to fetch data. Please try again.';
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
    document.getElementById('message').textContent = 'Error: Failed to load data.';
  });
