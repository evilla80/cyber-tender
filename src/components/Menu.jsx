import React from 'react';
import CardsGrid from './CardsGrid';

function Menu({ drinks, loading }) {

    if (loading) return <div className="loading">Caricamento menù...</div>;

    return (
        <div style={{margin: 30}}>
            <h1>Il nostro Menù</h1>
            <p>Scegli il tuo drink preferito</p>

            {/* Qui puoi riusare la griglia o fare una lista diversa */}
            <CardsGrid drinkList={drinks} />
        </div>
    );
}

export default Menu;