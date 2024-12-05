/* Ansert To the Question No-1 */

const people = [
  { name: "Arfin", age: 25, gender: "male" },
  { name: "Shuvo", age: 26, gender: "male" },
  { name: "Hasina", age: 32, gender: "female" },
  { name: "Samiul", age: 25, gender: "male" },
  { name: "Nusrat", age: 23, gender: "female" },
];
const filterNames = (array) => {
  return array
    .filter((person) => person.gender !== "female")
    .map((person) => person.name);
};
const result = filterNames(people);
console.log(result);
