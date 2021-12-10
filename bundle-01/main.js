/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}
// la funzione è sbagliata perchè parte ha come condizione di essere eseguita finchè i > 5, ma partendo da 0, è una condizione che non si verifica mai

// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}
// la funzione analizza la varibile num al quale sarà associata un numero, se num diviso 2 ha resto zero allora vuol dire che è pari
// La funzione ha un errore di sintassi a riga 21 perchè un solo = corrisponde all'assegnazione del valore e non al confronto tra i due numeri,
// a riga 22 perchè return num + 5 è incompilabile dal codice e anche a livello logico è insensato, ha inoltre un secondo errore logico in quanto in caso di un numero ci sono due return.

// ESERCIZIO 3
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}
//la funzione stampa in console il numero i partendo da i = 0 e aumentando di uno ad ogni ciclo fino a I = 4, 

// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

//il codice vorrebbe filtrare in un secondo array i numeri primi contenuti nell'array numbers
// a riga 41 c'è un ; dopo i ++ che non va inserito
// a riga 43 aLL'interno dell'if c'è un solo = che corrisponde all'assegnazione del valore e non al paragone
// sempre a riga 43 c'è un ; inutile dopo la )
// per un corretto funzionamento del programma return evenNumbers dovrebbe essere posto all'esterno del ciclo for così da essere ritornato solo dopo che ogni numero venga filtrato nell'array dei numeri pari
// il programma ha un errore logico nel ciclo for, prende sempre numbers come array e mai i suoi elementi interni, qui si limita infatti ad analizzare per 8 volrte sempre lo stesso dato, dovrebbe invece prendere i come l'indice dell'array e far scorrere i suoi elementi