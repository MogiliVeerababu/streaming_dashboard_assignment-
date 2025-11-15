const BASE = "https://api.themoviedb.org/3";
const KEY = process.env.TMDB_API_KEY;

// More stable fetch with retry logic for Windows + Next.js dev mode
async function fetchJson(url: string) {
  let lastError;

  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(url); // removed { next: { revalidate } }

      if (!res.ok) {
        const txt = await res.text().catch(() => "no body");
        throw new Error(`TMDB error ${res.status}: ${txt}`);
      }

      return res.json();
    } catch (err) {
      lastError = err;
      console.warn(`Fetch failed (attempt ${attempt}/3). Retrying...`, err);
      await new Promise((r) => setTimeout(r, 300));
    }
  }

  throw new Error("TMDB fetch failed after 3 retries: " + lastError);
}

export async function fetchTrending() {
  return fetchJson(`${BASE}/trending/movie/week?api_key=${KEY}`);
}

export async function fetchPopular() {
  return fetchJson(`${BASE}/movie/popular?api_key=${KEY}`);
}

export async function fetchMovieById(id: string) {
  return fetchJson(`${BASE}/movie/${id}?api_key=${KEY}`);
}

export function imageUrl(path: string | null | undefined, size = "w500") {
  if (!path) return "/placeholder.jpg";
  return `https://image.tmdb.org/t/p/${size}${path}`;
}
