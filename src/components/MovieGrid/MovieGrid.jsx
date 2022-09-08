import React, { useCallback, useState } from "react";
import { Card } from "../Card/Card";
import { responseDb } from "./responseDb";
import { Link } from "react-router-dom";
import classes from './MovieGrid.module.scss';

export const MovieGrid = () => {

    const [films] = useState(responseDb.results);
    const { MovieItem } = classes;

    const gridFilms = useCallback(() => {
        return films.map(film => {
            return (
                <Link
                    to={`/movie/${film.id}`}
                    key={film.id}
                    className={`${MovieItem} col-lg-2 col-md-3 col-sm-4 col-6`}>
                    <Card film={film} />
                </Link>
            )
        }
        )
    }, [films, MovieItem])

    return (
        gridFilms()
    )
}
