// Coding Challenge #5
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time

const calcAverage = (score) => {
    let sum = 0
    for (let i = 0; i < score.length; i++) {
        sum += score[i]
    }
    return sum / score.length
}
const checkWinner = (Dolhins, Koalas) => {
    let avgDolhins = calcAverage(Dolhins)
    let avgKoalas = calcAverage(Koalas)
    if (avgDolhins < avgKoalas) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`)
    } else if (avgDolhins > avgKoalas) {

        console.log(`Dolhins win (${avgKoalas} vs. ${avgDolhins})`)
    } else {
        console.log("Draw");
    }

}
checkWinner([44, 23, 71], [65, 54, 49])
checkWinner([85, 54, 41], [23, 34, 27])