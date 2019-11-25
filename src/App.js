import React from "react";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import MovieList from "./components/MovieList";

function App() {
  const [movieSearchValue, setMovieSearchValue] = React.useState("leon");

  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <MovieList searchValue={movieSearchValue} />
      </main>
    </>
  );
}

export default App;
