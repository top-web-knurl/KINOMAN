import React from "react";
import { Logo } from "../Logo/Logo";

export const Header = () => {
    return (
        <header className="py-3 mb-3">
            <div className="container">
                <div className="row g-3">
                    <div className='col-lg-9 col-md-7 col-5 d-flex align-items-center'>
                        <Logo/>
                    </div>
                    <div className='col-lg-3 col-md-5 col-7 d-flex align-items-center justify-content-end'>
                        <input  className="form-control" type="search" placeholder='Поиск' />
                    </div>
                </div>
            </div>
        </header>
    )
}