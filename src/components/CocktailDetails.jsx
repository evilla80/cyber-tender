import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function CocktailDetails(){
    const { id } = useParams();
    const [cocktail, setCocktail] = useState(null);

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
                const data = await response.json();
                setCocktail(data.drinks[0]);
            } catch (error) {
                console.error("Errore:", error);
            }
        };

        fetchDetails();
    }, [id]);

    if (!cocktail) return <div style={{textAlign: 'center', marginTop: '50px', color: 'white'}}>Preparazione drink...</div>;

    const getIngredients = () => {
        let ingredients = [];
        for (let i = 1; i <= 15; i++) {
            if (cocktail[`strIngredient${i}`]) {
                ingredients.push({
                    name: cocktail[`strIngredient${i}`],
                    measure: cocktail[`strMeasure${i}`] || ''
                });
            }
        }
        return ingredients;
    };

    return (
        <div style={{ backgroundColor: '#1a1a1a', minHeight: '100vh', color: 'white', padding: '40px', fontFamily: 'Arial, sans-serif' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <Link to="/" style={{ textDecoration: 'none', color: '#f39c12', fontWeight: 'bold', fontSize: '1.1rem' }}>← Torna al Bar</Link>

                <div style={{ display: 'flex', gap: '50px', marginTop: '40px', flexWrap: 'wrap', alignItems: 'flex-start' }}>

                    {/* Immagine */}
                    <div style={{ flex: '1', minWidth: '300px' }}>
                        <img
                            src={cocktail.strDrinkThumb}
                            alt={cocktail.strDrink}
                            style={{ width: '100%', borderRadius: '15px', border: '2px solid #333', boxShadow: '0 0 30px rgba(0,0,0,0.5)' }}
                        />
                    </div>

                    {/* Dati e Ricetta */}
                    <div style={{ flex: '1.2' }}>
                        <h1 style={{ fontSize: '3.5rem', margin: '0 0 10px 0', color: '#f39c12' }}>{cocktail.strDrink}</h1>
                        <div style={{ display: 'flex', gap: '15px', marginBottom: '30px' }}>
                    <span style={{ backgroundColor: '#333', padding: '5px 12px', borderRadius: '20px', fontSize: '0.9rem' }}>
                        {cocktail.strCategory}
                    </span>
                            <span style={{ backgroundColor: '#333', padding: '5px 12px', borderRadius: '20px', fontSize: '0.9rem' }}>
                        {cocktail.strAlcoholic}
                    </span>
                            <span style={{ backgroundColor: '#333', padding: '5px 12px', borderRadius: '20px', fontSize: '0.9rem' }}>
                        {cocktail.strGlass}
                    </span>
                        </div>

                        <h3 style={{ borderBottom: '1px solid #444', paddingBottom: '10px' }}>Ingredienti</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {getIngredients().map((item, index) => (
                                <li key={index} style={{ padding: '8px 0', borderBottom: '1px solid #2a2a2a', display: 'flex', justifyContent: 'space-between' }}>
                                    <span>{item.name}</span>
                                    <span style={{ color: '#f39c12' }}>{item.measure}</span>
                                </li>
                            ))}
                        </ul>

                        <h3 style={{ borderBottom: '1px solid #444', paddingBottom: '10px', marginTop: '30px' }}>Istruzioni</h3>
                        <p style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#ccc' }}>
                            {cocktail.strInstructionsIT || cocktail.strInstructions}
                            {/* Nota: Se esiste la traduzione IT la usa, altrimenti usa quella inglese */}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CocktailDetails;