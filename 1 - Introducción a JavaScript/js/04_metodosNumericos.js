const division = 10 / 3
console.log(division.toFixed(2))
const numero = 9.556
console.log(numero.toFixed(2))

const altura = '1.73'
console.log(parseInt(altura))
console.log(parseFloat(altura))
console.log(Number(altura))
const edad = 32
console.log(String(edad))

// Objeto Math

console.log(Math.PI) // Devuelve el valor de pi
console.log(Math.E) // Devuelve el valor de e
console.log(Math.LN2) // Devuelve el logaritmo natural de 2

const absoluteValue = Math.abs(-5) // Devuelve 5
console.log({ absoluteValue })
const squareRoot = Math.sqrt(16) // Devuelve 4
console.log({ squareRoot })
// Devuelve un número aleatorio entre 0 y 1
const randomNum = Math.random()
console.log({ randomNum })
// Devuelve un número aleatorio entre 0 y 10
const randomNum2 = Math.random() * 10
console.log({ randomNum2 })
// Devuelve un número aleatorio entre 50 y 100
const randomNum3 = Math.floor(Math.random() * 50) + 50
console.log({ randomNum3 })

const power = Math.pow(2, 3) // Devuelve 8 (2^3)
console.log({ power })
const roundedDown = Math.floor(4.99999) // Devuelve 4
console.log({ roundedDown })
const roundedUp = Math.ceil(4.00000001) // Devuelve 5
console.log({ roundedUp })
const rounded = Math.round(4.5) // Devuelve 5
console.log({ rounded })
