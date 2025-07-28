const prompt = require('prompt-sync')({ sigint: true })

let edad
do {
  edad = Number(prompt('Ingresa tu edad: '))
  if (edad < 0) {
    console.log('No puedes tener una edad menor a 0')
  } else if (edad > 110) {
    console.log('No puedes tener una edad mayor a 110')
  }
} while (edad < 0 || edad > 110)

console.log('La edad ingresada es: ' + edad)
