import React from "react";
import classes from './Spinner.module.scss';
const { chaseWrapper, chase, chaseDot } = classes
export const Spinner = () => {

    return (
        <div className={chaseWrapper}>
            <div className={chase}>
                <div className={chaseDot}></div>
                <div className={chaseDot}></div>
                <div className={chaseDot}></div>
                <div className={chaseDot}></div>
                <div className={chaseDot}></div>
                <div className={chaseDot}></div>
            </div>
        </div>

    )
}