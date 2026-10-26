/*
“This variable contains a function that accepts parameters, and the variable cannot change.”

Annotations Tell type scrpt what type something is suppose to be
Annotation will often use a : ( semicolon) 
Annotations tell typescript that a function parameter or variable is of a certian type

Example : title: string // means title is of type string
         trackCount: number // means trackCount is of type number
         isReleased: boolean // means isReleased is of type boolean
Each type annotation tells typescript to check that it type is correct
*/ 

// Function parameter Annotations below - used tell typescript what type of parameters a function accepts

const logAlbuminfo = ( 
    title: string, 
    trackCount: number, 
    isReleased: boolean,) => {

// implementation
}
logAlbuminfo("Album Title", 10, true) // the annotations are correct no red line 
logAlbuminfo("Black Man", 20, true, 1);   // too many
logAlbuminfo("Black Man", 20, 20) // the annotations are incorrect red line 
logAlbuminfo("Black Man", 20);  // missing argument



// type inference example - 
// Variable Annotations below - used tell typescript what type of variable is suppose to be

let albumTitle: string = " The Temptations";
let isReleased: boolean = true;
let trackCount: number = 13;

// Reasignment example - you can change the value of the variable
albumTitle = " The Supremes";
isReleased = false;
trackCount = 14;

isReleased = "yes"; // this will cause an error because isreleased is a boolean

// The basic types 
let example1: string = "Hello World!";
let example2: number = 42;
let example3: boolean = true;
let example6: null = null;
let example7: undefined = undefined;


const Example = (
title, // need string annotation title: string
trackCount, // need number annotation trackCount: number
isReleased, // need boolean annotation isReleased: boolean
) => {
    // rest of fucntion body
}

/*When TypeScript doesn't know what type something is, it assigns it the any type.

This type breaks TypeScript's type system. It turns off type safety on the thing it's assigned to.

This means that anything can be assigned to it, any property on it can be accessed/assigned to, 

and it can be called like a function.*/

// export const add = (a: boolean, b: boolean) => {
//     return a + b;
// }


const concatTwoStrings = (a,b) => {
    return [a, b].join("");
}

const concatTwoStringsB = (a: string, b: string) => {
    return [a, b].join("");
}

const result = concatTwoStringsB("Hello", "World")

type test = Expect<Equal<typeof result, string>>;