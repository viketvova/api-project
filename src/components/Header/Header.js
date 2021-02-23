import React from "react";
import {Link} from "react-router-dom";



function Header() {

    return(
        <div>Header

            <li><Link to='/'>Main</Link></li>
            <li><Link to='/banks'>Banks</Link></li>
            <li><Link to='/weather'>Weather</Link></li>
            <li><Link to='/translate'>Translate</Link></li>
        </div>
    )
}

export default Header