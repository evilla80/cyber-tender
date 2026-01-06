import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from './CocktailDetails.module.css'; // Importiamo il CSS Module

function CocktailDetails({drinks}) {
    const { id } = useParams();
    const [cocktail, setCocktail] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (drinks.length === 0) return;

        const fetchDetails = async () => {
            setLoading(true);

            const foundDrink = drinks.find((drink) => drink.customId === Number(id))

            if (foundDrink) {
                const apiId = foundDrink.idDrink;
                try {
                    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${apiId}`);
                    const data = await response.json();
                    setCocktail(data.drinks[0]);
                } catch (error) {
                    console.error("Errore fetch dettagli:", error);
                } }
            else {
                console.error("Drink non trovato");
            }
            setLoading(false);
        };
        fetchDetails();
    }, [id]);

    if (loading || !cocktail) {
        return <div className={style.loading}>
            {drinks.length === 0 ? "Caricamento lista..." : "Preparazione drink..."}
        </div>;
    }

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
        <div className={style.pageContainer}>
            <div className={style.contentWrapper}>

                <div className={style.detailsGrid}>

                    {/* Immagine */}
                    <div className={style.imageWrapper}>
                        <img
                            src={cocktail.strDrinkThumb}
                            alt={cocktail.strDrink}
                            className={style.drinkImage}
                        />
                    </div>

                    {/* Dati e Ricetta */}
                    <div className={style.infoWrapper}>
                        <h1 className={style.title}>{cocktail.strDrink}</h1>

                        <div className={style.tagsContainer}>
                            <span className={style.tag}>{cocktail.strCategory}</span>
                            <span className={style.tag}>{cocktail.strAlcoholic}</span>
                            <span className={style.tag}>{cocktail.strGlass}</span>
                        </div>

                        <h3 className={style.sectionTitle} style={{marginTop: 0}}>Ingredienti</h3>
                        <ul className={style.ingredientsList}>
                            {getIngredients().map((item, index) => (
                                <li key={index} className={style.ingredientItem}>
                                    <span>{item.name}</span>
                                    <span className={style.measure}>{item.measure}</span>
                                </li>
                            ))}
                        </ul>

                        <h3 className={style.sectionTitle}>Istruzioni</h3>
                        <p className={style.instructionsText}>
                            {cocktail.strInstructionsIT || cocktail.strInstructions}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CocktailDetails;