import React from 'react';
import styles from './HeroSection.module.css';
import NavigateButton from "../NavigateButton/NavigateButton.jsx";

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