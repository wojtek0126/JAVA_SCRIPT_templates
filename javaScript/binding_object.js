const hero = {
    _name = "Johnny",
    getSecretIdentity: function() {
        return this._name
    }
}

// result undefined
const stoleSecretIdentity = hero.getSecretIdentity;

// result 'Johnny'
const stoleSecretIdentity = hero.getSecretIdentity.bind(hero);

console.log(stoleSecretIdentity()) //undefined without bind
console.log(hero.getSecretIdentity()) //'Johnny'

const stoleSecretIdentity = hero.getSecretIdentity;