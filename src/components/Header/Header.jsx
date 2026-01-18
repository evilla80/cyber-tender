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

function Header({ navItems, logo }) {

    // Stato per gestire l'apertura/chiusura del menu su mobile
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    // Mappiamo gli elementi del menu
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
            {/* 'dark' è fondamentale: rende l'hamburger menu bianco (visibile su sfondo scuro) */}
            <Navbar expand="md" dark>
                <div className={`container ${style.navbarContainer}`}>

                    {/* Logo che riporta alla Home */}
                    <NavLink to="/">
                        <img className={style.logo} src={logo} alt="Logo" />
                    </NavLink>

                    {/* Bottone Hamburger per mobile */}
                    <NavbarToggler onClick={toggle} />

                    {/* Menu che collassa */}
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