import FormSearch from './components/FormSearch';
import MovieList from './components/MovieList';
import './styles.css';
import { useState } from 'react';

export default function App() {
  const [keyword, setKeyword] = useState("");

  const onSearch = (value: string) => {
    setKeyword(value);
  }

  return (
    <div className="container">
      <h1>Movie Search</h1>
      <FormSearch onSearch={onSearch} />
      <MovieList keyword={keyword} />
    </div>
  )
}
