import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getMovieOnId } from "../../MovieDatabaseAPI/MovieDatabaseAPI";
import { Spinner } from "../UI/Spinner/Spinner";

export const MoviePage = () => {
  const [movieInfo, getMovieInfo] = useState([]);

  const movieId = useLocation().pathname.replace(/[^0-9]/g, '')

  useEffect(() => {
    getMovieOnId(movieId)
      .then((data) => {
        getMovieInfo(data)

      })
  }, [movieId])

  console.log(movieInfo);
  return (
    <>
      {movieInfo.length ?
        <Spinner />
        :
        <div>
          <h1>{movieInfo.title}</h1>
        </div>
      }

    </>
  )
}