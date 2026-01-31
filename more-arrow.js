const difference = (x, y) => x - y;
const multiply = (first, secoend, third) => first * secoend * third;
//single parameter or one parameter
const getAge = (person) => person.age;
const student = { name: 'Utshab', age: 25}
const age = getAge(student)
console.log(age)


const getThird = numbers => numbers[2];
const third = getThird([5, 7, 88, 2, 13])
console.log(third)


//ssingle parameter lekhar jonno
const doubleIt = num => num * 2;


//no parameter
const getPI = () => Math.PI
console.log(getPI())



// large arrow function. if you want to get anything returned from this 
// function. thennyou have to use the keyword
const doMath = (x, y, z) => {
    const sum = x + y + z;
    const mult = x * y * z;
    const result = sum + mult
    return result

}