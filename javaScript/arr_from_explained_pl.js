// Metoda Array.from(ob, map*, this*) służy do tworzenia tablic z obiektów tablico podobnych.
// Obiekty takie są podobne do tablic, ale równocześnie nimi nie są.
// Przykładem takiego obiektu są kolekcje elementów pobranych ze strony,
// argumenty funkcji (arguments), czy np. classList dla elementów na stronie.
// Będziemy się o nich uczyć w kolejnych rozdziałach.

const ob = {
    0: "ala",
    1: "bela",
    length: 2
}

console.log(Array.from(ob)); //["ala", "bela"]

//pobieram kolekcję buttonów ze strony
const buttons = document.querySelectorAll("button");
console.log(buttons); //NodeList [button, button...]

const tab = Array.from(buttons);
console.log(tab); //Array [button, button...]

// Drugi opcjonalny parametr tej funkcji może zawierać funkcję map() dla tablic:

const ob = {
    0: "ala",
    1: "bela",
    length: 2
}

const tab = Array.from(ob, function(el) {
    return el.toUpperCase()
});
console.log(tab); //["ALA", "BELA"]

// Trzeci - równie opcjonalny parametr wskazuje na this. Działa on podobnie do stosowanego w przypadku metod dla tablic.
//  W praktyce w większości przypadków używany jest tylko pierwszy parametr czyli obiekt,
//   który poddajemy konwersji (tak jak w pierwszym przykładzie).

// W dzisiejszych czasach w wielu przypadkach zamiast powyższej metody możemy skorzystać ze spread syntax:

const buttons = document.querySelectorAll("button");
console.log(buttons); //NodeList [button, button...]

const buttonsTabA = [...buttons]; //array
const buttonsTabB = Array.from(buttons); //array

// Różnica między spread syntax a Array.from() jest taka,
//  że tą drugą możemy zastosować dla obiektów tablico podobnych, 
//  które nie mają zaimplementowanej własnej funkcji iterującej:

const ob = { 0: "a", 1: "b", length: 2 };

console.log(Array.from(ob)); //["a", "b"]

console.log([...ob]); //ob[Symbol.iterator] is not a function