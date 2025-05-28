// const theSum =(num1 , num2) =>{
//     // return num1 + num2;  // => this will throw an error if num2 is not provided 
//     return (num1 ||0) + (num2 || 0);  // this called truthy falsy pattern to handle single argument , if num2 is not provided it will default to 0
// }

// module.exports = theSum;

// Better way to handle all numbers

const theSum = (...numbers) => {

    return numbers.reduce((pv, cv)=>pv+cv,0);
}


module.exports = theSum;