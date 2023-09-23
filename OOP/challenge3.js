// Define the Car constructor function
function Car(make, currentSpeed) {
    this.make = make;
    this.currentSpeed = currentSpeed;
}

// Define the Electric Car (EV) constructor function as a child class of Car
function EV(make, currentSpeed, charge) {
    // Call the parent constructor (Car) with the provided arguments
    Car.call(this, make, currentSpeed);
    this.charge = charge; // Add the charge property for the EV
}

// Set up the prototype chain to inherit from Car
EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV; // Set the constructor back to EV

// Implement the 'chargeBattery' method
EV.prototype.chargeBattery = function(chargeTo) {
    this.charge = Math.min(100, chargeTo); // Ensure charge does not exceed 100%
};

// Implement the 'accelerate' method
EV.prototype.accelerate = function() {
    if (this.charge > 0) {
        this.currentSpeed += 20;
        this.charge -= 1;
        console.log(
            `${this.make} going at ${this.currentSpeed} km/h, with a charge of ${this.charge}%`
        );
    } else {
        console.log(`${this.make} cannot accelerate. The battery is empty.`);
    }
};

// Example usage:
const myElectricCar = new EV('Tesla', 65, 90); // Creating an Electric Car instance

myElectricCar.accelerate(); // Accelerate the car
myElectricCar.chargeBattery(90); // Charge the battery to 90%
myElectricCar.accelerate(); // Accelerate again
myElectricCar.accelerate(); // Accelerate once more
myElectricCar.accelerate(); // Try to accelerate when the battery is empty
