addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  // Check the User-Agent to detect bots
  const userAgent = request.headers.get('User-Agent');
  const botUserAgents = ['Googlebot', 'Bingbot', 'Slurp'];

  if (botUserAgents.some(bot => userAgent.includes(bot))) {
    return Response.redirect('https://www.google.com', 302);  // Redirect bots
  }

  // Return JSON for non-bots
  const jsonResponse = {
    status: 'success',
    message: 'Data from Cloudflare Worker'
  };
  return new Response(JSON.stringify(jsonResponse), {
    headers: { 'Content-Type': 'application/json' }
  });
}
