import React from 'react';
import './styles.scss';
import Logo from '../../assets/images/logo.svg';

function Header() {
    return (
        // use data-test = "testName" to avoid confusion
        <header className="headerComponent" data-test="headerComponentTest">
            <div className="wrap" id="wrapper">
                <div >
                    <img src={Logo} alt="logo" className="logo" data-test="logoTest" />
                </div>
            </div>
        </header>
    )
}

export default Header
