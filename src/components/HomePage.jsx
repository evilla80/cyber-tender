import React from 'react';
import CardsGrid from './CardsGrid';
import HeroSection from "./HeroSection/HeroSection.jsx";
import HeroDrink from "../assets/image/drink.jpg"
import RightGrid from "./RightGrid/RightGrid.jsx";
import InfoDrink from "../assets/image/scopri_drink.jpg"
import {useNavigate} from "react-router-dom";

function HomePage({ drinks, loading }) {
    const title = "Qualcosa in più sul nostro progetto"
    const message = "Il piacere di un buon cocktail inizia dalla sua preparazione. Che tu sia un bartender " +
        "o un appassionato, scopri la nostra guida completa per creare il tuo prossimo drink ideale."
    const navigate = useNavigate();
    if (loading) {
        return <div>Shakerando i dati...</div>;
    }

    const drinkFiltered = drinks.filter((drink) =>
        drink.customId === 9|| drink.customId === 4 || drink.customId === 5 || drink.customId === 6);

    function infoClick() {
        navigate('/Info')
    }
    function menuClick() {
        navigate('/cocktail')
    }
    return (
        <>
            <HeroSection
                title="Cyber Tender"
                message= "Scopri, prepara e gusta i migliori cocktail del mondo."
                img={HeroDrink}
                onButtonClick={menuClick}
            />

            <div style={{padding: 70, backgroundColor: '#171717', textAlign: 'center'}}>
                <h1 style={{marginBottom: 20}}>Scopri i Drink di oggi</h1>
                <CardsGrid filteredList={drinkFiltered} showInputText={false}/>
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