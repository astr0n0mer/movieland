import { useState, useEffect } from "react";
import SearchIcon from "./assets/search.svg";
import "./App.css";

import MovieCard from "./components/MovieCard";

const API_URL = `https://www.omdbapi.com/?apikey=${
  import.meta.env.VITE_API_KEY
}`;

export default function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(() => searchMovies("one piece"));
  }, []);

  async function searchMovies(title) {
    const movieData = await fetch(`${API_URL}&s=${title}`)
      .then((response) => response.json())
      .then((data) => data.Search);

    setMovies(movieData);
  }

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <form
        className="search"
        onSubmit={(e) => {
          e.preventDefault();
          searchMovies(e.target.elements.searchTerm.value);
        }}
      >
        <input type="text" name="searchTerm" placeholder="Search for movies" />
        <button type="submit">
          <img src={SearchIcon} alt="Search" />
        </button>
      </form>

      <div className="container">
        {movies?.length > 0 ? (
          movies.map((movie) => (
            <a
              href={`https://www.imdb.com/title/${movie.imdbID}`}
              target="_blank"
              key={movie.imdbID}
            >
              <MovieCard key={movie.imdbID} movie={movie} />
            </a>
          ))
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
      </div>
    </div>
  );
}
