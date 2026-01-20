import React from 'react';
import CardsGrid from './CardsGrid';
import HeroSection from "./HeroSection/HeroSection.jsx";
import HeroDrink from "../assets/image/drink.jpg"
import RightGrid from "./RightGrid.jsx";
import InfoDrink from "../assets/image/scopri_drink.jpg"
import {useNavigate} from "react-router-dom";

function HomePage({ drinks, loading }) {
    const title = "Scopri qualcosa in più sul nostro progetto"
    const message = "proova prova priva"
    const navigate = useNavigate();
    if (loading) {
        return <div>Shakerando i dati...</div>;
    }

    const drinkFiltered = drinks.filter((drink) => drink.customId === 1|| drink.customId === 4 || drink.customId === 5);

    function infoClick() {
        navigate('/Info')
    }
    function menuClick() {
        navigate('/Menu')
    }
    return (
        <>
            <HeroSection
                title="Cyber Tender"
                message= "Scopri, prepara e gusta i migliori cocktail del mondo."
                img={HeroDrink}
                onButtonClick={menuClick}
            />
            <div style={{padding: 70, backgroundColor: '#171717'}}>
                <h2>Scopri i Drink di oggi</h2>

                <CardsGrid drinkList={drinkFiltered} />
            </div>
            <RightGrid title={title}
                       message={message}
                       img={InfoDrink}
                       showButton={true}
                       buttonText="Scopri"
                       onButtonClick={infoClick} />

        </>
    );
}

export default HomePage;