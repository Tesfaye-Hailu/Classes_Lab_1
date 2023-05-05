//Option 1 (MEDIUM) vehicles

//Create a set of JavaScript classes that model different vehicles. 
//Each vehicle should have a make, model, and year, as well as a method 
//that returns a string representing the vehicle's description (e.g. "2019 Toyota Camry").

//Your set of classes should include at least three different types of vehicles, 
//each with their own unique properties and methods. For example, you might create
// a "Car" class that has a number of doors and a "Truck" class that has a cargo capacity.

//Once you have created your classes, create instances of each type of vehicle and 
//test their methods to make sure they are working correctly.

class Vehicle {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    getDescription() {
      return `${this.year} ${this.make} ${this.model}`;
    }
  }
  
  class Car extends Vehicle {
    constructor(make, model, year, numDoors) {
      super(make, model, year);
      this.numDoors = numDoors;
    }
  
    getDescription() {
      return `${super.getDescription()}, ${this.numDoors} doors`;
    }
  }
  
  class Truck extends Vehicle {
    constructor(make, model, year, cargoCapacity) {
      super(make, model, year);
      this.cargoCapacity = cargoCapacity;
    }
  
    getDescription() {
      return `${super.getDescription()}, ${this.cargoCapacity} kgs of cargo capacity`;
    }
  }
  
  class Bus extends Vehicle {
    constructor(make, model, year, numberOfSeats) {
      super(make, model, year);
      this.numberOfSeats = numberOfSeats;
    }
  
    getDescription() {
      return `${super.getDescription()}, ${this.numberOfSeats} seats`;
    }
  }
  
  // Creating instances of each type of vehicle and testing their methods
  
  const myCar = new Car("Toyota", "Camry", 2019, 4);
  console.log(myCar.getDescription());
  
  const myTruck = new Truck("Toyota", "Hino 700", 2021, 27000);
  console.log(myTruck.getDescription());
  
  const myBus = new Bus("Hyundai", "Universe", 2021, 60);
  console.log(myBus.getDescription());
  