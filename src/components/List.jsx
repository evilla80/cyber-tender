import {NavLink} from "react-router-dom";
import style from './Menu/Menu.module.css';
import styles from "./Menu/Menu.module.css";

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