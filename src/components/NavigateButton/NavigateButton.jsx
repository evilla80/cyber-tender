import styles from './NavigateButton.module.css'

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