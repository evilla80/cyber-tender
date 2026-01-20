import React from 'react';
import styles from './HeroSection.module.css';

function HeroSection({title, message, img, onButtonClick}) {
    return (
        <div className={styles.container}>
            <img src={img} alt={title} />
            <div className={styles.overlay}></div>
            <div className={styles.textContainer}>
                <h1 className={styles.h1}>{title}</h1>
                <p className={styles.p}> {message}</p>
            </div>
            <button className={styles.button} onClick={onButtonClick}>
                {"Vai al menù"}
            </button>
        </div>
    )
}
export default HeroSection;