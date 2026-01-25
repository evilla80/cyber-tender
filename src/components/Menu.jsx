import React, {useState} from 'react';
import CardsGrid from './CardsGrid';
import styles from './Menu.module.css'
import clsx from 'clsx';
import List from "./List.jsx";

function Menu({ drinks, loading }) {
    const [displayGrid, setDisplayGrid] = useState("true");
    const [searchText, setSearchText] = useState("");
    const handleSearch = (e) => {
        setSearchText(e.target.value);
    }

    const filteredDrinkList = drinks.filter((drink) => {
        return drink.strDrink.toLowerCase().includes(searchText.toLowerCase());
    });

    if (loading) return <div className="loading">Caricamento menù...</div>;

    return (
        <div className={styles.container}>
            <h1>Il nostro Menù</h1>
            <h4>Un viaggio alla scoperta del gusto: esplora la nostra selezione e lasciati ispirare dai migliori cocktail del mondo.</h4>

            <div className={styles.switch}>
                <div className={clsx(styles.option, {[styles.active]: displayGrid})}
                     onClick={() => setDisplayGrid(true)}>
                    Griglia
                </div>
                <div className={clsx(styles.option, {[styles.active]: !displayGrid})}
                     onClick={() => setDisplayGrid(false)}>
                    Lista
                </div>
            </div>
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