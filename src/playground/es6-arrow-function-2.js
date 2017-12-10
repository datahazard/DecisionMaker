console.log('ES6 arrow function-2 is running')

// arguments object - no longer bound with arrow functions
const add = (a, b) => {
    // console.log(arguments);
    return a + b;
}
console.log(add(55, 1, 1005));


// this keyword no longer bound
// const user = {
//     name: 'oskaras',
//     cities: ['Vilnius', 'Arhus', 'Horsens'],
//     printPlacesLived: function() {
//         this.cities.forEach((city) => {
//             console.log(this.name + ' has lived in ' + city);
//         });
//     }
// };
// user.printPlacesLived();


// ES6 method definition
const user = {
    name: 'oskaras',
    cities: ['Vilnius', 'Arhus', 'Horsens'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
        }
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });
};
console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((multipliedNumber) => 'new number is ' + this.multiplyBy * multipliedNumber);
    }
};
console.log(multiplier.multiply());
