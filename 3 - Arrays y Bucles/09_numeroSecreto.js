const prompt = require('prompt-sync')({ sigint: true })
// Adivinar el numero secreto
const numeroSecreto = Math.floor(Math.random() * (10 - 1)) + 1
const maxIntentos = 3
let numero
for (let i = 0; i < maxIntentos; i++) {
  numero = Number(prompt('Ingresa tu numero: '))
  if (numero < 0) {
    console.log('No puedes tener un numero negativo')
    continue
  }
  if (numero > 10) {
    console.log('No puedes tener un numero mayor a 10')
    continue
  }
  if (numero === numeroSecreto) {
    console.log('¡¡¡¡¡¡¡¡ ¡Has acertado! ¡¡¡¡¡¡¡')
    break
  }
  if (numero > numeroSecreto) {
    console.log('El numero ingresado es mayor que el secreto')
  } else {
    console.log('El numero ingresado es menor que el secreto')
  }
}
if (numero !== numeroSecreto) {
  console.log('No has acertado el numero')
  console.log(`El numero secreto era: ${numeroSecreto}`)
}
