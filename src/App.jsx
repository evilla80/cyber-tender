// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
import CocktailDetails from './components/CocktailDetails.jsx';
import Logo from "./assets/image/drink.png"
import MainTemplate from "./components/MainTemplate.jsx";


function App() {

    const nav = [
        {url: "/", text: "Home"},
        {url: "/cocktail", text: "Menù"},
        {url: "Info", text: "Info"},
    ]
    return (
        <Router>
            <MainTemplate
                footerCourse = "Applicazioni Web: Progettazione e Sviluppo"
                footerCourseLink = "https://elearning.unimib.it/course/view.php?id=61231"
                navItems = {nav}
                logo = {Logo}
            >
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/cocktail" element={<HomePage />} />
                    <Route path="/cocktail/:id" element={<CocktailDetails />} />
                    <Route path="/info" element={<HomePage />} />
                </Routes>
            </MainTemplate>
        </Router>
    );
}

export default App;
