import React from 'react';
import CardsGrid from './CardsGrid';
import HeroSection from "./HeroSection/HeroSection.jsx";
import HeroDrink from "../assets/image/drink.jpg"

function HomePage({ drinks, loading }) {

    if (loading) {
        return <div>Shakerando i dati...</div>;
    }

    const drinkFiltered = drinks.filter((drink) => drink.customId === 1|| drink.customId === 4 || drink.customId === 5);

    return (
        <>
            <HeroSection
                title="Barman Digitale"
                img={HeroDrink}
            />
            <div style={{margin: 30}}>
                <h3>Scopri i Drink di oggi</h3>

                <CardsGrid drinkList={drinkFiltered} />
            </div>

        </>
    );
}

export default HomePage;