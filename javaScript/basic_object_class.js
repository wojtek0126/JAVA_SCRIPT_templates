class Player {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.hp = 0
    }
    greet() {
        console.log(`Welcome ${this.name}!`);
        return this // return this enables method chaining
    }
    updateHP() {
        this.hp += 40
        console.group(`Hp is now ${this.hp}`);
        return this // return this enables method chaining
    }
}

const player1 = new Player("Franko", "blue");

console.log(player1.name);

player1.updateHP(); // 40 
player1.updateHP(); // 80

player1.greet().updateHP().updateHP() //method chaining