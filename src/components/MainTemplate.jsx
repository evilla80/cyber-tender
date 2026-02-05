import React from "react";

import Footer from "./Footer/Footer.jsx";
import Header from "./Header/Header.jsx";

/**
 * Definisce la struttura standard dell'applicazione.
 * Aggiunge ad'ogni pagina l'Header e il Footer
 *
 * @param children - il contenuto specifico della pagina (es: Home, Info, ..)
 * @param navItems - elementi del menù da passare sia a Header che a Footer
 * @param logo - logo da passare all'Header
 * @returns {React.JSX.Element}
 * @constructor
 */
function MainTemplate({ children, navItems, logo}) {
    return (
        <>
            <Header
                navItems={navItems}
                logo={logo}
            />
            {/*Viene inserito il contenuto specifico della pagina corrente*/}
            <div className="main-content" style={{ width: '100%', padding: 0, margin: 0 }}>
                {children}
            </div>

            <Footer
                navItems={navItems}
            />
        </>
    )
}

export default MainTemplate;