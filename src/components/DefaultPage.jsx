import error from "../assets/image/error.svg"
import style from "./DefaultPage.module.css"

function DefaultPage() {
    return (
        <div className={style.container}>
            <img src={error} alt="error" className={style.errorImage}/>
            <h1 className={style.h1}> Errore </h1>
            <h3 className={style.h3}> Drink non trovato, torna alla Home</h3>
        </div>
    )
}
export default DefaultPage;