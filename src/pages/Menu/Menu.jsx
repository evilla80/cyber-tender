import React, {useState} from 'react';
import CardsGrid from '../../components/CardsGrid.jsx';
import styles from './Menu.module.css'
import List from "../../components/List.jsx";

/**
 * Questo componente permette di visualizzare il menù in due modi diversi,
 * gestisce infatti lo stato della modalità di visualizzazione.
 * Mostra e gestisce l'input text per effettuare una ricerca dei cocktail
 * in base al loro nome
 *
 * @param drinks - lista completa dei cocktail ricevuta dall'API
 * @param loading - booleano per gestire il caricamento dei dati
 * @returns {React.JSX.Element}
 * @constructor
 */
function Menu({ drinks, loading }) {
    //stato che gestisce se visualizzare la griglia di card oppure la lista
    const [displayGrid, setDisplayGrid] = useState(true);
    // stato che permette di memorizzare ciò che viene scritto nell'input text
    const [searchText, setSearchText] = useState("");
    // handler per aggiornare lo stato serchText quando l'utente digita qualcosa
    const handleSearch = (e) => {
        setSearchText(e.target.value);
    }
    //fa una lista con i drink che corrispondono a ciò che viene cercato
    const filteredDrinkList = drinks.filter((drink) => {
        return drink.strDrink.toLowerCase().includes(searchText.toLowerCase());
    });

    if (loading) return <div className="loading">Caricamento menù...</div>;

    return (
        <div className={styles.container}>
            <h1>Il nostro Menù</h1>
            <h4>Un viaggio alla scoperta del gusto: esplora la nostra selezione e lasciati ispirare dai migliori cocktail del mondo.</h4>

            <div className={styles.switch}>
                <div
                    // se la parte della switch della griglia viene cliccata viene impostato
                    // displayGrid a true e viene applicato lo stile active a questa parte
                    onClick={() => setDisplayGrid(true)}
                    className={`${styles.option} ${displayGrid ? styles.active : ''}`}
                >
                    Griglia
                </div>
                <div
                    // se la parte della switch della Lista viene cliccata viene impostato
                    // displayGrid a false e viene applicato lo stile active a questa parte
                    onClick={() => setDisplayGrid(false)}
                    className={`${styles.option} ${!displayGrid ? styles.active : ''}`}
                >
                    Lista
                </div>
            </div>
            {/*Rendering condizionale, se displayGrid è a true allora viene mostrata la griglia,
            se è a false viene mostrata la lista. Ad entrambi i componenti vengono passate le stesso props*/}
            {
                displayGrid ?
                    <CardsGrid search={handleSearch} text={searchText} filteredList={filteredDrinkList} showInputText={true}/>
                    :
                    <List search={handleSearch} text={searchText} filteredList={filteredDrinkList} />
            }
        </div>
    );
}

export default Menu;