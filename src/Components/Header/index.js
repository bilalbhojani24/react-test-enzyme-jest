import React from 'react';
import './styles.scss';
import Logo from '../../assets/images/logo.svg';

function Header() {
    return (
        <header className="headerComponent">
            <div className="wrap">
                <div >
                    <img src={Logo} alt="logo" className="logo" />
                </div>
            </div>
        </header>
    )
}

export default Header
