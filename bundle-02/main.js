/*******************************************************************************
​
    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
function checkAge() {
    const myAge = 32;
    const message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
}
checkAge();

// il codice controlla se il numero 32 è maggiore o minore di 18 e in seguito comunica i risultati, non è quindi adattabile, dovrebbe invece ricevere il valore di myAge come un dato variabile.
// a riga 16 message viene dichiara come una costante, il che impedisce che poi possa venire riscritto 

// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
}
printColorsNumber();
// dichiarato l'array di colori, la funzione mostra in console quanti colori ne fanno parte
// lenght si scrive length
// il nome della funzione dovrebbe essere pintColorsLength per correttezza logica

// ESERCIZIO 3
function addNumbers() {
    const userNumber = prompt('Inserisci un numero');
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();
// il programma fa inserire un numero all'utente e aggiunge il numero 12 come caratteri al termine della striscia numerica
// per eseguire una somma tra il nuemro dato dall'utente e 12 bisogna sostituire riga 42 con: const total = parseInt(userNumber) + parseInt(5);

// ESERCIZIO 4
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    if (addresses.includes(userEmail)) {
        grantAccess = 'true';
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();
//la funzione verifica se un e mail data dall'utente risulta presente in una lsita di e mail contenuta in un array
// a riga 62 true va tra virgolette '', perchè la funzione deve comparare il valore di grantAccess con la stringa 'true', in quesot caso invece la funzione cerca una variabile true per cercare il valore al suo interno, e non trovandola da sempre negativa l'opzione dell'if


// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    for (let i = 0; i < addresses.length; i++) {
     const email = addresses[i];
        
      if (userEmail.length > 5) {
            
        if (email === userEmail) {
        grantAccess = 'true';            
            
      }
        
    }

    if (grantAccess) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }    
}
checkAccessImproved();


// ci sono degli errori nella chiusure delle parentesi graffe in particolare manca quella di chiusura finale della funzione
// l'interno dell'if a riga 92 non ha significato e anche a riga 83 userEmail.length non ha senso in quanto userEmail non è un array

























