//Invio una serie di aler per dare il benvenuto e spiegare le funzioni del programma
alert('Benvenuto!Con questo programma potrai calcolare il prezzo del biglietto in base ai km percorsi.');
alert('Ti ricordiamo che il prezzo base del biglietto è uguale a 0,21€/KM');
alert('Gli under18 usufruiranno di uno sconto del 20%');
alert('Gli over65 usufruiranno di uno sconto del 40%');
alert('Segui le istruzioni a schermo per calcolare il costo del tuo biglietto');
//creo le variabili per memorizzare i dati inseriti dagli utenti,dichiaro le variabili per i calcoli
var result;
var sconto;
var km = prompt('Inserisci i KM che vuoi percorrere');
//controllo se il dato km è un numero e se è maggiore di zero e do un messaggio di errore all'utente in caso negativo
if (isNaN(km) || (km <= 0)){
    document.getElementById('error').innerHTML='Non hai inserito una dato corretto nella casella km si prega di ricaricare la pagina per ricominciare il calcolo';
    document.getElementById('error').setAttribute('class','show');
    }else{
    var eta = prompt('Inserisci la tua età');
    //controllo se il dato età è un numero e se è maggiore di zero e do un messaggio di errore all'utente in caso negativo
    if (isNaN(eta) || (eta<=0)) {
            document.getElementById('error').innerHTML='Non hai inserito una dato corretto nella casella età si prega di ricaricare la pagina per ricominciare il calcolo';
            document.getElementById('error').setAttribute('class','show');
        }//se il controllo inserimento dati è passato senza errori eseguo i calcoli
        else{
            document.getElementById('risulato').setAttribute('class','show');
            result = km * 0.21;
            console.log(result);
            if (eta < 18) {
                sconto = (20 * result)/100;
                console.log(sconto);
                result = result - sconto;
                console.log(result);
                document.getElementById('prezzo').innerHTML= result;
                document.getElementById('under18').setAttribute('class','show');
            }else if (eta >= 65) {
                sconto = (40 * result)/100
                console.log(sconto);
                result = result - sconto;
                console.log(result);
                document.getElementById('prezzo').innerHTML= result;
                document.getElementById('over65').setAttribute('class','show');
            }else{
                document.getElementById('prezzo').innerHTML= result;
            }
        }
}
