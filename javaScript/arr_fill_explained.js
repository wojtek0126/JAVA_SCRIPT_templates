// (what, from index, to index)

const tab = new Array(20);
console.log(tab); //[empty x 20]
tab.fill("kot");
console.log(tab); //["kot", "kot", "kot", ...]
console.log("co" + tab.join("")) //"cokotkotkotkot..."


const tab2 = [];
tab2.length = 15;
console.log(tab2); //[empty x 15]
tab2.fill("kot", 2, 5);
console.log(tab2); //[empty × 2, "kot", "kot", "kot", empty × 10]


const tab3 = [1, 2, 3, 4, 5];
tab3.fill("pies", 2);
console.log(tab3); //[1, 2, "pies", "pies", "pies"]