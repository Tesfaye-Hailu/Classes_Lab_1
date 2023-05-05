//Option 1 (MEDIUM) vehicles

//Create a set of JavaScript classes that model different vehicles. 
//Each vehicle should have a make, model, and year, as well as a method 
//that returns a string representing the vehicle's description (e.g. "2019 Toyota Camry").

//Your set of classes should include at least three different types of vehicles, 
//each with their own unique properties and methods. For example, you might create
// a "Car" class that has a number of doors and a "Truck" class that has a cargo capacity.

//Once you have created your classes, create instances of each type of vehicle and 
//test their methods to make sure they are working correctly.

// class Vehicle {
//     constructor(make, model, year) {
//       this.make = make;
//       this.model = model;
//       this.year = year;
//     }
  
//     getDescription() {
//       return `${this.year} ${this.make} ${this.model}`;
//     }
//   }
  
//   class Car extends Vehicle {
//     constructor(make, model, year, numDoors) {
//       super(make, model, year);
//       this.numDoors = numDoors;
//     }
  
//     getDescription() {
//       return `${super.getDescription()}, ${this.numDoors} doors`;
//     }
//   }
  
//   class Truck extends Vehicle {
//     constructor(make, model, year, cargoCapacity) {
//       super(make, model, year);
//       this.cargoCapacity = cargoCapacity;
//     }
  
//     getDescription() {
//       return `${super.getDescription()}, ${this.cargoCapacity} kgs of cargo capacity`;
//     }
//   }
  
//   class Bus extends Vehicle {
//     constructor(make, model, year, numberOfSeats) {
//       super(make, model, year);
//       this.numberOfSeats = numberOfSeats;
//     }
  
//     getDescription() {
//       return `${super.getDescription()}, ${this.numberOfSeats} seats`;
//     }
//   }
  
//   // Creating instances of each type of vehicle and testing their methods
  
//   const myCar = new Car("Toyota", "Camry", 2019, 4);
//   console.log(myCar.getDescription());
  
//   const myTruck = new Truck("Toyota", "Hino 700", 2021, 27000);
//   console.log(myTruck.getDescription());
  
//   const myBus = new Bus("Hyundai", "Universe", 2021, 60);
//   console.log(myBus.getDescription());
  


//Option 2 (HARD) calculator class

//Create a JavaScript class that models a simple calculator. The calculator should have 
//methods for performing basic arithmetic operations such as addition, subtraction,
// multiplication, and division. It should also have a method for clearing the current value.

//The calculator should store the current value as a property of the class and update it as 
//operations are performed. For example, if the calculator starts with a value of 0 and the
// user performs the operation "2 + 3", the calculator's current value should be updated to 5.

//Once you have created your calculator class, create an instance of the class and test
// its methods to make sure they are working correctly. You could also consider adding additional 
//functionality, such as a method for calculating the square root or percentage of the current value.

class Calculator {
    constructor() {
      this.currentValue = 0;
    }
  
    add(number) {
      this.currentValue += number;
    }
  
    subtract(number) {
      this.currentValue -= number;
    }
  
    multiply(number) {
      this.currentValue *= number;
    }
  
    divide(number) {
      if (number === 0) {
        throw new Error("Cannot divide by zero");
      }
      this.currentValue /= number;
    }
  
    clear() {
      this.currentValue = 0;
    }
  
    getCurrentValue() {
      return this.currentValue;
    }
  
    squareRoot() {
      this.currentValue = Math.sqrt(this.currentValue);
    }
  
    percentage(percentageValue) {
      this.currentValue = (percentageValue / 100) * this.currentValue;
    }
  }
  
  // Testing the calculator class
  
  const calculator = new Calculator();
  
  
  calculator.add(100);
  console.log(calculator.getCurrentValue()); // output:100
  
  calculator.subtract(50);
  console.log(calculator.getCurrentValue()); // Output: 50
  
  calculator.multiply(3);
  console.log(calculator.getCurrentValue()); // Output: 150
  
  calculator.divide(25);
  console.log(calculator.getCurrentValue()); // Output: 6
 
  
  calculator.squareRoot();
  console.log(calculator.getCurrentValue()); // Output: 2.44948
  
  calculator.percentage(50);
  console.log(calculator.getCurrentValue()); // Output: 1.2247448

   
//   calculator.clear();
//   console.log(calculator.getCurrentValue()); // Output: 0
  
  
