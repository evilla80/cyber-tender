import React from "react";
import SingleCard from "./SingleCard.jsx";
import "../App.css";

function CardsGrid({drinkList}) {
    return (
        <div className = "drink-grid">
            {drinkList.map((drink) => (
                <SingleCard key={drink.idDrink}
                            id={drink.idDrink}
                            name={drink.strDrink}
                            image={drink.strDrinkThumb}/>
            ))}
        </div>
    )
}

export default CardsGrid;