// Coding Challenge #6
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44

const calcTip = (billValue) => {
    const tips = []
    const total = []
    for (let i = 0; i < billValue.length; i++) {
        let tip = billValue[i] >= 50 && billValue[i] <= 300 ? billValue[i] * 0.15 : billValue[i] * 0.2
        tips.push(tip)
        total.push(tips + billValue[i])
    }
    return [tips, total];
}

const bills = [125, 555, 44]
console.log(calcTip(bills))