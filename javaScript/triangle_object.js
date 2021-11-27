class Triangle {
    constructor(ab, bc, ac) {
        this.ab = ab;
        this.bc = bc;
        this.ac = ac;
    }
    isTriangle() {
        if (this.ab + this.bc <= this.ac || this.ab + this.ac <= this.bc || this.bc + this.ac <= this.ab) {
            return false;
        } else return true;
    }
    getPerimeter() {
        if (this.isTriangle() === true) return this.ab + this.bc + this.ac;
        else return false
    }
    getArea() {
        if (this.isTriangle() === true) {
            const s = (this.ab + this.bc + this.ac) / 2;
            return Math.sqrt(s * (s - this.ab) * (s - this.bc) * (s - this.ac));
        } else return false;
    }
}


// class Triangle {
//     constructor(a, b, c) {
//         this.a = a,
//         this.b = b,
//         this.c = c
//     }
//     isTriangle() {

//         if(this.a > this.b && this.a > this.c && this.a < this.b + this.c) {
//             return true
//         } else if (this.b > this.a && this.b > this.c && this.b < this.a + this.c){
//             return true
//         } else if (this.c > this.a && this.c > this.b && this.c < this.a + this.b) {
//             return true
//         } else {
//             return false
//         }
//     }
//     circuitCount() {
//         if (this.isTriangle(true)) {
//             return `Obwód trójkąta wynosi ${this.a + this.b + this.c}`
//         } else {
//             return `Z tych danych nie policzysz obwodu trójkąta byku`
//         }
//     }
//     squareCount() {
//         if (this.isTriangle(true)) {
//               const p = (this.a + this.b + this.c)/2;
//               const s = Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c))
//               console.log(`Pole trójkąta wynosi ${s}`)   
//         } else {
//             return `Z tych danych nie policzysz pola trójkąta byku`
//         }
//     }      

// }

//  const tri1 = new Triangle(6,5,3)
//  console.log(tri1.isTriangle())
//  console.log(tri1.circuitCount())
//  console.log(tri1.squareCount())