import drink from '../assets/image/info_drink.jpg'
import React from "react";
import RightGrid from "./RightGrid/RightGrid.jsx";

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
            <RightGrid title = {title} message = {message} img = {drink}/>
        </>
    )
}
export default Info;