function calcAverageHumanAge1 (dogsAge){
    let dog= []
    let sum = 0
    for (let i=0; i<dogsAge.length; i++){
        if (dogsAge[i] <= 2){
            dog.push(2 * dogsAge[i])
        }
        else if (dogsAge[i] > 2 && dogsAge[i] < 18){
            dog.push(16 + dogsAge[i] * 4)
        }
    }
    dog.forEach((d,index)=>{
        sum +=d
        // console.log(sum,index)
    })

    let avg = sum/dog.length
    return {
        dog,
        avg
    }
}
const age = calcAverageHumanAge1([5, 2, 4, 1, 15, 8, 3,100])
const age2 = calcAverageHumanAge1([16, 6, 10, 5, 6, 1, 4])
console.log(age)
console.log(age2)