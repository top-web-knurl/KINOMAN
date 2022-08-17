import React, { useCallback, useState } from "react";
// import { API_KEY } from "../../frameworkAPI/constants";
import { Card } from "../Card/Card";
import { responseDb } from "./responseDb";
import {Link } from "react-router-dom";
export const MovieGrid = () => {
    // const getPopular = async () => {
    //     const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ru-RU&page=1&region=ru`;

    //     return await fetch(url)
    //         .then((response) => {
    //           return response.json();
    //         })

    // }
    const [films, getFilms] = useState(responseDb.results);

    const gridFilms = useCallback(() => {
        console.log('render-films');
        return films.map(film => (

            <Link to={`/${film.id}`} key={film.id} className="col-lg-2 col-md-3 col-sm-4 col-6">
                <Card film={film} />
            </Link>
        )
        )
    }, [films])

    return (
        <main className="container">
            <div className="row g-3">
                {gridFilms()}
            </div>
        </main>
    )
}
