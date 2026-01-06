import React from 'react';
import CardsGrid from './CardsGrid';

function Menu({ drinks, loading }) {

    if (loading) return <div className="loading">Caricamento menù...</div>;

    return (
        <>
            <h1>Il nostro Menù</h1>
            <p>Scegli il tuo drink preferito</p>

            {/* Qui puoi riusare la griglia o fare una lista diversa */}
            <CardsGrid drinkList={drinks} />
        </>
    );
}

export default Menu;