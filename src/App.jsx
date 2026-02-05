import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
import CocktailDetails from './components/CocktailDetails/CocktailDetails.jsx';
import Logo from "./assets/image/drink.svg";
import MainTemplate from "./components/MainTemplate.jsx";
import Menu from "./components/Menu/Menu.jsx";
import './App.css'
import DefaultPage from "./components/DefaultPage/DefaultPage.jsx";
import Info from "./components/Info.jsx";


function App() {

    const [drinks, setDrinks] = useState([]);


    const [loading, setLoading] = useState(true);


    const nav = [
        {url: "/", text: "Home"},
        {url: "/cocktail", text: "Menù"},
        {url: "Info", text: "Info"},
    ];


    useEffect(() => {
        const fetchDrinks = async () => {
            try {
                const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
                const data = await response.json();

                const drinksModificati = data.drinks.map((drink, index) => {
                    return {
                        ...drink,
                        customId: index + 1,
                        // Crea uno slug URL-friendly
                        urlSlug: drink.strDrink.toLowerCase().replace(/\s+/g, '-')
                    };
                });

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
            <MainTemplate
                navItems={nav}
                logo={Logo}
            >
                <Routes>
                    <Route
                        path="/"
                        element={<HomePage drinks={drinks} loading={loading} />}
                    />
                    {/* ... resto delle rotte ... */}
                    <Route path="/cocktail"
                           element={<Menu drinks={drinks} loading={loading} />}
                    />

                    <Route path="/cocktail/:id"
                           element={<CocktailDetails drinks={drinks}/>} />

                    <Route path="/info"
                           element={<Info message={<>...</>} />} /> {/* Ho abbreviato per brevità */}
                    <Route path = "*" element={<DefaultPage />} />
                </Routes>
            </MainTemplate>
        </Router>
    );
}

export default App;