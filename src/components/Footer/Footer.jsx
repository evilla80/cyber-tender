import React from "react";
import style from "./Footer.module.css";
import disco from "../../assets/image/disco.png"
import bicocca from "../../assets/image/unimib.jpg"
import {NavLink} from "react-router-dom";

/**
 * Componente Footer dell'applicazione
 * Mostra un menù di navigazione, il nome del corso e
 * due loghi relativi all'università
 *
 * @param navItems - menù di navigazione: array di oggetti {url, text}
 * @returns {React.JSX.Element}
 * @constructor
 */

function Footer({navItems}) {

    // Genera in modo dinamico gli url di navigazione
    const itemList = navItems.map((item) => {
        return (
            <li key={item.url} className="nav-item">
                <NavLink to={item.url}>
                    {item.text}
                </NavLink>
            </li>
        )
    });

    return (
        <footer className={style.footer}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <nav className={style.footerNav}>
                            <ul className="nav flex-column">
                                {itemList}
                            </ul>
                        </nav>
                    </div>

                    <div className="col-md-auto">
                        <div className={`d-flex ${style.copyright}`}>
                            <div id={style.course}>
                                <a href="https://elearning.unimib.it/course/info.php?id=61231" target="_blank">
                                    "Applicazioni Web: Progettazione e Sviluppo"
                                </a>
                            </div>

                            <div id={style.disco} className={style.logo}>
                                <a href="https://www.disco.unimib.it/it" target="_blank">
                                    <img src={disco} alt="disco"/>
                                </a>
                            </div>

                            <div id={style.unimib} className={style.logo}>
                                <a href="https://www.unimib.it/" target="_blank">
                                    <img src={bicocca} alt="unimib"/>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )

}

export default Footer;