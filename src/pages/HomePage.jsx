import React from 'react';
import CardsGrid from '../components/CardsGrid.jsx';
import HeroSection from "../components/HeroSection/HeroSection.jsx";
import HeroDrink from "../assets/image/drink.jpg"
import RightGrid from "../components/RightGrid/RightGrid.jsx";
import InfoDrink from "../assets/image/scopri_drink.jpg"
import {useNavigate} from "react-router-dom";


/**
 * Componente che rappresenta la pagina principale
 * Ha al suo interno 3 componenti figli
 *
 * @param drinks - lista completa dei cocktail ricevuta dall'API
 * @param loading - booleano per gestire il caricamento dei dati
 * @returns {React.JSX.Element}
 * @constructor
 */
function HomePage({ drinks, loading }) {
    const titleHome = "Cyber Tender"
    const messageHome = "Scopri, prepara e gusta i migliori cocktail del mondo."
    const titleInfo = "Qualcosa in più sul nostro progetto"
    const messageInfo = "Il piacere di un buon cocktail inizia dalla sua preparazione. Che tu sia un bartender " +
        "o un appassionato, scopri la nostra guida completa per creare il tuo prossimo drink ideale."
    //Hook che permette di spostare l'utente su altre pagine
    const navigate = useNavigate();
    //Se loading è a true vuol dire che i dati non sono ancora pronti,
    //evitiamo di fare altre operazioni
    if (loading) {
        return <div>Caricamento dei dati...</div>;
    }
    //Funzione che quando viene chiamata porta alla pagina di Info
    function infoClick() {
        navigate('/Info')
    }
    //Funzione che quando viene chiamata porta alla pagina del Menu
    function menuClick() {
        navigate('/cocktail')
    }

    const drinkFiltered = drinks.filter((drink) =>
        drink.customId === 9|| drink.customId === 4 || drink.customId === 5 || drink.customId === 6);

    return (
        <>
            {/*Vengono passati al componente titolo, didascalia, immagine e
            la funziona che porta al menu*/}
            <HeroSection
                title={titleHome}
                message= {messageHome}
                img={HeroDrink}
                onButtonClick={menuClick}
            />
            {/* Utilizza CardsGrid come nel componente menù, non viene però mostrata
             l'input text e vengono mostrati solo alcuni drink filtrati in precedenza*/}
            <div style={{padding: 70, backgroundColor: '#171717', textAlign: 'center'}}>
                <h1 style={{marginBottom: 20}}>Scopri i Drink di oggi</h1>
                <CardsGrid filteredList={drinkFiltered} showInputText={false}/>
            </div>
            {/*Utilizza Right Grid come nel componente Info,
            vengono passati titolo, messaggio, immagine, il bottone viene visualizzato,
            e gli viene passata anche la funzione che porta ad Info*/}
            <RightGrid title={titleInfo}
                       message={messageInfo}
                       img={InfoDrink}
                       showButton={true}
                       buttonText="Scopri"
                       onButtonClick={infoClick} />

        </>
    );
}

export default HomePage;