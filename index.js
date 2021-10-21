const fruits = ['Apple','Orange','Banana']

//1 - Push sans push

let fruits_fin = [...fruits, 'Raspberry']
console.log(fruits_fin)

//2- Unshift sans unshift

let debut_fruits = ['Raspberry', ...fruits]
console.log(debut_fruits)

console.log("");

//3 - Array concatenation

const arr1 = ['A', 'B', 'C']
const arr2 = ['X', 'Y', 'Z']
let tab_concatener = arr1

arr2.forEach(element => {
    tab_concatener = [...tab_concatener, element]
    tab_concatener = tab_concatener
})
console.log(tab_concatener)

//4 - Objects

const user = {
  age: 10,
  eyes: "vert",
  legs: 2,
  arms: 2,
  hair: "long",
  caracterstique: "gras du bide",
  nose: "petit nez",
  ears: "grandes oreilles",
  glasses: true,
  sosie: "sarkozy"
}

const bobby = {
    ...user, firstName: "bobby"
}

console.log(bobby)