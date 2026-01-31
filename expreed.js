const max = Math.max(12, 23,  45, 56, 75, 82)

const numbers = [3, 8, 56, 25, 65, 87, 92];
//amra jodi ... dot use kori tahola array ta pura deya deba
//ar hodi nahh use kori tahola pura array function deba 
const arrayMax = Math.max(...numbers);
console.log(arrayMax)



//use speared opearator to copy
const friends = [4, 5, 32, 48];
const bondhu = friends;
bondhu.push(12);
console.log(bondhu)
console.log(friends);