import React, { useState } from 'react';
import {
    Collapse,
    Nav,
    Navbar,
    NavbarToggler,
    NavItem
} from 'reactstrap';
import { NavLink } from "react-router-dom";
import style from "./Header.module.css";

/**
 * Header dell'applicazione
 * Mostra il logo dell'applicazione affiancato
 * dal menù di navigazione, gestisce anche la logica
 * per la visualizzazione del menù in base alla
 * grandezza dello schermo
 *
 * @param navItems - menù di navigazione: array di oggetti {url, text}
 * @param logo - logo dell'applicazione
 * @returns {React.JSX.Element}
 * @constructor
 */
function Header({ navItems, logo }) {
    // Stato per gestire l'apertura/chiusura del menu (per versione mobile)
    // Viene ignorato su schermi grandi
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    // Genera in modo dinamico gli url di navigazione, assegnandoli uno stile se sono cliccati
    const itemList = navItems.map((item) => {
        return (
            <NavItem key={item.url} className={style.navItem}>
                <NavLink to={item.url}
                         className={({ isActive }) =>
                             isActive ? `${style.activeLink}` : ""
                         }>
                    {item.text}
                </NavLink>
            </NavItem>
        )
    });

    return (
        <div className={style.navBar}>
            {/*permette di mostrare il menù esteso su schermi grandi e
             il bottone hamburger per schermi piccoli*/}
            <Navbar expand="md" dark>
                <div className={`container ${style.navbarContainer}`}>

                    <NavLink to="/">
                        <img className={style.logo} src={logo} alt="Logo" />
                    </NavLink>

                    <NavbarToggler onClick={toggle} />

                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            {itemList}
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </div>
    )
}

export default Header;