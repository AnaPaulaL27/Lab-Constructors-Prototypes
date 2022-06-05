
//IMPORTING

//[importing Car class]
const Car = require('./Car.js');


//--------Testing can get manufacturer----------------------------

describe("Car class test suite- properties", () => {

    test("check that manufacturer property is accessible", () => {

        const actual = Car("Mini", 21600,"2.0 L 4-cylinder"  ) 
        const expected = this.manufacturer
        expect(actual).toBe(expected);

    })

});

// //--------Testing can get price----------------------------

describe("Car class test suite- properties", () => {

    test("check that price property is accessible", () => {

        const actual = Car("Ford", 26990, "2.7-Liter EcoBoost V-6")
        const expected = this.price;
        expect(actual).toBe(expected);
    })

});

// //--------Testing can get engineType----------------------------

describe("Car class test suite- properties", () => {

    test("check that engine type property is accessible", () => {

        const actual = Car("BMW", 37653, "Inline 6") 
        const expected = this.engineType
        expect(actual).toBe(expected);
    })

});


