import React from "react";

export const Header = ({ children }) => {
    return (
        <header className="purple darken-4 ">
            <div className="container">
                <div className="row">
                    {children}
                </div>
            </div>
        </header>
    )
}