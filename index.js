function saut2ligne() {
    console.log("")
}

const fruits = ['Apple','Orange','Banana']

//1 - Push sans push

let fruits_fin = [...fruits, 'Raspberry']
console.log(fruits_fin)

//2- Unshift sans unshift

let debut_fruits = ['Raspberry', ...fruits]
console.log(debut_fruits)

saut2ligne()

//3 - Array concatenation

const arr1 = ['A', 'B', 'C']
const arr2 = ['X', 'Y', 'Z']
let tab_concatener = arr1

arr2.forEach(element => {
    tab_concatener = [...tab_concatener, element]
    tab_concatener = tab_concatener
})
console.log(tab_concatener)

saut2ligne()

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

saut2ligne()

//5 - forEach

const numbers = [1, 2, 3, 4, 5, 6]

numbers.forEach(element => {
    console.log(element)
})

saut2ligne()

//6 - filter

const numbers = [1, 2, 3, 4, 5, 6]