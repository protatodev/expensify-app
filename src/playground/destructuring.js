// OBJECT DESTRUCTURING -------------------------------------------------------

/*

const person = {
  name: 'Andrew',
  age: 26,
  location: {
    city: 'Philadelphia',
    temp: 92
  }
};

const { name = 'Anonymous', age = 'Unknown' } = person;
const { city = 'Somewhere', temp: temperature = 'Unknown'} = person.location;

console.log(`${name} is ${age}.`);
console.log(`The temp in ${city} is currently ${temperature}.`);

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName); // Penguin, Self-Publisher

*/


// ARRAY DESTRUCTURING -------------------------------------------------------

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];


const [street, city, state, zip] = address;

console.log(`${street}, ${city}, ${state} ${zip}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , price] = item;

console.log(`A medium ${itemName} costs ${price}.`);