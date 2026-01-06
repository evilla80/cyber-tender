import React from 'react';
import CardsGrid from './CardsGrid';
import SingleCard from "./SingleCard.jsx"; // Assumo tu abbia questo componente

// Ricevi drinks e loading tramite props destructuring
function HomePage({ drinks, loading }) {

    if (loading) {
        return <div style={{textAlign: 'center', marginTop: '50px', color: '#fff'}}>Shakerando i dati... 🍹</div>;
    }

    const drinkFiltered = drinks.filter((drink) => drink.customId === 1|| drink.id === 2 || drink.customId === 3);

    return (
        <>
            <h1>Barman Digitale</h1>
            {/* Ora usi drinks che ti arriva da App */}
            <p>La lista dei {drinks.length} cocktail più famosi al mondo</p>

            <CardsGrid drinkList={drinkFiltered} />
        </>
    );
}

export default HomePage;