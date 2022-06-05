
//IMPORTING

//[importing car class]
const Car = require('./Car.js');


//constructor function set up:

const Dealership = function (name, maximumCars, carsInStock) {  //constructor function 

     //Properties
    
     this.name = name;
     this.maximumCars = maximumCars;
     this.carsInStock = carsInStock;
       
}


//DEALERSHIP METHODS (BEHAVIOURS)------------------------------------------------------------------------------------------

//Rather than defining methods in the constructor function above, I attached methods to dealership prototype, such that
//any dealership can access the methods 


//[Method1- Count the number of cars in stock]:

Dealership.prototype.countCarsInStock =  function () {        //as anonymous function 
  return this.carsInStock.length;

};


//[Method2- add a car to stock]:

Dealership.prototype.addCarToStock = function (car) {                       
 this.carsInStock.push(car);
}


//[Method2.1- modify the method for adding car to stock to ensure can't add more cars than have space for]:

Dealership.prototype.addCarToStock = function (car) {  
  if(this.carsInStock.length < this.maximumCars){           
  this.carsInStock.push(car)};
 }
 
 

//Method3- Return an array containing each car's manufacturer:


Dealership.prototype.carManufacturerNames = function () {

let carManufacturerArray = [];
let array = this.carsInStock;

for(item in array){
  carManufacturerArray.push(array[item].manufacturer);
}

return carManufacturerArray;

};



//Method4- finds all cars from given manufacturer: 

Dealership.prototype.carsByManufacturer = function (name)  {
  return this.carsInStock.filter(carInStock => carInStock.manufacturer == name );
};



//Method4.1 modify the method which searches for cars by manufacturer to let user search by price or engine type Insead 

Dealership.prototype.findBy= function (by, value) {

  let result = [];

  switch(by){
    case "manufacturer": return this.carsInStock.filter(carInStock => carInStock.manufacturer == value )
     break;
    case "price": return this.carsInStock.filter(carInStock => carInStock.price == value)
     break;
    case "engineType": return this.carsInStock.filter(carInStock => carInStock.engineType == value)
     break;
     
    default:
        result= []
        break;
  }

}


//Method5 find total value of all the cars in stock:

Dealership.prototype.totalValue = function () {

  const initialValue = 0;     // second argument for reduce function, set initial rpice 


  // for each car in stock (carInStock), will get its price using map–
  // map will create a new array from a current array i.e., the carsInStock array 
  //this new array will be stored in a constant variable called 'priceArray', which is where all the prices for the cars can be found 
  
  const priceArray = this.carsInStock.map(carInStock => carInStock.price)


  //using reduce to condense priceArray values to single number:
  return priceArray.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
                                                          //note that first argument= callback function, second = initialValue
  }



//Method6 sell car to customer - removes a car from dealership and updates customer car property 

  Dealership.prototype.sell = function(desiredCar) {  //note that sell = removing car from dealer 
    
    index_of_desired_car = this.carsInStock.findIndex(carInStock => carInStock.car === desiredCar)
      updatedCarsInStock= this.carsInStock.splice(index_of_desired_car, 1)    //(index start removing, how many)- now carsInStock will not have the desiredCar
                          //now the array of carsInStock has been modified  with the desiredCar being removed 

        
    //Alternatively, could do: 

  //  Dealership.prototype.sell = function(desiredCar) {

  //  let ArrayWithoutDesiredCar = this.carsInStock.filter(carInStock => carInStock != desiredCar )
    
  //   this.carsInStock = ArrayWithoutDesiredCar;
  //}
}



  module.exports = Dealership;



  