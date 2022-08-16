import React from "react";
import { API_KEY } from "../../framework/constants";
import { Card } from "../Card/Card";


export const MoveGrid = () => {
    const getPopular = async () => {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ru-RU&page=1&region=ru`;
   
        return await fetch(url)
            .then((response) => {
              return response.json();
            })
           
    }
    return (
        <main className="container">
            <div className="row">
                <Card />
            </div>
        </main>
    )
}