const users = [{
        name: "Marcin",
        car: {
            name: "Toyota",
            age: 10
        }
    },
    {
        name: "Marcin",
        car: {
            name: "Fiat",
            age: 15
        }
    },
    {
        name: "Monika",
        car: {
            name: "BMW",
            age: 5
        }
    },
]

//sortuje po wieku samochodu
users.sort((a, b) => {
    return a.car.age - b.car.age
});

console.log(users);