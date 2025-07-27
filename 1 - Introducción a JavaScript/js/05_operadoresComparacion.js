/*
--- Operadores comparativos ---
    Los operadores de comparación son utilizados para comparar dos valores y devolver un resultado booleano.
    Los que existen son:
    == igual
    != distinto
    < menor que
    <= menor o igual que
    > mayor que
    >= mayor o igual que
*/

// == igual
const numero = 10
console.log('--- igual ---')
console.log(numero === 10) // true
console.log(numero === 9) // false
console.log('10' === 10) // false
const contraseñaCorrecta = '123456'
let contraseñaIngresada = '12345'
console.log(contraseñaCorrecta === contraseñaIngresada) // false
contraseñaIngresada = '123456'
console.log(contraseñaCorrecta === contraseñaIngresada) // true

// === igualdad con tipado
console.log('--- igualdad con tipado ---')
console.log(numero === 10) // true
console.log(numero === 9) // false
console.log('10' === 10) // false
console.log(contraseñaCorrecta === contraseñaIngresada) // true

// != distinto
const numero2 = 10
console.log('--- distinto ---')
console.log(numero2 !== 10) // false
console.log(numero2 !== 9) // true
console.log('10' !== 10) // true

// !== desigualdad con tipado
console.log('--- desigualdad con tipado ---')
console.log(numero2 !== 10) // false
console.log(numero2 !== 9) // true
console.log('10' !== 10) // true

// < menor que
const numero3 = 10
console.log('--- menor que ---')
console.log(numero3 < 10) // false
console.log(numero3 < 11) // true
console.log('10' < 10) // false

// <= menor o igual que
const numero4 = 10
console.log('--- menor o igual que ---')
console.log(numero4 <= 10) // true
console.log(numero4 <= 11) // true
console.log('10' <= 10) // true

// > mayor que
const numero5 = 10
console.log('--- mayor que ---')
console.log(numero5 > 10) // false
console.log(numero5 > 9) // true
console.log('10' > 10) // false

// >= mayor o igual que
const numero6 = 10
console.log('--- mayor o igual que ---')
console.log(numero6 >= 10) // true
console.log(numero6 >= 9) // true
console.log('10' >= 10) // true
