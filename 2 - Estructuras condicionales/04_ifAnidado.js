const edad = 18
const tieneLicencia = false

if (edad >= 18) {
  console.log('Eres mayor de edad')
  if (tieneLicencia) {
    console.log('Tienes licencia')
    console.log('Puedes manejar')
  } else {
    console.log('No tienes licencia')
    console.log('No puedes manejar')
  }
} else {
  console.log('Eres menor de edad')
  console.log('No Puedes manejar')
}
console.log('Fin del programa')
