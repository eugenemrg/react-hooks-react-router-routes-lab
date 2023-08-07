import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, index) => {
        return (
          <div key={index}>
            <p>{movie.title}</p>
            <p>{movie.time}</p>
            <ul>{movie.genres.map((genre, g_index) => {
              return <li key={g_index}>{genre}</li>
            })}</ul>
          </div>
        )
      })}
    </div>
  )
}

export default Movies;
