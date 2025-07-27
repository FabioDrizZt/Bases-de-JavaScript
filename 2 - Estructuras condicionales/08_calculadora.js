const prompt = require('prompt-sync')({ sigint: true }) // sigint: true para que se pueda presionar Ctrl + C para salir

const nro1 = Number(prompt('Escribe el primer numero: '))
const nro2 = Number(prompt('Escribe el segundo numero: '))

const opcion = prompt('Bienvenido a la calculadora:  \na - Sumar dos números  \nb - Restar dos numeros \nc - Multiplicar dos numeros \nd - Dividir dos numeros \nEscriba su opción: ')

switch (opcion) {
  case 'a':
    console.log(`${nro1} + ${nro2} = ` + (nro1 + nro2))
    break
  case 'b':
    console.log(`${nro1} - ${nro2} = ` + (nro1 - nro2))
    break
  case 'c':
    console.log(`${nro1} x ${nro2} = ` + (nro1 * nro2))
    break
  case 'd':
    console.log(`${nro1} : ${nro2} = ` + (nro1 / nro2))
    break
  default:
    console.log('Opción no válida')
    break
}
