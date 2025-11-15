import Image from "next/image";
import { fetchMovieById, imageUrl } from "../../../lib/tmdb";

export default async function MoviePage(
  props: { params: Promise<{ id: string }> }
) {
  // Next.js requires awaiting params in latest version
  const { id } = await props.params;

  const movie = await fetchMovieById(id);

  return (
    <main className="pt-20 max-w-4xl mx-auto px-4">
      {movie.backdrop_path && (
        <Image
          src={imageUrl(movie.backdrop_path, "original")}
          width={1200}
          height={500}
          className="rounded"
          alt={movie.title}
        />
      )}

      <h1 className="text-4xl mt-6 font-bold">{movie.title}</h1>

      <p className="mt-4 text-lg">{movie.overview}</p>

      <p className="mt-4 text-gray-300">
        <strong>Release Date:</strong> {movie.release_date}
      </p>
    </main>
  );
}
