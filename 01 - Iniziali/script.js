/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function isCapital(names) {
    const firstLetter = []
    for (let i = 0; i < names.length; i++ ) {
    const name = names[i]
        for (let j = 0; j < name.length; j++) {
            const capital = name[j]
            if (capital >= "A" && capital <= "Z") {
                firstLetter.push(capital)
            }
        }
        
    }
    return firstLetter
}


// Invoca la funzione qui e stampa il risultato in console
const result = isCapital(names)
console.log(result)

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]