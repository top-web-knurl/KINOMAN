import React from "react";
import classes from './Card.module.scss';
import Atropos from 'atropos/react';
import notFoundImg from "./img/kosmo.jpg"
import 'atropos/css';
export const Card = ({ film }) => {
    const img = notFoundImg;
    const { poster_path, title} = film;
    const { Card } = classes;

    return (
        <div className={Card}>
            <Atropos
                activeOffset={40}
                shadowScale={1.07}
            >
                <img src={poster_path != null ? `https://image.tmdb.org/t/p/w300${poster_path}` : `${notFoundImg}`} alt={title} />
                </Atropos>
            <h6 className="mt-1">{title}</h6>
        </div>
    )
}