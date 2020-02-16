// let logNum = () => console.log('Hello World in wednesday');

// logNum();

// ======================================================================================================== //

// Importing demo.

// import { originalName, sayHello } from './lib';

// console.log(sayHello());
// console.log(originalName);

// ======================================================================================================== //

// ECMASCRIPT stable features... everything. This is quite a bulky file. Consider to do selective features ~
// ~ for production code.
import 'core-js/stable';
// A runtime for generator-like features such as async functions.
import 'regenerator-runtime/runtime';

async function getJSON() {
  return await fetch('https://jsonplaceholder.typicode.com/posts').then(res =>
    res.json()
  );
}

getJSON().then(data => console.log(data[0]));
