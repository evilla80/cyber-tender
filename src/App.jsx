import React, { useState, useEffect } from 'react'; // Ricordati di importare questi hook!
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
import CocktailDetails from './components/CocktailDetails.jsx';
import Logo from "./assets/image/drink.svg";
import MainTemplate from "./components/MainTemplate.jsx";
import Menu from "./components/Menu.jsx";
import './App.css'
import DefaultPage from "./components/DefaultPage.jsx";
import Info from "./components/Info.jsx";

function App() {
    // 1. Definisci lo stato qui nel genitore
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
                footerCourse="Applicazioni Web: Progettazione e Sviluppo"
                footerCourseLink="https://elearning.unimib.it/course/view.php?id=61231"
                navItems={nav}
                logo={Logo}
            >
                <Routes>
                    <Route
                        path="/"
                        element={<HomePage drinks={drinks} loading={loading} />}
                    />

                    <Route
                        path="/cocktail"
                        element={<Menu drinks={drinks} loading={loading} />}
                    />

                    <Route path="/cocktail/:id" element={<CocktailDetails drinks={drinks}/>} />

                    <Route path="/info" element={<Info
                                                       message={
                                                           <>
                                                               Cyber Tender nasce con l'obiettivo di farti da bussola
                                                               nel vasto mondo dei cocktail...
                                                               <br />
                                                               Non importa se sei un esperto bartender alla ricerca di
                                                               varianti complesse o un semplice curioso che vuole imparare
                                                               a preparare il suo primo Mojito: qui troverai sempre l'ispirazione giusta.
                                                               <br />
                                                               Cyber tender offre una selezione che spazia dai grandi
                                                               classici intramontabili, fino alle nuove tendenze .
                                                               Ogni drink ha le sue istruzioni dettagliate, perché crediamo
                                                               che il piacere di un buon cocktail inizi proprio dalla sua
                                                               preparazione. Esplora, sperimenta e trova il tuo drink perfetto.
                                                           </>
                                                       }/>} />
                    <Route path = "*" element={<DefaultPage />} />
                </Routes>
            </MainTemplate>
        </Router>
    );
}

export default App;