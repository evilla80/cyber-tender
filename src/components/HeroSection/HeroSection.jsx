import React from 'react';
import styles from './HeroSection.module.css';
import NavigateButton from "../NavigateButton/NavigateButton.jsx";

/**
 * Rappresenta la sezione principale nella schermata di Home
 * Ha un'immagine di sfondo con sopra uno strato scuro un
 * contenitore contenente il nome dell'app e un bottone
 *
 * @param title - nome dell'applicazione
 * @param message - sottotitolo
 * @param img - l'immagine di sfondo
 * @param onButtonClick - funzione di callback chiamata quando il bottone viene schiacciato
 * @returns {React.JSX.Element}
 * @constructor
 */
function HeroSection({title, message, img, onButtonClick}) {
    const buttonText = "Vai al Menu"

    return (
        <div className={styles.container}>
            <img src={img} alt={title} />
            <div className={styles.overlay}></div>
            <div className={styles.textContainer}>
                <h1 className={styles.h1}>{title}</h1>
                <p className={styles.p}> {message}</p>
                <NavigateButton buttonText={buttonText}
                                onPress={onButtonClick} />
            </div>
        </div>
    )
}
export default HeroSection;