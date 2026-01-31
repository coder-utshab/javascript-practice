//function declear korar jonno 
function add(num1, num2){
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;
}
const sum = add(5, 7);
//output-- 12



//defult ---> if value is not provided take this as a defult.

// function add(num1 = 99, num2 = 0, num3 = 12){
//     const result = num1 + num2 + num3;
//     console.log(num1, num2, result);
//     return result;
// }
// const sum = add(5);



//defult parameter ar jonno 
function add(num1=0, num2= 0){
    let result = 0;
    result = num1 + num2;
    console.log(result);
}
add(10)