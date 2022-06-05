
//IMPORTING

//[importing Car class]
const Car = require('./Car.js');

//[importing Dealership class]
const Dealership = require('./Dealership.js');

//[importing Customer class]
const Customer = require('./Customer.js');


//--------Testing customer canBuy Car, when they HAVE enouh money in wallet-----------------------------------

describe("Customer class test suite- properties", () => {

    test("checking that method1 of customer can buy car works - when customer has enough money in wallet", () => {

        //newing up car objects using constructor 
        const Volkswagen =  new Car("Volkswagen", 40000, "Diesel");
        const Honda =  new Car("Honda", 2000, "Petrol");
        const Audi =  new Car("Audi", 1000, "Diesel");
        const BMW =  new Car ("BMW", 37653, "Inline 6");
        
        //Dealership storage variables
        let dealerName= "Ana Wheels Supreme";
        let maximumCars = 13;
        let carsInStock= [Volkswagen, Honda, Audi, BMW];

        //newing up a dealer using constructor + dealership storage variables 
        let bestDealer =  new Dealership(dealerName, maximumCars, carsInStock);  

        //Customer storage variables  
        let customerName = "Ana";
        let customerWallet = 360000;

        //newing up customer using constructor + customer storage variables 
        let AnaCustomer = new Customer(customerName, customerWallet);
        
        //Giving customer a dealer to be able to buy car from, because it starts off null, so link them up 
        AnaCustomer.dealer = bestDealer;

    
        //let Ana customer buy a carInStock from 'bestDealer'- e.g. a Honda (index 1)
        AnaCustomer.buyCar(bestDealer.carsInStock[1]); //could have just written Honda also 
            console.log(AnaCustomer); //shows AnaCustomer as having a Honda car now 
        

        //Actual and Expected possible tests:

        //testing customer bought car
        const actual_hasCar =  AnaCustomer.car      
        const expectedCar = Honda    
        expect(actual_hasCar).toBe(expectedCar);

        //testing wallet has been reduced after car purchase
        const actual_walletReduce =  AnaCustomer.wallet  
        const expectedWallet = 358000 
        expect(actual_walletReduce).toBe(expectedWallet);

        //testing customer has been assigned a dealer i.e., not null as before 
        const actual_hasDealer =  AnaCustomer.dealer
        const expectedDealer = bestDealer
        expect(actual_hasDealer).toBe(expectedDealer);

        //testing that  amount of dealer carsInStock has reduced after customer bought car
        const actual_dealerstockReduced=  bestDealer.carsInStock.length
        const expected_dealerstockReduced = 3
        expect(actual_dealerstockReduced).toBe(expected_dealerstockReduced);
        
    })


//--------Testing customer canBuy Car, when they DO NOT have enough money in wallet-----------------------------------

describe("Customer class test suite- properties", () => {

    test("checking that method1 of customer can buy car works - when customer does not have enough money in wallet", () => {

        //newing up car objects using constructor 
        const Volkswagen =  new Car("Volkswagen", 40000, "Diesel");
        const Honda =  new Car("Honda", 2000, "Petrol");
        const Audi =  new Car("Audi", 1000, "Diesel");
        const BMW =  new Car ("BMW", 37653, "Inline 6");
        
        //Dealership storage variables
        let dealerName= "Ana Wheels Supreme";
        let maximumCars = 13;
        let carsInStock= [Volkswagen, Honda, Audi, BMW];

        //newing up a dealer using constructor + dealership storage variables 
        let bestDealer =  new Dealership(dealerName, maximumCars, carsInStock);  

        //Customer storage variables  
        let customerName = "Ana";
        let customerWallet = 1000;

        //newing up customer using constructor + customer storage variables 
        let AnaCustomer = new Customer(customerName, customerWallet);
        
        //Giving customer a dealer to be able to buy car from, because it starts off null, so link them up 
        AnaCustomer.dealer = bestDealer;

    
        //let Ana customer buy a carInStock from 'bestDealer'- e.g. a Honda (index 1)
        AnaCustomer.buyCar(bestDealer.carsInStock[1]); //could have just written Honda also 
            console.log(AnaCustomer); //shows AnaCustomer as having a Honda car now 
        

        //Actual and Expected possible tests:

        //testing customer boughtCar - should be null since they do not have enough money 
        const actual_hasNoCar =  AnaCustomer.car      
        const expectedCar = null
        expect(actual_hasNoCar).toBe(expectedCar);

        //testing wallet has NOT been reduced after not being able to buy a car purchase
        const actual_walletRemainsUnchanged =  AnaCustomer.wallet  
        const expectedWallet = 1000
        expect(actual_walletRemainsUnchanged).toBe(expectedWallet);

        // testing that amount of dealer carsInStock has NOT reduced after customer failed to buy car
        const actual_dealerstockRemainsSame=  bestDealer.carsInStock.length
        const expected_dealerstockRemainsUnchanged = 4
        expect(actual_dealerstockRemainsSame).toBe(expected_dealerstockRemainsUnchanged);
        
    })







});
})