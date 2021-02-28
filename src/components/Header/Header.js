import React from "react";
import {Link} from "react-router-dom";



function Header() {

    return(
        <header>Header

            <li><Link to='/'>Main</Link></li>
            <li><Link to='/js'>JS</Link></li>
            <li><Link to='/banks'>API Banks</Link></li>
            <li><Link to='/weather'>Weather</Link></li>
            <li><Link to='/translate'>Translate</Link></li>
        </header>
    )
}

export default Header