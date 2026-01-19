import React from 'react';
import styles from './HeroSection.module.css';

function HeroSection({title, img}) {
    return (
        <div className={styles.container}>
            <img src={img} alt={title} />
            <div className={styles.overlay}></div>
            <div className={styles.textContainer}>
                <h1>{title}</h1>
            </div>
        </div>
    )
}
export default HeroSection;