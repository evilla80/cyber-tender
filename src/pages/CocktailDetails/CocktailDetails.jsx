import React, { useEffect, useState } from 'react';
import {Navigate, NavLink, useParams} from 'react-router-dom';
import style from './CocktailDetails.module.css';
import { extractIngredients } from '../../utils/ingredientsUtils.jsx';

/**
 * Componente che permette la visualizzazione del dettaglio di un drink,
 * recuperando l'id del cocktail da visualizzare dall'url e cercandolo nella lista.
 * Una volta trovato il cocktail scarica altre informazioni dell'API.
 * (ingredienti, misure e istruzioni).
 * Gestisce anche la navigazione tra il dettaglio dei cocktail con prec/succ
 *
 * @param drinks
 * @returns {React.JSX.Element}
 * @constructor
 */
function CocktailDetails({drinks}) {
    // prendo l'id che viene inserito nell'url
    let { id } = useParams();
    const [cocktail, setCocktail] = useState(null);
    // controllo se l'id passato è un numero
    const isValidId = /^\d+$/.test(id);
    //Rendo l'id numerico e cerco il drink corrispondente nell'array drinks
    const numericId = Number(id)
    const foundDrink = drinks.find((drink) => drink.customId === numericId);

    useEffect(() => {
        if (!foundDrink) return;

        const fetchDetails = async () => {
            const apiId = foundDrink.idDrink;
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${apiId}`);
            const data = await response.json();
            setCocktail(data.drinks[0]);
        };
        fetchDetails();
    }, [id]);

    //se drinks è ancora vuoto, bisogna aspettare
    if (!drinks || drinks.length === 0) {
        return <div className={style.loading}>
            { "Caricamento dettagli..." }
        </div>;
    }

    // se l'id passato non è un numero oppure
    // se non trovo nessun drink che corrisponda mando alla pagina 404
    if (!isValidId || !foundDrink) {
        return <Navigate to="/404" replace />;
    }

    // se cocktail è ancora vuoto, allora la fetch non ha finito
    if (!cocktail) {
        return <div className={style.loading}>
            { "Caricamento dettagli..." }
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
                                 to={`/cocktail/${numericId - 1}`}>&lt; Precedente</NavLink>
                    }
                    {numericId < drinks.length &&
                        <NavLink className={`${style.next} ${style.navItem}`}
                                 to={`/cocktail/${numericId + 1}`}>Successivo &gt;</NavLink>
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