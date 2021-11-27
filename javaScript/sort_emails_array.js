const mails = [
    "marcin@wp.pl",
    "marcin@gmail.pl",
    "marcin@onet.pl",
    "marcin@interia.pl"
]

//sortuje po domenach
//z użyciem funkcji strzałkowej
mails.sort((a, b) => {
    const aDomain = a.substr(a.indexOf("@"));
    const bDomain = b.substr(b.indexOf("@"));
    return aDomain.localeCompare(bDomain);
})

console.log(mails);