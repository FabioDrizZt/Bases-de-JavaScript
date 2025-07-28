/* const sumar = function () {
  let suma = 0
  for (let i = 0; i < arguments.length; i++) {
    suma += arguments[i]
  }
  return suma
} */
const sumar = (...args) => {
  let suma = 0
  for (let i = 0; i < args.length; i++) {
    suma += args[i]
  }
  return suma
}
const multiplicar = (a = 1, b = 1, c = 1) => a * b * c

let suma = sumar(2, 3)
console.log({ suma })
let producto = multiplicar(2, 3)
console.log({ producto })

suma = sumar(5)
console.log({ suma })
producto = multiplicar(5)
console.log({ producto })

suma = sumar(5, 6, 4)
console.log({ suma })
producto = multiplicar(5, 5, 4)
console.log({ producto })

suma = sumar(5, 6, 4, 6, 7, 8, 9, 10)
console.log({ suma })
