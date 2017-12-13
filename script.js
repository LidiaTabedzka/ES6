//Zadanie 1
const string1 = "Hello";
const string2 = "World";

console.log(`Zadanie 1: ${string1} ${string2}`);

//Zadanie 2
const multiply = (a = 1, b = 1) => a * b;
console.log(`Zadanie 2: ${multiply()}`);

//Zadanie 3
const average = (...args) => args.reduce((sum, next) => sum + next)/args.length;
console.log(`Zadanie 3: ${average(2, 4, 3)}`);

//Zadanie 4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(`Zadanie 4: ${average(...grades)}`);

//Zadanie 5
const data = [1, 4, 'Iwona', false, 'Nowak'];
const [ , , firstname, , lastname] = data;
console.log(`Zadanie 5: ${firstname} ${lastname}`);