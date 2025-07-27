console.log('7 + 8: ', 7 + 8)
console.log('7 - 8: ', 7 - 8)
console.log('7 * 8: ', 7 * 8)
console.log('7 / 8: ', 7 / 8)
console.log('16 % 2: ', 16 % 2)
console.log('225 % 5: ', 225 % 5)
console.log('2 ** 3: ', 2 ** 3)

console.log('division por cero: ', 10 / 0)
console.log('division por cero: ', -10 / 0)

console.log('Indeterminaciones: ', 0 / 0)

// Operador de incremento
let contador = 0
console.log({ contador }) // 0
console.log(contador++) // 0
// 1
console.log(++contador) // 2
contador++ // 3
console.log({ contador }) // 3

// Operador de incremento
contador = 0
console.log({ contador }) // 0
console.log(contador--) // 0
// -1
console.log(--contador) // -2
contador-- // -3
console.log({ contador }) // -3

// Operadores de asignación
let numero = 10
console.log(numero)
numero += 5
console.log(numero)
numero -= 5
console.log(numero)
numero *= 5
console.log(numero)
numero /= 5
console.log(numero)
numero %= 8
console.log(numero)
numero **= 3
console.log(numero)
