import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import CocktailDetails from './pages/CocktailDetails/CocktailDetails.jsx';
import Logo from "./assets/image/drink.svg";
import MainTemplate from "./components/MainTemplate.jsx";
import Menu from "./pages/Menu/Menu.jsx";
import './App.css'
import DefaultPage from "./pages/DefaultPage/DefaultPage.jsx";
import Info from "./pages/Info.jsx";

/**
 * App è il punto d'ingresso dell'applicazione e orchestra gli altri componenti
 * Si occupa di scaricare i dati dall'API una volta sola all'avvio dell'applicazione.
 * Aggiunge customId per facilitare la navigazione e permettere il controllo dell'id.
 * Definisce le varie rotte e quindi per ogni url quale componente mostrare, e avvolge
 * tutto nel MainTemplate per garantire che l'header e il footer siano presenti sempre.
 *
 * @returns {React.JSX.Element}
 * @constructor
 */
function App() {
    // mantiene la lista dei drinks estratti dall'API
    const [drinks, setDrinks] = useState([]);
    // gestisce lo stato di caricamento
    const [loading, setLoading] = useState(true);

    // configurazione del menu di navigazione
    const nav = [
        {url: "/", text: "Home"},
        {url: "/cocktail", text: "Menù"},
        {url: "Info", text: "Info"},
    ];
    // Effetto collaterale che viene fatto andare solo una volta, al montaggio del componente
    useEffect(() => {
        const fetchDrinks = async () => {
            try {
                const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
                const data = await response.json();
                // l'API restituisce id non sequenziali, quindi l'array viene mappato
                // per aggiungere un customId sequenziale
                const drinksModificati = data.drinks.map((drink, index) => {
                    return {
                        ...drink,
                        customId: index + 1
                    };
                });
                // aggiorniamo lo stato con il nuovo array di drink e mettiamo a false il loading
                setDrinks(drinksModificati);
                setLoading(false);

            } catch (error) {
                console.error("Errore:", error);
                setLoading(false);
            }
        };

        fetchDrinks();
    }, []);

    return (
        <Router>
            {/* main template che avvolge tutte le route*/}
            <MainTemplate
                navItems={nav}
                logo={Logo}
            >
                {/*Decide che componente renderizzare in base all'url*/}
                <Routes>
                    {/* url per andare all'HomePage, gli vengono passati i drinks e loading*/}
                    <Route
                        path="/"
                        element={<HomePage drinks={drinks} loading={loading} />}
                    />
                    {/* url per andare al Menu, gli vengono passati i drinks e loading*/}
                    <Route path="/cocktail"
                           element={<Menu drinks={drinks} loading={loading} />}
                    />
                    {/* url per andare alla pagina di dettaglio, la rotta è parametrica :id
                    passiamo tutti i drinks, in cui poi verrà cercato il drink con l'id specifico*/}
                    <Route path="/cocktail/:id"
                           element={<CocktailDetails drinks={drinks}/>} />
                    {/* url per andare alla pagina di Info*/}
                    <Route path="/info"
                           element={<Info />} />
                    {/* qualsisi url che non rientra nei casi pagina precedente porta a DefaultPage*/}
                    <Route path = "*" element={<DefaultPage />} />
                </Routes>
            </MainTemplate>
        </Router>
    );
}

export default App;