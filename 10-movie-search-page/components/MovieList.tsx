import { useQuery } from '@tanstack/react-query';
import { searchMovies } from '../services/tmdb';
import { MovieData } from '../types/movie';
import { useCallback } from 'react';

interface MovieListProps {
  keyword: string
}

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w220_and_h330_face";

const MovieList = ({ keyword }: MovieListProps) => {
  const { data: movies, isLoading, error } = useQuery<MovieData>({
    queryKey: ['movies', keyword],
    queryFn: () => searchMovies(keyword),
    enabled: keyword !== ""
  });

  const getImageUrl = useCallback((path: string) =>
    path ? IMAGE_BASE_URL + path : 'https://placehold.net/400x600.png',
    []
  );

  if (isLoading) return "Loading movies...";

  if (error) return "Failed to load movies!";

  return (
    <div className="grid">
      {movies?.results.map(movie => (
        <div
          key={movie.id}
          className="card"
        >
          <img src={getImageUrl(movie.poster_path)} height={140} />
          <div className="card-body">
            <div className="card-subtitle">
              {movie.title}
            </div>
            <div className="card-text max-lines">
              {movie.overview.length > 100 ? movie.overview.substring(0, 100) + "..." : movie.overview}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MovieList;
