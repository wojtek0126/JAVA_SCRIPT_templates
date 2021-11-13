function correct(string) {
    const str = string;
    let str1 = str.split('0').join('O').split('1').join('I').split('5').join('S');
    return str1

    //   correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S') also correct
}