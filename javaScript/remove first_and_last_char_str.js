function removeChar(str) {
    const str2 = str.substring(1);
    const str3 = str2.slice(0, -1);
    // str.substring(0, -1) as well
    return str3
};

// return str.slice(1, -1);  easier way