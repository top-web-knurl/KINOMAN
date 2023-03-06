import React from "react";

export const Wrapper = ({ children }) => {
    return (
        <main className="container pb-5">
            <div className="row g-3">
                {children}
            </div>
        </main>
    )
}