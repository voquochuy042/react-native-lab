//Coding Challenge #2
function compareIBM2() {
    //markWeight, markHeight, JohnWight, JohnHight
    //lay value tu promt cho nhanh
    let markWeight = prompt("What is mark Weight")
    let markHeight = prompt("What is mark Height")
    let JohnWight = prompt("What is John Weight")
    let JohnHight = prompt("What is John Hight")
    let ibmPerson1 = markWeight / (markHeight * markHeight)
    let ibmPerson2 = JohnWight / (JohnHight * JohnHight)
    if (ibmPerson1 > ibmPerson2) {
        console.log(`Mark's BMI ${Math.floor(ibmPerson1) } is higher than John's ${Math.floor(ibmPerson2)}!`)
    } else {
        console.log(`Mark's BMI ${ibmPerson1} is lower than John's ${ibmPerson2}!`)
    }
}
compareIBM2()