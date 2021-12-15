// Your code here

class Polygon {
    constructor(arraySides) {
        this.arraySides = arraySides
    }

    get countSides() {
        return this.arraySides.length
    }

    get perimeter() {
        const reducer = (previousValue, currentValue) => previousValue + currentValue;
        return this.arraySides.reduce(reducer);
    }
}


class Triangle extends Polygon {
    //inherits constructor, and methods from Polygon
        get isValid() {
            if (this.arraySides.length !==3) { //must be a polygon of 3 sides
                return console.log("Given polygon does not have 3 sides")
            } //ignored if this.arraySides.length === 3

            let x = this.arraySides[0]
            let y = this.arraySides[1]
            let z = this.arraySides[2]
            if (x + y > z && y + z > x && x + z > y) { //ALL pairs of sides must be greater than the third side
                console.log("Triangle is valid");
                return true
            } else {
                console.log("Cannot construct triangle from this array");
                return false
            }
        }
    }


class Square extends Polygon {
    //inherits constructor, and methods from Polygon
    get area() {
        if (this.arraySides.length === 4) {
            let x = this.arraySides[0]
            console.log(x**2)
            return x**2
        } else {
            return console.log("Given polygon is not a square")
        }

    }
    get isValid() { //checking if all sides are equal
        let a = this.arraySides[0];
        let b = this.arraySides[1];
        let c = this.arraySides[2];
        let d = this.arraySides[3];
        if (a === b && a === c && a === d) {
            return true
        } else {
            return false
        }
    }

}