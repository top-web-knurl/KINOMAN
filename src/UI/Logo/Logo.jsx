import React from "react";
import classes from './Logo.module.scss';
export const Logo = () => {
    const {Logo} = classes;
    return (
        <div className={Logo}>
            <a href="/">KINOMAN</a>
        </div>
    )
}