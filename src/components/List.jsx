import {NavLink} from "react-router-dom";
import style from '../pages/Menu/Menu.module.css';
import styles from "../pages/Menu/Menu.module.css";

/**
 * Alternativa visuale a CardsGrid.
 * Permette di visualizzare la lista dei cocktail,
 * Mostra sempre anche una barra di ricerca per filtrarli.
 *
 * @param callback per gestire la scrittura nella barra di ricerca
 * @param text - valore attuale che c'è nella barra di ricerca
 * @param filteredList - lista dei cocktail da visualizzare
 * @returns {JSX.Element}
 * @constructor
 */
function List({search, text, filteredList}) {

    return (
        <div className={styles.container}>
            <input className={style.input}
                   type="text"
                   id="myInput"
                   value={text}
                   onChange={search}
                   placeholder="Cerca il cocktail per nome..."/>

            <table className={style.table}>
                <tbody>
                {/* viene creata una riga per ogni cocktail nella lista */}
                {filteredList.map((drink) => (
                    <tr key={drink.idDrink}>
                        <td className={style.drinkCell}
                            style={{width: "25%"}}>
                            <img
                                src={drink.strDrinkThumb}
                                className={style.image}
                            />
                        </td>
                        <td style={{width: "50%"}}><h5> {drink.strDrink}</h5></td>
                        <td className={style.drinkCell} style={{width: "25%"}}>
                            {/* Si viene portati alla pagina di dettaglio del cocktail specifico
                             (in base al suo id), quando viene schiacciato il bottone*/}
                            <NavLink
                                className={style.button}
                                to={`/cocktail/${drink.customId}`}
                            >
                                Dettagli
                            </NavLink>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default List;