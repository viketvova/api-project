import React from "react";
import classes from './Footer.module.css';
import {Link} from 'react-router-dom';

export function Footer() {
    return (
        <div className={classes.Footer}>
            <footer>
                <ul>
                    <li><Link to="/"> Главная </Link></ li>
                    <li><Link to="/banks"> Банки </Link></ li>
                    <li><Link to="/weather"> Погода </Link></ li>
                    <li><Link to="/translate"> Перевод </Link></ li>

                </ ul>
                <p className=" copy-right "> Все права защищены - 2021 г.</ p>
                <div className="clearfix"></ div>
            </footer>
        </ div>
    )
}