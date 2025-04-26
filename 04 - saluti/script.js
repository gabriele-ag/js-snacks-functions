/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';


// Dichiara la funzione qui.
function sayHello(name) {
    const saluto = "Ciao" + " ";
    const salutoUtente = saluto + name;
    return salutoUtente;
    
}


// Invoca la funzione qui e stampa il risultato in console
const result = sayHello(name)
console.log(result)


//Risultato atteso se si passa 'Mario': // ciao Mario