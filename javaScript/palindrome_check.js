const isPalindrome = (string1, string2) => {
    if (string1.split("").reverse().join("") == string2) return true
    else return false
}