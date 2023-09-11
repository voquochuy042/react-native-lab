// Coding Challenge #9
// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17oC in 1
// days ... 21oC in 2 days ... 23oC in 3 days ..."
// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!
// Test data:
// § Data 1: [17, 21, 23]
// § Data 2: [12, 5, -5, 0, 4]
const printForecast = (arr) => {
    const newarr = arr.map((item, index) => item + `°C in ${index} days`)
    return newarr
}
console.log(printForecast([17, 21, 23]))
console.log(printForecast([12, 5, -5, 0, 4]))