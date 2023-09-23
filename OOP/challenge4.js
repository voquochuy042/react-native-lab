class CarCl {
    constructor(make, currentSpeed) {
        this.make = make;
        this.currentSpeed = currentSpeed;
    }

    accelerate() {
        this.currentSpeed += 10;
        console.log(`${this.make} is accelerating to ${this.currentSpeed} km/h`);
        return this; // Enable method chaining
    }

    brake() {
        this.currentSpeed -= 5;
        console.log(`${this.make} is slowing down to ${this.currentSpeed} km/h`);
        return this; // Enable method chaining
    }
}

class EVCl extends CarCl {
    #charge = 0; // Private charge property

    constructor(make, currentSpeed, charge) {
        super(make, currentSpeed);
        this.#charge = charge;
    }

    chargeBattery(chargeTo) {
        this.#charge = Math.min(100, chargeTo);
        console.log(`${this.make} is charging to ${this.#charge}%`);
        return this; // Enable method chaining
    }

    accelerate() {
        if (this.#charge > 0) {
            super.accelerate(); // Call the parent class's accelerate method
            this.#charge -= 1;
            console.log(`${this.make} going at ${this.currentSpeed} km/h, with a charge of ${this.#charge}%`);
        } else {
            console.log(`${this.make} cannot accelerate. The battery is empty.`);
        }
        return this; // Enable method chaining
    }
}

// Test data
const car1 = new EVCl('Rivian', 120, 23);

// Experiment with chaining
car1
    .accelerate()
    .chargeBattery(90)
    .accelerate()
    .brake()
    .accelerate();
