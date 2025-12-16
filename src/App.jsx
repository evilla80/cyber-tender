// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
import CocktailDetails from './components/CocktailDetails.jsx';
import Footer from "./components/Footer.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cocktail/:id" element={<CocktailDetails />} />
            </Routes>
        </Router>
    );
}

export default App;
