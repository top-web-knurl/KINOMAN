import React from "react";
// import { API_KEY } from "../../frameworkAPI/constants";
import { Card } from "../Card/Card";
import { responseDb } from "./responseDb";

export const MoveGrid = () => {
    // const getPopular = async () => {
    //     const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ru-RU&page=1&region=ru`;

    //     return await fetch(url)
    //         .then((response) => {
    //           return response.json();
    //         })

    // }
    const films = responseDb.results;

    return (
        <main className="container">
            <div className="row">
                {films.map(film => <div key={film.id} className="col-lg-2"><Card  film={film}/></div>)}
            </div>
        </main>
    )
}
