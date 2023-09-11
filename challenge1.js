function compareIBM() {
    //markWeight, markHeight, JohnWight, JohnHight
    //lay value tu promt cho nhanh
    let markWeight = prompt("What is mark Weight")
    let markHeight = prompt("What is mark Height")
    let JohnWight = prompt("What is John Weight")
    let JohnHight = prompt("What is John Hight")
    let ibmPerson1 = markWeight / (markHeight * markHeight)
    let ibmPerson2 = JohnWight / (JohnHight * JohnHight)
    if (ibmPerson1 > ibmPerson2) {
        return 'mark HigherBMI'
    } else {
        return 'John HigherBMI'
    }
}
// console.log(compareIBM(78, 1.69, 92, 1.95))
// console.log(compareIBM(95, 1.88, 85, 1.76))
// console.log(compareIBM())
// muon chay ham thi phai co dau ()
//console.log() in ra