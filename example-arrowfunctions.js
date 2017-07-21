// var names = ['Miguel', 'Joe', 'John', 'Josh'];
//
// // names.forEach(function (name) {
// //   console.log('forEach', name);
// // });
// //
// // names.forEach((name) => { // returning multiple lines in arrow function
// //   console.log('arrowFunc', name);
// //   console.log('something else');
// // })
// //
// // names.forEach((name) => console.log(name)); // returning single expression in arrow function
// //
// // var returnMe = (name) => name + '!'; // anonymous funcions
// // console.log(returnMe('Miguel'))
//
// var person = {
//   name: 'Miguel',
//   greet: function() {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name)
//     });
//   }
// }
//
// person.greet()

function add (a, b) {
  return a + b;
}

// add Statement

let addStatement = (a, b) => {
  return (a + b);
}
console.log(addStatement(3, 5));

// expression Statement
let addExpression = (a, b) => a + b;
console.log(addExpression(5, 6))
