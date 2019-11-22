import React from "react";
import { getDiscoverMoives } from "../api/movies";
import styled from "@emotion/styled";

const MovieTag = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Poster = styled.img`
  width: 80px;
  height: 100px;
  margin: 5px;
`;

export default function MovieList() {
  const [movies, setMovies] = React.useState([]);

  async function refreshMovies() {
    const discoveredMovies = await getDiscoverMoives();
    setMovies(discoveredMovies);
  }

  React.useEffect(() => {
    refreshMovies();
  }, []);
  console.log(movies);
  return (
    <MovieTag>
      {movies.map(movie => (
        <div key={movie.id}>
          {/* {movie.title} */}
          <Poster
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
      ))}
    </MovieTag>
  );
}
