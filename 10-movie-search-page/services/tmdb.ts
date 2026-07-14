import { MovieData } from "../types/movie";

export const searchMovies = async (keyword: string): Promise<MovieData> => {
  const apiKey: string = import.meta.env.VITE_TMDB_KEY;
  return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${keyword}`).then(r => r.json());
}

