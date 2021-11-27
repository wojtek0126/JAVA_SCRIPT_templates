// splice(index, ileUsunąć, noweElementy*...) 

const tab = ["Marcin", "Ania", "Agnieszka", "Monika"];

tab.splice(2, 1); //usuwam 1 element na indeksie 2
console.log(tab); //["Marcin", "Ania", "Monika"]

const tab = ["Marcin", "Ania", "Agnieszka", "Monika"];

tab.splice(1, 0, "A", "B") //nic nie usuwam i wstawiam nowe elementy przed indeks 1
console.log(tab); //["Marcin", "A", "B", "Ania", "Agnieszka", "Monika"]

const tab = ["pies", "kot", "chomik", "aligator", "świnka", "kanarek"];

const index = tab.indexOf("aligator"); //szukamy miejsce niepasującego zwierzaka
if (index >= 0) {
    tab.splice(index, 1);
    console.log(tab); //["pies", "kot", "chomik", "świnka", "kanarek"];
}