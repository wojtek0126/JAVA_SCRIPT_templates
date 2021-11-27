const tab = [
    { name: "Marcin", height: 183 },
    { name: "Ania", height: 173 },
    { name: "Agnieszka", height: 170 },
]

tab.sort(function(a, b) {
    //tekstów nie możemy odejmować. Możemy je porównywać poprzez > <, ale nie odejmować
    return a.name.localeCompare(b.name);
})

console.log(tab);