
// const addNumbers = (a, b) => {
//     return a + b;
// }
// const returnSum = addNumbers(10, 20);
// console.log(returnSum);

const numberTotal = (a: number, b: number) => {
    return a + b;
}
const totalSum = numberTotal(100, 100);
//numberTotal(100, 100); // both work
console.log(totalSum);


// function version
function add(a: number, b: number) {
    return a + b;
  }

const sum = add(1, 2); // both lines are the same
add(1, 2); // both lines are the same
console.log(sum);
