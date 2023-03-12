// Type Annotations

// let myName: string = "SJ";
// let isCool: boolean = true;
// let favNumber: number = 30;

// function add(a: number, b: number) {
//   return a + b;
// }

// console.log(add(4, 2));

// Inferred Types

// TypeScript infers returns from functions based on what is happening in the function

let myName: string = "SJ";
// here ^ we don't need to put the type as string, TS will know this is a string - it's infered
let isCool: boolean = true;
let favNumber: number = 30;

function add(a: number, b: number) {
  return a + b;
}

// same with the above function, TS can see that numbers are entered as params, and can see
// the return is the number being added - the return value therefore, is inferred as a number
console.log(add(4, 2));

const numbers = [2, 3, 4, 5];
//^ the above is type number array

// Union Types >> can have more than one type
const numbersAndStrings = ["Steph", 2, 3, 4, "Chris"];
// ^ the above is type string | numbers array
// the following syntax is also correct const numbersAndStrings : (string | number)[] = ["Steph", 2,3,4, "Chris"]

let theAnswer: string | number = 42;
theAnswer = "42";

//Union types are good for API responses because the response might be a string, a number or null etc

// Objects and Interfaces

interface Person {
  name: string;
  favNumber: number;
  dogName?: string;
  // the above is an optional property denoted with the ? syntax
}

const person = {
  name: "Steph",
  favNumber: 30,
};

function greet(person: Person) {
  return `Hello ${person.name}`;
}

function greetPersonAndDog(person: Person) {
  if (person.dogName) {
    return `Hello ${person.name} and their dog ${person.dogName}`;
  }
  return greet(person);
}

console.log(
  greetPersonAndDog({ name: "Chris", favNumber: 35, dogName: "Figaro" })
);
console.log(greet(person));

// Optional Properties

// ^ denoted in interface with the ? syntax

// type :
// types over interface :

type Person2 = {
  name: string;
  favNumber: number;
  dogName?: string;
};

// ^ note the equals operator syntax

const person2 = {
  name: "Chris",
  favNumber: 7,
  dogName: "Figaro",
};

console.log(greetPersonAndDog(person2));

// With Type, we can do this (define your own type) :

type catOrDog = "cat" | "dog"; // this type will only allow the input of either cat or dog

interface Person3 {
  name: string;
  favNumber: number;
  catOrDog: catOrDog;
}

// Classes

// Generics

// any, unknown, never

// Type Assertions

// @ts-ignore / @ts-nocheck
