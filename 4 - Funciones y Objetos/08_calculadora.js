const suma = (a, b) => a + b
const resta = (a, b) => a - b
const multiplicacion = (a, b) => a * b
const division = (a, b) => a / b
const modulo = (a, b) => a % b

const calculadora = (operacion, n1, n2) => {
  if (typeof operacion !== 'function') return 'Operación no soportada'
  if (typeof n1 !== 'number' || typeof n2 !== 'number') return 'N1 y N2 deben ser números'
  return operacion(n1, n2)
}

console.log(calculadora(suma, 2, 3))
console.log(calculadora(resta, 2, 3))
console.log(calculadora(multiplicacion, 2, 3))
console.log(calculadora(division, 2, 3))
console.log(calculadora(modulo, 2, 3))
console.log(calculadora('suma', 2, 3))
console.log(calculadora(suma, '2', 3))
console.log(calculadora(suma, 2, '3'))
console.log(calculadora((a, b) => a ** b, 2, 3))

/* const calculadora = (operacion, n1, n2) => {
  switch (operacion) {
    case '+':
      return n1 + n2
    case '-':
      return n1 - n2
    case '*':
      return n1 * n2
    case '/':
      return n1 / n2
    default:
      return 'Operación no soportada'
  }
} */

// console.log(calculadora('+', 2, 3))
// console.log(calculadora('-', 2, 3))
// console.log(calculadora('*', 2, 3))
// console.log(calculadora('/', 2, 3))
// console.log(calculadora('%', 2, 3))
