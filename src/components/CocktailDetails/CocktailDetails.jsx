import React, { useEffect, useState } from 'react';
import {Navigate, NavLink, useParams} from 'react-router-dom';
import style from './CocktailDetails.module.css';
import { extractIngredients } from '../../utils/ingredientsUtils.jsx';

function CocktailDetails({drinks}) {
    let { id } = useParams();
    const [cocktail, setCocktail] = useState(null);
    const [loading, setLoading] = useState(false)
    //Rendo l'id numerico e cerco il drink corrispondente nell'array drinks
    const numericId = Number(id)
    const foundDrink = drinks.find((drink) => drink.customId === numericId);


    useEffect(() => {
        //se non troviamo il drink non facciamo partire la fetch
        if(!foundDrink) return; 

        const fetchDetails = async () => {
            setLoading(true)
            const apiId = foundDrink.idDrink;
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${apiId}`);
            const data = await response.json();
            setCocktail(data.drinks[0]);
            setLoading(false)
        };
        fetchDetails();
    }, [id, foundDrink]);

    //se l'array drinks è vuoto, vuol dire che il genitore
    //sta ancora scaricando i dati
    if (drinks.length === 0) {
        return <div className={style.loading}>
            { "Caricamento lista..." }
        </div>;
    }
    //se l'array è pieno ma non è un numero o non
    //un numero corretto allora mando alla pagina 404
    if (!/^\d+$/.test(id) || !foundDrink) {
        return <Navigate to="/404" replace />;
    }

    if (loading || !cocktail) {
        return <div className={style.loading}>
            { "Caricamento lista..." }
        </div>;
    }
    
    const ingredientList = extractIngredients(cocktail)
    const instructions = cocktail.strInstructionsIT || cocktail.strInstructions;

    return (
        <div className={style.pageContainer}>
            <div className={style.contentWrapper}>
                {/*Permette la navigazione prev/next tramite NavLink */}
                <div className={style.navigation}>
                    {numericId > 1 &&
                        <NavLink className={`${style.prev} ${style.navItem}`}
                                 to={`/cocktail/${numericId - 1}`}>&lt; Prev</NavLink>
                    }
                    {numericId < drinks.length &&
                        <NavLink className={`${style.next} ${style.navItem}`}
                                 to={`/cocktail/${numericId + 1}`}>Next &gt;</NavLink>
                    }
                </div>

                <div className={style.detailsGrid}>
                    {/*Colonna a sinistra per l'immagine*/}
                    <div className={style.imageWrapper}>
                        <img
                            src={cocktail.strDrinkThumb}
                            alt={cocktail.strDrink}
                            className={style.drinkImage}
                        />
                    </div>
                    {/*Colonna a destra per le informazioni*/}
                    <div className={style.infoWrapper}>
                        {/*Nome del cocktail*/}
                        <h1 className={style.title}>{cocktail.strDrink}</h1>
                        {/*Tag per le varie categorie*/}
                        <div className={style.tagsContainer}>
                            <span className={style.tag}>{cocktail.strCategory}</span>
                            <span className={style.tag}>{cocktail.strAlcoholic}</span>
                            <span className={style.tag}>{cocktail.strGlass}</span>
                        </div>

                        <h3 className={style.sectionTitle}>Ingredienti</h3>
                        {/*Lista degli ingredienti con le misure*/}
                        <ul className={style.ingredientsList}>
                            {ingredientList.map((item, index) => (
                                <li key={index} className={style.ingredientItem}>
                                    <strong>{item.name}</strong>
                                    {item.measure && (
                                        <span className={style.measure}> {item.measure}</span>
                                    )}
                                </li>
                            ))}
                        </ul>

                        {/* Istruzioni */}
                        <h3 className={style.sectionTitle}>Istruzioni</h3>
                        <p className={style.instructionsText}>
                            {instructions}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CocktailDetails;