import React from "react";

function Header() {

    return ( 
        <header>
            <div className="header-wrapper">
                <nav className="navlinks">
                    <ul className="links">
                        <li  className="link">Home</li>
                        <li className="active link">Characters</li>
                        <li className="link">About Us</li>
                        <li className="link">Universe</li>
                    </ul>
                </nav>
            </div>
        </header>
     );
}

export default Header;