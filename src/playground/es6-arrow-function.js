console.log('Arrow Function loaded');

// const square = function(x) {
//     return x * x;
// };

// // - Arrow functions are anonymous
// // const squareArrow = (x) => {
// //     return x * x;
// // }

// // - Arrow function expression syntax
// const squareArrow = (x) => x * x;

// console.log(squareArrow(4));


const fullName = 'Oskaras Kanasevicius';
const getFirstName = (fullName) => fullName.split(' ')[0];
console.log(getFirstName(fullName))