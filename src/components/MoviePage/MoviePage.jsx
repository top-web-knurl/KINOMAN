import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { imageUrlW780, getMovieOnId, getMovieVideoOnId, getRecomendMovieVideosOnId } from "../../MovieDatabaseAPI/MovieDatabaseAPI";
import { MovieGrid } from "../MovieGrid/MovieGrid";
import { Spinner } from "../UI/Spinner/Spinner";
import classes from './MoviePage.module.scss';

export const MoviePage = () => {
  const [movieInfo, getMovieInfo] = useState(null);
  const [movieVideo, getMovieVideo] = useState(null);
  const [movieRecomend, getRecomendMovieVideos] = useState(null);
  const { Poster, PosterInfo, PosterDesc } = classes;

  const movieId = useLocation().pathname.replace(/[^0-9]/g, '')

  useEffect(() => {
    getMovieOnId(movieId)
      .then(data => {
        getMovieInfo(data)
      })
    getMovieVideoOnId(movieId)
      .then(data => {
        getMovieVideo(data)
      })
    getRecomendMovieVideosOnId(movieId)
    .then(data => {
      getRecomendMovieVideos(data)
    })
  }, [movieId])

 

  if (!movieInfo || movieInfo === null) {
    return <Spinner />
  }

  const colorScore = movieInfo.vote_average > 7 ? 'green' : movieInfo.vote_average > 6 && movieInfo.vote_average < 7 ? 'orange' : 'red';

  return (
    <>
      <div className="container-fluid">
        <div className="row gx-5">
          <h1 className="mb-4">{movieInfo.title} {movieInfo.adult ? <small>18+</small> : null}</h1>
          <div className="col-lg-6 mb-4">
            <div className={Poster}>
              {movieVideo?.results[0]?.key ?
                <iframe
                  width='100%'
                  height='100%'
                  src={`https://www.youtube.com/embed/${movieVideo.results[0].key}`}
                  title={movieVideo.results[0].name}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
                :
                <img
                  className="img-fluid rounded"
                  src={movieInfo.backdrop_path ? imageUrlW780 + movieInfo.backdrop_path : imageUrlW780 + movieInfo.poster_path}
                  alt={movieInfo.title}
                />
              }
            </div>
          </div>
          <div className="col-lg-6">
            <ul className={PosterInfo}>
              {movieInfo.release_date ? <li><span>Год выхода:</span> {new Date().getFullYear(Date.parse(movieInfo.release_date))} г.</li> : null}
              {movieInfo.runtime ? <li><span>Длительность:</span> {Math.floor(movieInfo.runtime / 60)}ч. {movieInfo.runtime % 60}м.</li> : null}
              {movieInfo.vote_average ? <li><span>Оценка IMDB:</span> <span style={{ color: colorScore }}>{movieInfo.vote_average.toFixed(1)} </span>  </li> : null}
              {movieInfo.genres.length > 0 ? <li><span>Жанр:</span> {movieInfo.genres.map((genre, i) => <span key={i}> {genre.name}{movieInfo.genres.length - 1 !== i ? ',' : null} </span>)} </li> : null}
              {movieInfo.budget ? <li><span>Бюджет:</span> {movieInfo.budget.toLocaleString()} $</li> : null}
              {movieInfo.revenue ? <li><span>Доход:</span> {movieInfo.revenue.toLocaleString()} $</li> : null}
              {movieInfo.production_countries.length > 0 ? <li><span>Страна:</span> {movieInfo.production_countries.map((country, i) => <span key={i}> {country.name} </span>)} </li> : null}
              {movieInfo.original_title ? <li><span>Оригинальное название:</span> <span>{movieInfo.original_title}</span> </li> : null}
            </ul>
            <p className={PosterDesc}>
              <strong>{movieInfo.tagline ? movieInfo.tagline : null}</strong> <br />
              {movieInfo.overview ? movieInfo.overview : null}
            </p>
          </div>
        </div>
        {movieRecomend ?
          <>
            <h2 className="mb-3">Похожие</h2>
            <div className="row g-3">
              <MovieGrid movies={movieRecomend} countMovies={6}/>
            </div>
          </>
          :
          null
        }
      </div>
    </>
  )
}