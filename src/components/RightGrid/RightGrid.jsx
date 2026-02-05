import styles from "./RightGrid.module.css";
import NavigateButton from "../NavigateButton/NavigateButton.jsx";

/**
 * Viene visualizzata una sezione divisa in due colonne:
 * a sinistra c'è un titolo e un testo sotto
 * a destra c'è un'immagine
 *
 * @param title - titolo della sezione
 * @param message - corpo del testo
 * @param img - l'immagine a destra
 * @param showButton - flag per sapere se renderizzare il bottone
 * @param buttonText - testo del bottone (nel caso showButton=true)
 * @param onButtonClick - handler del click sul bottone (nel caso showButton=true)
 * @returns {JSX.Element}
 * @constructor
 */
function RightGrid({title, message, img, showButton, buttonText, onButtonClick}){

    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <h1> {title} </h1>
                <p> {message} </p>
                // se showButton è false React ignora NavigateButton
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