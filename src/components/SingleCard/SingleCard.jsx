import React from "react";
import {NavLink} from "react-router-dom";
import style from "./SingleCard.module.css";

/**
 * Rappresenta una singola tessera all'interno di una griglia
 * Permette di aprire la pagina di dettaglio quando la card viene cliccata,
 * attraverso un routing dinamico basato sull'id
 *
 * @param id - identificatore univoco del cocktail
 * @param name - nome del cocktail
 * @param image - immagine del cocktail
 * @returns {React.JSX.Element}
 * @constructor
 */
function SingleCard({id, name, image}) {
    return (
        //viene costruito l'url sulla base dell'id del cocktail
        <NavLink to={`/cocktail/${id}`} style={{ textDecoration: 'none' }}>
            <div className={style.card}>
                <img
                    loading="lazy" // carica l'immagine solo quando ci sto per arrivare
                    className={style.image}
                    src={image}
                    alt={name}
                />

                <div className={style.body}>
                    <h5 className={style.title}>
                        {name}
                    </h5>
                    <p className={style.text}>
                        Clicca per la ricetta
                    </p>
                    </div>
            </div>
        </NavLink>

    )
}

export default SingleCard