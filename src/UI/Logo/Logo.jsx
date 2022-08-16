import React from "react";
import classes from './Logo.module.scss';
export const Logo = ({ children }) => {
    const {Logo} = classes;
    return (
        <div className={Logo}>
            <a href="/">{children}</a>
        </div>
    )
}