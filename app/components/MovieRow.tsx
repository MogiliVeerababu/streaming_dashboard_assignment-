"use client";

import MovieCard from "./MovieCard";
import { Movie } from "../types/movie";

export default function MovieRow({ title, movies }: { title: string; movies: Movie[] }) {
  return (
    <section className="mt-10 px-4">
      <h2 className="text-xl mb-3 font-semibold">{title}</h2>

      <div className="flex gap-3 overflow-x-auto scrollbar-hide">
        {movies.map((m) => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </div>
    </section>
  );
}
