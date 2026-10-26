/*
Object types are used to describe the shape of objects. Each property of an 
object can have its own type annotation.

When defining an object type, we use curly braces to 
contain the properties and their types:
*/

// const talkToAnimal = (animal: { name: string; type: string; age: number }) => {
//     //
// }

const myNums = [2,7, 11, 15 ];
const myTarget = 9;

function twoSum(nums: number[], target: number): number[] {  // part 1 
 for (let i = 0; i < nums.length; i++) {
    console.log(i, nums[1]);
 }

 return [];

};

console.log(twoSum(myNums, myTarget));


function twoSumB(nums: number[], target: number): number[]{  // part 2
    for(let i = 0; i < nums.length; i++){
        for (let j = i + 1; j < nums.length; j++) {
            console.log(nums[i], nums[j]);
        }
    }
    return [];
}

console.log(twoSumB(myNums, myTarget));


/* 
You are given an array of integers nums and an integer target, return indices of the two 
numbers such that they add up to target. You may assume that each input would have 
exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
*/

 
function twoSumC(nums: number[], target: number): number[]{ // part 3
    for(let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++){
            if (nums[i]! + nums[j]! === target) {
                return [i, j]
            }

        }
    }
    return []; 
}

console.log (twoSumC(myNums, myTarget));


function twoSumD(nums: number[], target: number): number[] {
    const seen = new Map<number, number>();

    for (let i = 0; i < nums.length; i++){
        const need = target - nums[i]!;
            if (seen.has(need)) {
                return [seen.get(need)!, i];
            }
            seen.set(nums[i]!, i);
    }
    return []
}

console.log(twoSumD(myNums, myTarget))