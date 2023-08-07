import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, index) => {
        return (
          <div key={`${actor}${index}`}>
            <p>{actor.name}</p>
            <ul>
              {actor.movies.map((movie, index) => {
                return <li key={`${movie}${index}`}>{movie}</li>
              })}
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default Actors;
