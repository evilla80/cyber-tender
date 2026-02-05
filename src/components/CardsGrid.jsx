import React from "react";
import SingleCard from "./SingleCard/SingleCard.jsx";
import "../App.css";
import style from './Menu/Menu.module.css';
import styles from "./Menu/Menu.module.css";

function CardsGrid({search, text, filteredList, showInputText}) {
    return (
        <div className={styles.container}>
            {showInputText && (
                <input className={style.input}
                       type="text"
                       id="myInput"
                       value={text}
                       onChange={search}
                       placeholder="Cerca il cocktail per nome..."/>
            )}
            <div className = "drink-grid">
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