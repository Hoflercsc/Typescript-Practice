
// const concatWords = (a, b,) {
//     return [a, b].join("");
// }

// const result = concatWords("Jonathan Hofler");
// console.result;

const concatNames = (a: string, b: string) => {
    return [a,b].join(" ")
}

const result = concatNames("Jonathan", "Hofler");
console.log(result);

// function version
function concatNamesB(a: string, b: string) {
    return [a,b].join(" ")
}

const resultB = concatNamesB("Jonathan", "Hofler");
console.log(resultB);