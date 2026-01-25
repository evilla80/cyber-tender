import React, {useState} from 'react';
import CardsGrid from './CardsGrid';
import styles from './Menu.module.css'
import clsx from 'clsx';
import List from "./List.jsx";

function Menu({ drinks, loading }) {
    const [displayGrid, setDisplayGrid] = useState("true");

    if (loading) return <div className="loading">Caricamento menù...</div>;

    return (
        <div style={{margin: 30}}>
            <h1>Il nostro Menù</h1>
            <p>Scegli il tuo drink preferito</p>
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
                    <CardsGrid
                        drinkList={drinks}
                    /> :
                    <List drinkList={drinks}/>
            }
        </div>
    );
}

export default Menu;