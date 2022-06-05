
//IMPORTING

//[importing Car class]
const Car = require('./Car.js');

//[importing Dealership class]
const Dealership = require('./Dealership.js');


//constructor function set up:

const Customer = function (name, wallet) {  //constructor function 

    //properties
    this.name = name
    this.wallet = wallet;
    this.car = null;        //initially customer has no car; intentional absesnce of object value 
    this.dealer = null;     //initially customer has no dealership;intentional absesnce of object value 
    
}


//CUSTOMER METHODS (BEHAVIOURS)------------------------------------------------------------------------------------------

//Rather than defining methods in the constructor function above, I attached methods to customer prototype, such that
//any customer can access the methods 


//[Method1- Give customer a buyCar method which removes Car from dealership and updates their car property]:

Customer.prototype.buyCar =  function (car) {        

    extra = Math.abs(this.wallet - car.price)

    if(this.wallet >= car.price && this.dealer != null)
        
        //removing car from dealer 
        {this.dealer.sell(car)  
            console.log("Thank you for your pruchase " + this.name)
        
        //reducing amount in wallet because just bought car: same thing as: this.wallet = (this.wallet - car.price)     
        this.wallet -= car.price 
                console.log("your wallet amount is now £" + this. wallet)
        
        //assigning bought car to customer, so that customer car status is no longer null         
        this.car = car   
              
        }
        //(supplementary) if customer customer wallet < than car.price, then console.log  
        else{
            console.log(" Your card has been declined... have insufficient funds at the moment, you need an extra £ " + extra + " to purchase that car " + this.name)

        }



  };


module.exports = Customer;

