import React from 'react';
import CardsGrid from './CardsGrid';

function HomePage({ drinks, loading }) {

    if (loading) {
        return <div>Shakerando i dati...</div>;
    }

    const drinkFiltered = drinks.filter((drink) => drink.customId === 1|| drink.customId === 5 || drink.customId === 7);

    return (
        <>
            <h1>Barman Digitale</h1>
            <p>Scopri i Drink di oggi</p>

            <CardsGrid drinkList={drinkFiltered} />
        </>
    );
}

export default HomePage;