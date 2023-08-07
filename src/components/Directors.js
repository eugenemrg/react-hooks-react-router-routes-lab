import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, index) => {
        return (
          <div key={`${director}${index}`}>
            <p>{director.name}</p>
            <ul>
              {director.movies.map((movie, index) => {
                return <li key={`${movie}${index}`}>{movie}</li>
              })}
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default Directors;
