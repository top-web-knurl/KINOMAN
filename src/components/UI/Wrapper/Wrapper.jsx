import React from "react";

export const Wrapper = ({ children }) => {
    return (
        <main className="container">
            <div className="row g-3">
                {children}
            </div>
        </main>
    )
}