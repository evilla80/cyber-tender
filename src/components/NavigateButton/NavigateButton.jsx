import styles from './NavigateButton.module.css'

/**
 * Bottone di navigazione, una volta cliccato
 * viene effettuata una callback dal componente genitore.
 *
 * @param buttonText - testo da visualizzato all'interno del bottone
 * @param onPress - funzione di callback chiamata quando il bottone viene schiacciato
 * @returns {JSX.Element}
 * @constructor
 */
function NavigateButton({buttonText, onPress}) {
    return(
        <button
            className={styles.button}
            onClick={onPress}
        >
            {buttonText}
        </button>
    )
}
export default NavigateButton