// const person = {
//   name: 'Pierre',
//   age: 26,
//   location: {
//     city: 'Singapore',
//     temperature: 32
//   }
// }
//
// const { name, age } = person;
//
// console.log(`${name} is ${age}`);
//
// const book = {
//   title: 'Ego is teh enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };
//
// const { name: publisherName = 'Self-Published'} = book.publisher;
//
// console.log(publisherName);

// Array destructuring
const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [street, city, state, zip] = address;

console.log(`You are in ${city} ${state}`);
