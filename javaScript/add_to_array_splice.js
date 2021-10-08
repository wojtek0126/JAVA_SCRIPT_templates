// array.splice(start, deleteCount[, item1[, item2[, ...]]])

// start
//     Indeks od którego rozpoczynamy modyfikację tablicy.

// deleteCount
//     Liczba całkowita określająca liczbę starych elementów tablicy do usunięcia. Jeżeli deleteCount wynosi 0,
//      nic nie zostanie usunięte. W tym przypadku należy podać co najmniej jeden nowy element.
//       W przypadku gdy parametr deleteCount nie został podany (druga forma składni podana powyżej,
//          która jest rozszerzeniem SpiderMonkey), wszystkie elementy o indeksach wyższych lub równych index są usuwane.

// itemN
//     Elementy dodawane do tablicy. Jeżeli nie określimy żadnych elementów, splice usunie tylko podaną liczbę elementów. 


// splice() overwrites the original array.
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, add 2 elements: 
fruits.splice(2, 0, "Lemon", "Kiwi");

// Banana,Orange,Lemon,Kiwi,Apple,Mango

// from docs
myFish = ["anioł", "klaun", "mandarynka", "jesiotr"];
console.log("myFish: " + myFish);

removed = myFish.splice(2, 0, "bęben");
console.log("Po dodaniu 1: " + myFish);
console.log("Usunięty jest: " + removed);

removed = myFish.splice(3, 1)
console.log("Po usunięciu 1: " + myFish);
console.log("Usunięty jest: " + removed);

removed = myFish.splice(2, 1, "trąba")
console.log("Po zastąpieniu 1: " + myFish);
console.log("Usunięty jest: " + removed);

removed = myFish.splice(0, 2, "papuga", "zawilec", "niebieski")
console.log("Po zastąpieniu 2: " + myFish);
console.log("Usunięty jest: " + removed);