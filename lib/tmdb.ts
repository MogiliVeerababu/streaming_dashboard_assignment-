const BASE = "https://api.themoviedb.org/3";
const KEY = process.env.TMDB_API_KEY;

async function fetchJson(url: string) {
  const res = await fetch(url, { next: { revalidate: 60 * 10 } });
  if (!res.ok) {
    const txt = await res.text().catch(() => "no body");
    throw new Error(`TMDB error ${res.status}: ${txt}`);
  }
  return res.json();
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
