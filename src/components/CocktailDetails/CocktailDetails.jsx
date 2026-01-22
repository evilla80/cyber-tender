import React, { useEffect, useState } from 'react';
import {Navigate, NavLink, useParams} from 'react-router-dom';
import style from './CocktailDetails.module.css';

function CocktailDetails({drinks}) {
    let { id } = useParams();
    const [cocktail, setCocktail] = useState(null);

    if (!/^\d+$/.test(id)) {
        return <Navigate to="/404" replace />;
    }

    const numericId = Number(id)

    const foundDrink = drinks.find((drink) => drink.customId === numericId);

    if (!foundDrink) {
        return <Navigate to="/404" replace />;
    }

    useEffect(() => {
        if (drinks.length === 0) return;

        const fetchDetails = async () => {

            const apiId = foundDrink.idDrink;
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${apiId}`);
            const data = await response.json();
            setCocktail(data.drinks[0]);
        };
        fetchDetails();
    }, [id]);

    if ( !cocktail) {
        return <div className={style.loading}>
            { "Caricamento lista..." }
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
                <div className={style.navigation}>

                    {numericId > 1 &&
                        <NavLink className={`${style.prev} ${style.navItem}`}
                                 to={`/cocktail/${numericId - 1}`}>&lt; Prev</NavLink>
                    }

                    {/* Controllo lunghezza array più pulito */}
                    {numericId < drinks.length &&
                        <NavLink className={`${style.next} ${style.navItem}`}
                                 to={`/cocktail/${numericId + 1}`}>Next &gt;</NavLink>
                    }
                </div>

                <div className={style.detailsGrid}>
                    <div className={style.imageWrapper}>
                        <img
                            src={cocktail.strDrinkThumb}
                            alt={cocktail.strDrink}
                            className={style.drinkImage}
                        />
                    </div>

                    <div className={style.infoWrapper}>
                        <h1 className={style.title}>{cocktail.strDrink}</h1>

                        <div className={style.tagsContainer}>
                            <span className={style.tag}>{cocktail.strCategory}</span>
                            <span className={style.tag}>{cocktail.strAlcoholic}</span>
                            <span className={style.tag}>{cocktail.strGlass}</span>
                        </div>

                        <h3 className={style.sectionTitle}>Ingredienti</h3>
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