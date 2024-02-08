function calculateMoney(ticketSale) {

    // Validity check
    if (ticketSale<0) {
        return "Invalid Number";
    }

    // Ticket sales price
    const ticketPrice = 120;

    // cost
    const totalExpenses = 500 + (8 * 50);

	// Income
    const income = ticketSale * ticketPrice;

    // The rest of the money
    const residualMoney = income - totalExpenses;

    return residualMoney;
}

function checkName(name){

    // Validity Check
    if (typeof name !== 'string') {
        return "invalid";
    }

    // last word of the name
    const lastCharacter = name[name.length - 1].toLowerCase();
    const lastSymbol = ['a', 'e', 'i', 'o', 'u', 'y', 'w'];

    if (!lastSymbol.includes(lastCharacter)) {
        return "Bad Name";
    } else {
        return "Good Name";
    }
}

function deleteInvalids(array) {

    // Invalid Array Check
    if (!Array.isArray(array)) {
        return "Invalid Array";
    }

    const filteredArray = array.filter(item => typeof item === 'number' && !isNaN(item));

    return filteredArray;
}

function password(obj) {

    // Validity Check
    if (!obj || typeof obj !== 'object' ||
        !obj.hasOwnProperty('name') || !obj.hasOwnProperty('birthYear') || !obj.hasOwnProperty('siteName') ||
        isNaN(obj.birthYear) || obj.birthYear.toString().length !== 4) {

        return "invalid";
    }

	const capitalizedSiteName = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);

    // Create a password
    const password = capitalizedSiteName + '#' + obj.name + '@' + obj.birthYear;

    return password;
}

function monthlySavings(arr, livingCost) {

    // Validity Check
    if (!Array.isArray(arr) || typeof livingCost !== 'number') {
        return "invalid input";
    }

    let totalIncome = arr.reduce((acc, payment) => {

        // Above or equal to 3000tk
        if (payment >= 3000) {
            acc += payment * 0.8;
        } else {
            acc += payment;
        }
        return acc;
    }, 0);

    // savings
    let savings = totalIncome - livingCost;

    if (savings >= 0) {
        return savings;
    } else {
        return "earn more";
    }
}


console.log(calculateMoney(10));
console.log(calculateMoney(1055));
console.log(calculateMoney(93));
console.log(calculateMoney(-130));

console.log(checkName("Salman"));
console.log(checkName("RAFEE"));
console.log(checkName("Jhankar"));
console.log(checkName(199));
console.log(checkName(["Rashed"]));

console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]));
console.log(deleteInvalids(["1", { num: 2 }, NaN]));
console.log(deleteInvalids([1, 2, -3]));
console.log(deleteInvalids({ num: [1, 2, 3] }));

console.log(password({ name: "kolimuddin", birthYear: 1999, siteName: "google" }));
console.log(password({ name: "rahat", birthYear: 2002, siteName: "facebook" }));
console.log(password({ name: "toky", birthYear: 200, siteName: "facebook" }));
console.log(password({ name: "maisha", birthYear: 2002 }));

console.log(monthlySavings([3000, 3000, 3000], 7200));
console.log(monthlySavings([1000, 2000, 2500], 5000));
console.log(monthlySavings([900, 2700, 3400], 10000));
console.log(monthlySavings(100, [900, 2700, 3400]));
