// const person = 
// {
//     name: "Travis",
//     age: 25,
//     location: 
//     {
//         city: "D.C.",
//         temp: 92
//     }
// };

// // const name = person.name;
// // const age= person.age;

// const {name = "Anon", age} = person;

// const {city, temp: temperature} = person.location;

// console.log(`${name} is ${age}.`);
// // console.log(`It's ${person.location.temp} in ${person.location.city}`);
// console.log(`It's ${temperature} in ${city}`);


// const book = 
// {
//     title: "Ego is the enemy",
//     author: "Ryan Holiday",
//     publisher: 
//     {
//         name: "Penguin"
//     }
// };

// const{name: publisherName = "Self-Published"} = book.publisher;

// console.log(publisherName);

const address = ["3162 Virginia Bluebell Court", "Fairfax", "Virginia", "22031"];

const [street, city, state, zip] = address;

console.log(`You are in ${street} ${zip}`);

const item = ["Coffee", "$2", "2.50", "$3"];
const [coffee, , medium] = item;

console.log(`A medium ${coffee} costs ${medium}`);