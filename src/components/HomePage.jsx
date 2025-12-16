// HomePage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SingleCard from "./SingleCard.jsx";
import CardsGrid from "./CardsGrid.jsx";

function HomePage (){
    const [drinks, setDrinks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDrinks = async () => {
            const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
            const data = await response.json();
            setDrinks(data.drinks);
            setLoading(false);
        };

        fetchDrinks();
    }, []);

    if (loading) return <div style={{textAlign: 'center', marginTop: '50px', color: '#fff'}}>Shakerando i dati... 🍹</div>;

    return (
        <>
            <h1>Barman Digitale</h1>
            <p>La lista dei {drinks.length} cocktail più famosi al mondo</p>

            <CardsGrid drinkList={drinks}/>
        </>
    );
};

export default HomePage;
