// Coding Challenge #7
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
//     / (height * height)(mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height(Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI(the same
// method on both objects).Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI.Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall.John weights 92 kg and is 1.95 m
// tall.

// const Mark = {
//     fullName: "Mark Zuckerberg",
//     mass: 70,
//     height: 1.69,
//     calcBMI() {
//         this.bmi = this.mass / (this.height ** 2)
//         // console.log(ibm)
//         return this.bmi;
//     }
// }
// const Elon = {
//     fullName: "Elon Musk",
//     mass: 80,
//     height: 1.81,
//     calcBMI() {
//         this.bmi = this.mass / (this.height ** 2)
//         // console.log(ibm)
//         return this.bmi;
//     }
// }
// let message = Mark.bmi > Elon.bmi ?
//     `${Mark.fullName}'s BMI (${Mark.bmi}) is higher than ${Elon.fullName}'s BMI (${Elon.bmi})` :
//     `${Elon.fullName}'s BMI (${Elon.bmi}) is higher than ${Mark.fullName}'s BMI (${Mark.bmi})`

// console.log(message)


class Person {
    constructor(fullName, mass, height) {
        this.fullName = fullName;
        this.mass = mass;
        this.height = height;
    }
    calcBMI() {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
}


const Mark = new Person("Mark Zuckerberg", 70, 1.69);
const Elon = new Person("Elon Musk", 80, 1.81);

Mark.calcBMI();
Elon.calcBMI();

let message = Mark.bmi > Elon.bmi ?
    `${Mark.fullName}'s BMI (${Mark.bmi}) is higher than ${Elon.fullName}'s BMI (${Elon.bmi})` :
    `${Elon.fullName}'s BMI (${Elon.bmi}) is higher than ${Mark.fullName}'s BMI (${Mark.bmi})`;

console.log(message);
