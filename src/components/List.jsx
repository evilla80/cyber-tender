import {NavLink} from "react-router-dom";
import style from './list.module.css';
import {useState} from "react";

function List({drinkList}) {
    const [searchText, setSearchText] = useState("");
    const handleSearch = (e) => {
        setSearchText(e.target.value);
    }

    const filteredDrinkList = drinkList.filter((drink) => {
        return drink.strDrink.toLowerCase().includes(searchText.toLowerCase());
    });

    return (
        <>
            <input type="text"
                   id="myInput"
                   value={searchText}
                   onChange={handleSearch}
                   placeholder="Cerca il cocktail per nome..."/>

            <table className={style.table}>
                <tbody>
                {filteredDrinkList.map((drink) => (
                    <tr key={drink.idDrink}>
                        <td className={style.drinkCell}
                            style={{width: "20%"}}>
                            <img
                                src={drink.strDrinkThumb}
                                className={style.image}
                            />
                        </td>
                        <td style={{width: "50%"}}><strong> {drink.strDrink}</strong></td>
                        <td className={style.drinkCell} style={{width: "50%"}}>
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
        </>
    );
}

export default List;