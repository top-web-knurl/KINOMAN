import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getRecomendMovieVideosOnId } from "../../MovieDatabaseAPI/MovieDatabaseAPI";
import { MovieGrid } from "../MovieGrid/MovieGrid";

export const MovieRecomends = ({id}) => {

  const [movieRecomend, getRecomendMovieVideos] = useState(null);
  // const movieId = useLocation().pathname.replace(/[^0-9]/g, '')

  
  useEffect(() => {
    getRecomendMovieVideosOnId(id)
      .then(data => {
        getRecomendMovieVideos(data)
      })
  }, [id])

  return (
    <>
      {/* {title ? <h2 className="mb-3 mt-3">{title}</h2> : null} */}
      <div className="row g-3">
        <MovieGrid movies={movieRecomend} countMovies={6} />
      </div>
    </>
  )
}