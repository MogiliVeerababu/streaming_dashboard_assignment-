import Image from "next/image";
import { Movie } from "../../types/movie";
import { imageUrl } from "../../lib/tmdb";

export default function HeroBanner({ movie }: { movie: Movie }) {
  // Use your existing placeholder
  const backdrop = movie.backdrop_path
    ? imageUrl(movie.backdrop_path, "original")
    : "/placeholder.jpg";

  return (
    <section className="relative h-[70vh] md:h-[80vh] w-full">
      <Image
        src={backdrop}
        alt={movie.title || "Movie"}
        fill
        priority
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Text Content */}
      <div className="absolute bottom-20 left-6 md:left-12 max-w-xl text-white">
        <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
          {movie.title}
        </h1>

        {movie.overview && (
          <p className="mt-3 text-md md:text-lg drop-shadow-md line-clamp-3 md:line-clamp-none">
            {movie.overview}
          </p>
        )}
      </div>
    </section>
  );
}
