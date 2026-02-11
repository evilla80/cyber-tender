import React from "react";
import SingleCard from "./SingleCard/SingleCard.jsx";
import "../App.css";
import style from '../pages/Menu/Menu.module.css';
import styles from "../pages/Menu/Menu.module.css";

/**
 * Alternativa visuale a List
 * Permette di visualizzare la griglia dei cocktail,
 * può anche mostrare una barra di ricerca per filtrarli.
 *
 * @param search - callback per gestire la scrittura nella barra di ricerca
 * @param text - valore attuale che c'è nella barra di ricerca
 * @param filteredList - lista dei cocktail da visualizzare
 * @param showInputText - flag per sapere se mostrare la barra di ricerca
 * @returns {React.JSX.Element}
 * @constructor
 */
function CardsGrid({search, text, filteredList, showInputText}) {
    return (
        <div className={styles.container}>
            {/* Mostra la barra di ricerca solo se showInputText è a true */ }
            {showInputText && (
                <input className={style.input}
                       type="text"
                       id="myInput"
                       value={text}
                       onChange={search}
                       placeholder="Cerca il cocktail per nome..."/>
            )}
            <div className = "drink-grid">
                {/*ogni cocktail nella lista diventa una singola card */}
                {filteredList.map((drink) => (
                    <SingleCard key={drink.idDrink}
                                id={drink.customId}
                                name={drink.strDrink}
                                image={drink.strDrinkThumb}/>
                ))}
            </div>
        </div>
    )
}

export default CardsGrid;