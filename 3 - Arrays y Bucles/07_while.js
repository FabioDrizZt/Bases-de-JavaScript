let i = 1
while (i <= 5) {
  console.log({ i })
  i++
}
console.log(`index fuera del bucle: ${i}`)

// Sumar todos los numeros impares entre 1 y 100
let index = 1
let suma = 0
let contador = 0
while (index <= 100) {
  suma += index // suma = suma + index
  index += 2
  contador++
}
// 1,2,3,4,5 ... 96,97,98,99,100 = 101 * 50 = 5050
// 6, 9, 10 => promedio = 6+9+9 / 3 = 8
console.log('La suma de los numeros del 1 al 100 es: ' + suma)
const promedio = suma / contador
console.log('El promedio es: ' + promedio)
