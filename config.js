// Cloudflare Worker (public, CORS-friendly)
window.CLOUDFLARE_WORKER_URL = 'https://ccc-l1.lady-qwickske.workers.dev/';

// Frontend should call the worker to avoid GAS CORS restrictions.
window.GAS_WEB_APP_URL = window.CLOUDFLARE_WORKER_URL;
