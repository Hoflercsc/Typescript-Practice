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



const carInfo = (
    make: string, 
    model: string,
    year: number) => {
        // implementation
        console.log('Car info: ${make} ${model} ${year}')
        console.log("Car info:" + make + model + year)

}

carInfo("Ford", "Airostar", 1985) // what I am passing in
//console.log("Car info: " + make);     // the old way — gluing strings together
//console.log(`Car info: ${make}`);     // interpolation — same result

let software: string = "QASmithAI";
let releaseDate: string = "2026-01-01";
let isReleased: boolean = true;
let OS: string = "Windows 11"

console.log(software, releaseDate, isReleased, OS)

function aitoolInfo(software: string, releaseDate: string, isReleased: boolean, OS: string) {
    console.log(software, releaseDate, isReleased, OS)
}

aitoolInfo("QASmithAI", "2026-01-01", true, "Windows 11")
aitoolInfo(software, releaseDate, isReleased, OS) // what I am passing in

const aiToolInfo = (software: string, releaseDate: string, isReleased: boolean, OS: string) => {
    console.log(software, releaseDate, isReleased, OS);
  };
  
  aiToolInfo("QASmithAI", "2026-01-01", true, "Windows 11");


  function add(a: number, b: number) {
    return a + b;
  }

  const sum = add(1, 2); // both lines are the same
  add(1, 2); // both lines are the same
