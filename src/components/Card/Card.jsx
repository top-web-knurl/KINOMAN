import React from "react";
import classes from './Card.module.scss';

export const Card = ({ film }) => {

    const { poster_path, title } = film;
    const { Card } = classes;
    
    return (
        <div className={Card}>
            <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />
            <h6 className="mt-1">{title}</h6>
        </div>
    )
}