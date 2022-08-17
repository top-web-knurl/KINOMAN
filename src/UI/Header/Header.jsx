import React from "react";
import { Logo } from "../Logo/Logo";

export const Header = () => {
    return (
        <header className="p-3 mb-3">
            <div className="container">
                <div className="row">
                    <div className='col-6 d-flex align-items-center'>
                        <Logo/>
                    </div>
                    <div className='col-6 d-flex align-items-center justify-content-end'>
                        <input type="search" placeholder='Поиск' />
                    </div>
                </div>
            </div>
        </header>
    )
}