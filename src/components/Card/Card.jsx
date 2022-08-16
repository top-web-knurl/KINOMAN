import React from "react";

export const Card = ({ film }) => {

    const { poster_path, title} = film;
    // console.log(film);
    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w154${poster_path}`} alt="" />
            <h5>{title}</h5>
        </div>
    )
}