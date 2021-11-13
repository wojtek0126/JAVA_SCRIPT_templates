function gooseFilter(birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    birdsArr = birds;

    filteredArr = birdsArr.filter(val => !geese.includes(val));
    return filteredArr;

};