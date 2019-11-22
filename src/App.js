import React from "react";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import MovieList from "./components/MovieList";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <MovieList />
      </main>
    </>
  );
}

export default App;
