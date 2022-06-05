
//IMPORTING

//[importing car class]
const Car = require('./Car.js');

//[importing dealership class] 
const Dealership = require('./Dealership.js');


//--------TEST 1: Testing that method1 can count number of cars in stock-----------------------

describe("Dealership class test suite- methods", () => {

    test("check that can count number of cars in stock", () => {

        let name = "Car Utopia";
        let maximumCars = 16;
        let carsInStock = [new Car("Mini", 21600, "2.0 L 4-cylinder"), new Car("Ford", 26990, "2.7-Liter EcoBoost V-6"), new Car ("BMW", 37653, "Inline 6"),
        new Car("BMW", 45000, "V10"), new Car("Nissan", 10498, "1.0 L 3-cylinder"), new Car("Jaguar", 56110, "compact DOHC V8 piston engine"), new Car("Aston Martin", 120900, "4.0 L V8")]
        
        //newing up a dealer: 

        let dealer = new Dealership(name, maximumCars, carsInStock)

        const actual = dealer.countCarsInStock() 
        const expected = 7;
        expect(actual).toBe(expected);
    })

});

//--------TEST 2: Testing that method2 can add a car to stock-----------------------

describe("Dealership class test suite- methods", () => {

    test("check that can add a car to stock: ", () => {

        //setting up properties to be included in new dealership (readibility)
        let name = "Car Utopia";
        let maximumCars = 16;
        let carsInStock = [new Car("Mini", 21600, "2.0 L 4-cylinder"), new Car("Ford", 26990, "2.7-Liter EcoBoost V-6"), new Car ("BMW", 37653, "Inline 6"),
                          new Car("BMW", 45000, "V10"), new Car("Nissan", 10498, "1.0 L 3-cylinder"), new Car("Jaguar", 56110, "compact DOHC V8 piston engine"), new Car("Aston Martin", 120900, "4.0 L V8")];
        
        let carAvailableToAdd = [new Car("Lotus", 44640, "V8"), new Car ("Renault", 3000, "Petrol"), new Car("Volkwagen", 40000, "Diesel")]

        //using constructor to initialize new dealer 
        let dealer = new Dealership(name, maximumCars, carsInStock) 

        ///want to add Renault car i.e., index 1
        dealer.addCarToStock(carAvailableToAdd[1])    
        
        const actual =  dealer.countCarsInStock()        //counting number of cars in stock-  should be 8 because  we added 1 more car to the list of carsInstock. Prior to adding, number of carsInStock was 7
        const expected = 8;                               
        expect(actual).toBe(expected);
    })

});

//--------TEST 2.1: Testing that method2.1  Passes in adding car to stock based on maximumCars-----------------------

describe("Dealership class test suite- methods", () => {

    test(" Passes in adding car to stock based on maximumCars- ", () => {

        //setting up properties to be included in new dealership (readibility)
        let name = "Car Utopia";
        let maximumCars = 8;
        let carsInStock = [new Car("Mini", 21600, "2.0 L 4-cylinder"), new Car("Ford", 26990, "2.7-Liter EcoBoost V-6"), new Car ("BMW", 37653, "Inline 6"),
                          new Car("BMW", 45000, "V10"), new Car("Nissan", 10498, "1.0 L 3-cylinder"), new Car("Jaguar", 56110, "compact DOHC V8 piston engine"), new Car("Aston Martin", 120900, "4.0 L V8")];
        
        let carAvailableToAdd = [new Car("Lotus", 44640, "V8"), new Car ("Renault", 3000, "Petrol"), new Car("Volkwagen", 40000, "Diesel")]

        //using constructor to initialize new dealer 
        let dealer = new Dealership(name, maximumCars, carsInStock) 

        ///want to add a Lotus car i.e., index 0
        dealer.addCarToStock(carAvailableToAdd[0])       //will be pushable since we have 7 carsInStock at the momement and 7carsInStock <8 maximumCars
        
        const actual =  dealer.countCarsInStock()        //since it will be pushed, the countCarsInStock will now be increased by 1 car = 8 carsInStock, so we can also expect 8 
        const expected = 8;                                 
        expect(actual).toBe(expected);
    })

});


//--------TEST 2.2: Testing that method2.1 FAILS in adding car to stock based on maximumCars-----------------------

