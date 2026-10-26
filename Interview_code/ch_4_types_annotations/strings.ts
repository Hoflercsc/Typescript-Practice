
// const carModels = ( 
//   make, 
//   model,
//   year,
//   color) =>{
//   console.log("Car info:" make + model + year + color)
// }

// carModels("Ford", "Airostar", 1985, "Red");
// console.log(carModels);

const carModelInfo = (
  make: string,
   model: string, 
   year: number, 
   color: string) => {
   console.log("Car info:" + make + model + year + color)
}
carModelInfo("Kia","Sportage", 2026, "Blue");
console.log(carModelInfo);

// function version
function carModelB(make: string, model: string, year: number, color: string) {
  console.log("Car info:" + make + model + year + color)
}
carModelB("Kia","Sportage", 2026, "Blue");
console.log(carModelB);


let software: string = "QASmithAI";
let releaseDate: string = "2026-01-01";
let isReleased: boolean = true;
let OS: string = "Windows 11"

console.log(software, releaseDate, isReleased, OS)



function softwareInfo(software: string, releaseDate: string, isReleased: boolean, OS: string) {
    console.log(software, releaseDate, isReleased, OS)
}

softwareInfo("QASmithAI", "2026-01-01", true, "Windows 11") // passing hardcoded values
softwareInfo(software, releaseDate, isReleased, OS) // what I am passing in already declared