class Car{
    constructor(make,speed) {
        this.make = make
        this.speed = speed
    }
    accelerate(){
        this.speed += 10
        console.log(this.speed)
    }
    brake(){
        this.speed -= 5
        console.log(this.speed)
    }
}
const honda = new Car("dream", 110)
honda.accelerate()
honda.brake()

const BMW = new Car("Mercedes", 110)
BMW.accelerate()
BMW.brake()

const Mercedes = new Car("Mercedes", 110)
Mercedes.accelerate()
Mercedes.brake()