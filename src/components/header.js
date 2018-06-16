import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
            <div className="flex-box-container">
                <header>
                    <ul className="header">
                        <li><Link exact to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                    </ul>
                </header>
            </div>
    )
}

export default Header;
