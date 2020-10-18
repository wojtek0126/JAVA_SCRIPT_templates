const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
class RPGCharacter {
    constructor(name, power, intelligence, luck) {
        this.name = name;
        this.power = power;
        this.intelligence = intelligence;
        this.luck = luck;
    }
    whoWin (atr, player, oponent){
        if(player[atr]>oponent[atr]){
            console.log(`wygrał ${player.name} z wynikiem ${player[atr]} do ${oponent[atr]}`)
        } else if(player[atr]<oponent[atr]){
            console.log(`wygrał ${oponent.name} z wynikiem ${oponent[atr]} do ${player[atr]}`)
        } else{
            console.log('remis')
        }
    }
    fight(name) {
        console.log("Wynik walki")
        this.whoWin( `power`, this, name)
    }
    playChess(name){
        console.log("Wynik gry w szachy")
        this.whoWin( `intelligence`, this, name)
    }
    tossCoin(name){
        console.log("rzutu monetą")
        this.whoWin( `luck`, this, name)
    }
    allFights(name){
        this.fight(name)
        this.playChess(name)
        this.tossCoin(name)
    }
}
class Elf extends RPGCharacter {
    constructor(name) {
        super(name);
        this.power = random(30, 80);
        this.intelligence = random(60, 100)
        this.luck = random(20, 100);
    }
}
class Dwarf extends RPGCharacter {
    constructor(name) {
        super(name);
        this.power = random(40, 100);
        this.intelligence = random(40, 80)
        this.luck = random(40, 100);
    }
}
class Orc extends RPGCharacter {
    constructor(name) {
        super(name);
        this.power = random(50, 100);
        this.intelligence = random(5, 20)
        this.luck = random(1, 100);
    }
}
const dwarf = new Dwarf("Durin Kamienny Topór");
const orc = new Orc("Urk'har Niszczyciel");
const elf = new Elf("Naylee z Nieśmiertelnego Lasu");
dwarf.allFights(orc)