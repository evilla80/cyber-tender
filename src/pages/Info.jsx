import drink from '../assets/image/info_drink.jpg'
import React from "react";
import RightGrid from "../components/RightGrid/RightGrid.jsx";

/**
 * Componente il cui unico scopo è quello di preparare
 * il testo e l'immagine specifica per la sezione di Info
 * e passarli a RightGrid
 *
 * @returns {React.JSX.Element}
 * @constructor
 */
function Info(){
    const title="Scopri qualcosa su Cyber Tender..."
    const message=(
        <>
            Cyber Tender nasce con l'obiettivo di farti da bussola
            nel vasto mondo dei cocktail...
            <br />
            Non importa se sei un esperto bartender alla ricerca di
            varianti complesse o un semplice curioso che vuole imparare
            a preparare il suo primo Mojito: qui troverai sempre l'ispirazione giusta.
            <br />
            Cyber tender offre una selezione che spazia dai grandi
            classici intramontabili, fino alle nuove tendenze .
            Ogni drink ha le sue istruzioni dettagliate, perché crediamo
            che il piacere di un buon cocktail inizi proprio dalla sua
            preparazione. Esplora, sperimenta e trova il tuo drink perfetto.
        </>
    )
    return (
        <>
            {/*Utilizza Right Grid come nel componente Info,
            vengono passati titolo, messaggio, immagine e il bottone
            non viene visualizzato*/}
            <RightGrid title = {title} message = {message} img = {drink}/>
        </>
    )
}
export default Info;