import error from "../../assets/image/error.svg"
import style from "./DefaultPage.module.css"

/**
 * Componente che restituisce una pagina di errore
 * quando un drink non viene trovato oppure
 * vengono inseriti parametri sbagliati nell'url
 *
 * @returns {JSX.Element}
 * @constructor
 */
function DefaultPage() {
    return (
        <div className={style.container}>
            <img src={error} alt="error" className={style.errorImage}/>
            <h1 className={style.h1}> Errore </h1>
            <h4 className={style.h4}> Drink non trovato, torna alla Home</h4>
        </div>
    )
}
export default DefaultPage;