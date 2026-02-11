# Cyber Tender

**Cyber Tender** è una Single Page Application (SPA) sviluppata in React, per il progetto
facoltativo di "Applicazioni Web: Progettazione e sviluppo". 
Cyber Tender permette agli utenti di consultare un elenco di cocktail, permettendogli anche 
di visualizzare le loro ricette. 

L'applicazione si interfaccia con [TheCocktailDB API](https://www.thecocktaildb.com/) 
per fornire dati in tempo reale.

## Tecnologie
Il progetto è stato realizzato utilizzando le seguenti tecnologie e librerie:
* React: Libreria per la costruzione dell'interfaccia basata su componenti.
* Vite: Build tool utilizzato per l'inizializzazione del progetto.
* React Router Dom: Gestore del routing, che permette la navigazione tra le varie pagine
(Home, Menu, Dettaglio, Info)senza il ricaricamento della intera pagina.
* CSS Modules: utilizzati per lo stile dei singoli componenti in modo che il CSS non crei conflitti
tra le diverse parti dell'app.
* Fetch API: Standard utilizzato per recuperare i dati dei cocktail dall'API.
* Bootstrap 5: utilizzato per la griglia di cards e alcuni stili base.


## Struttura del progetto
Il progetto è organizzato in due directory principali:
* public/: Contiene i file statici pubblici e l'icona del sito (favicon).
* src/: È la cartella radice del codice sorgente.
  * assets/: Contiene le immagini statiche utilizzate nell'interfaccia.
  * components/: Contiene tutti i componenti riutilizzabili, sia componenti atomici come 
  Button e SingleCard che layout come Header, Footer e MainTemplate.
  * pages/: Contiene le pagine principali gestite dal Router. Ogni file qui corrisponde 
  a una rotta URL (es. HomePage per /, CocktailDetails per /cocktail/:id). 
  * utils/: contiene una sola funzione di supporto utilizzata in CocktailDetails per 
  parsare gli ingredienti e le misure dei cocktail ricevute dall'API.
  * App.jsx: Il componente principale, che gestisce la definizione delle rotte e
  la logica di normalizzazione dei dati dei drinks.
  * main.jsx: l'entry point dell'applicazione che monta l'albero nel DOM. 

### Analisi componenti chiave
Il progetto applica principalmente concetti visti a lezione o nei laboratori, come
la gestione delle rotte, l'utilizzo di useState e useEffect, la suddivisione dell'interfaccia
in componenti riutilizzabili e altro ancora. 

Durante lo sviluppo però ho incontrato delle sfide specifiche relative alla mia API, oppure
ho voluto implementare cose in modo diverso. 

* L'API fornisce ID non sequenziali (es. 11007, 17830), rendendo impossibile creare una navigazione 
logica "Precedente/Successivo" basata sull'id. Per risolvere il problema all'avvio dell'applicazione 
viene scaricata l'intera lista di cocktail e viene assegnato a ogni cocktail un customId sequenziale.
Questo nuovo id permette di gestire la navigazione, mantenendo l'id originale per le chiamata API.
* Il componente Menu, permette la visualizzazioni dei dati in due modi differenti. Attraverso uno switch 
si può scegliere se visualizzare i cocktail in una griglia di cards oppure in una lista, questo sfruttando
il rendering dinamico. 
Inoltre il componente ha al suo interno una barra di ricerca che permette di filtrare l'array dei cocktail
e quindi i cocktail visualizzati in tempo reale.
* CoktailDetails permette di visualizzare una scheda approfondita con gli ingredienti le dosi e le istruzioni
per comporre il drink selezionato. Mostra due pulsanti, precedente e successivo per scorrere i drink senza
dover tornare al menù. 
* Per gestire gli errori viene utilizzato il componente DefaultPage, che tramite Navigate viene visualizzata
quando viene inserito qualcosa di scorretto nell'url.


## Provare il progetto in locale

1.  **Clonare la repository:**
    ```bash
    git clone https://github.com/evilla80/cyber-tender.git
    ```
2.  **Entra nella cartella:**
    ```bash
    cd cyber-tender
    ```
3.  **Installa le dipendenze:**
    ```bash
    npm install
    ```
4.  **Avvia il server di sviluppo:**
    ```bash
    npm run dev
    ```
