import HeroBanner from "./components/HeroBanner";
import MovieRow from "./components/MovieRow";
import { fetchPopular, fetchTrending } from "../lib/tmdb";

export default async function HomePage() {
  // Fetch data
  const trendingData = await fetchTrending();
  const popularData = await fetchPopular();

  // Safe checks (if API fails, avoid crashes)
  const trending = trendingData?.results ?? [];
  const popular = popularData?.results ?? [];

  return (
    <main className="pt-20">

      {/* Show HeroBanner only if trending[0] exists */}
      {trending[0] && <HeroBanner movie={trending[0]} />}

      {/* Movie rows */}
      <MovieRow title="Trending Now" movies={trending} />
      <MovieRow title="Popular Movies" movies={popular} />

    </main>
  );
}
