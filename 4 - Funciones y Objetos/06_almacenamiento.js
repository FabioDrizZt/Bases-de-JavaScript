// funcion declarada
function sumar (a = 0, b = 0, c = 0) {
  return a + b + c
}
// function expresada
const multiplicar = function (a = 1, b = 1, c = 1) {
  return a * b * c
}

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
