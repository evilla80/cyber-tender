import styles from "./RightGrid.module.css";
import NavigateButton from "../NavigateButton/NavigateButton.jsx";

function RightGrid({title, message, img, showButton, buttonText, onButtonClick}){

    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <h1> {title} </h1>
                <p> {message} </p>
                {showButton && (
                    <NavigateButton
                        buttonText={buttonText}
                        onPress={onButtonClick} />


                )}
            </div>
            <div className={styles.imageWrapper}>
                <img className={styles.image} src={img} alt="" />
            </div>
        </div>
    )
}
export default RightGrid;