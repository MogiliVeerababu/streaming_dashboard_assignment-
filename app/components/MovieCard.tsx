"use client";

import Link from "next/link";


import Image from "next/image";
import { Movie } from "../../types/movie";
import { imageUrl } from "../../lib/tmdb";



export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Link href={`/movie/${movie.id}`}>
      <div className="min-w-[150px]">
        <Image
          src={imageUrl(movie.poster_path)}
          width={200}
          height={300}
          className="rounded"
          alt={movie.title || ""}
        />
      </div>
    </Link>
  );
}