describe("Dealership class test suite- methods", () => {

    test(" Passes in adding car to stock based on maximumCars- ", () => {

        //setting up properties to be included in new dealership (readibility)
        let name = "Car Utopia";
        let maximumCars = 8;
        let carsInStock = [new Car("Mini", 21600, "2.0 L 4-cylinder"), new Car("Ford", 26990, "2.7-Liter EcoBoost V-6"), new Car ("BMW", 37653, "Inline 6"),
                          new Car("BMW", 45000, "V10"), new Car("Nissan", 10498, "1.0 L 3-cylinder"), new Car("Jaguar", 56110, "compact DOHC V8 piston engine"),
                           new Car("Aston Martin", 120900, "4.0 L V8"),  new Car("Volkwagen", 40000, "Diesel")];
        
        let carAvailableToAdd = [new Car("Lotus", 44640, "V8"), new Car ("Renault", 3000, "Petrol")]

        //using constructor to initialize new dealer 
        let dealer = new Dealership(name, maximumCars, carsInStock) 

        ///want to add Renault car i.e., index 1
        dealer.addCarToStock(carAvailableToAdd[0])       //is 8 at the moment,  and will not be pushable because we have 8 carsInStock, 
                                                        //if we try to push another, it will be 9 carsInStock !< 8maximumCars, hence would not be pushed 
        
        const actual =  dealer.countCarsInStock()        //has not be pushed (i.e. method succeeds in failing to push when carsInStock > maximumCars) 
                                                            //so it will remain at 8 and we can expect 8, rather than 9 
        const expected = 8;                                 
        expect(actual).toBe(expected);
    })

});


//--------TEST 3: Testing that method3 returns an array containing each car's manufacturer:----------------------

describe("Dealership class test suite- methods", () => {

    test("check that method3 returns an array containing each car's manufacturer:", () => {
       
        //setting up properties to be included in new dealership (readibility)
        let name = "Ana Flashy Cars";
        let maximumCars = 12;
        let carsInStock = [new Car("Aston Martin", 120900, "4.0 L V8"), new Car ("BMW", 37653, "Inline 6"),new Car("Jaguar", 56110, "compact DOHC V8 piston engine")];
        
        //using constructor to initialize new dealer 
        let dealer = new Dealership(name, maximumCars, carsInStock) 
        
        const actual =  dealer.carManufacturerNames()     
        const expected = ["Aston Martin", "BMW", "Jaguar"];                                
        expect(actual).toStrictEqual(expected);
    })
 })

 //--------TEST 4: Testing that method4 finds all cars from given manufacturer:----------------------


 describe("Dealership class test suite- methods", () => {

        test("check that method4 finds all cars from given manufacturer:", () => {
           
    
         let name= "Ana Wheels Supreme"
         let maximumCars = 20
         let carsInStock= [new Car("Volkwagen", 40000, "Diesel"), new Car("Honda", 2000, "Petrol"), new Car("Audi", 1000, "Diesel"), new Car ("BMW", 37653, "Inline 6"),
         new Car("BMW", 45000, "V10"),];
    
         let dealer =  new Dealership(name, maximumCars, carsInStock)
    
    
         // When call our dealership method
         
         const actual = dealer.carsByManufacturer("BMW").length;      //expect length of this array to be:
         const expected =  2                                                 // 1   
     
        // we call the Car constructor function and pass in a manufacturer of "Renault" and store it in a variable "actual", this variable cannot be reassigned but can be modified
    
        expect(actual).toBe(expected);
        
         });
    })
    


//--------TEST 4.1: Testing that method4.1 lets user search by price or engine type Insead of just manufacturer 


describe("Dealership class test suite- methods", () => {

    test("check that method4.1 lets user search by price or engine type Insead of just manufacturer ", () => {
       

     let name= "Ana Wheels Supreme"
     let maximumCars = 20
     let carsInStock= [new Car("Volkswagen", 40000, "Diesel"), new Car("Honda", 2000, "Petrol"), new Car("Audi", 1000, "Diesel"), new Car ("BMW", 37653, "Inline 6"),
     new Car("BMW", 45000, "V10"),];

     let dealer =  new Dealership(name, maximumCars, carsInStock);
    
     let Volkswagen = dealer.findBy("manufacturer", "Volkswagen");
     let engineTypeDiesel = dealer.findBy("engineType", "Diesel");
     let price8000 = dealer.findBy("price", "8000")


    expect(Volkswagen).toHaveLength(1);
    expect(engineTypeDiesel).toHaveLength(2);
    expect(price8000).toHaveLength(0);;
    
     });
})    


 //--------TEST 5: Testing that method5 finds total value of all the cars in----------------------

    describe("Dealership class test suite- methods", () => {

        test("check that method4 finds all cars from given manufacturer:", () => {
       

      let name= "Deluxe Sellers Of the Century"
      let maximumCars = 20
      let carsInStock= [new Car("Volkwagen", 40000, "Diesel"), new Car("Honda", 2000, "Petrol"), new Car("Audi", 1000, "Diesel"), new Car ("BMW", 37653, "Inline 6"),
      new Car("BMW", 45000, "V10"),];

      let dealer =  new Dealership(name, maximumCars, carsInStock);

      const actual = dealer.totalValue();      
      const expected = 125653;                                              
      expect(actual).toBe(expected);
     
  });


})

