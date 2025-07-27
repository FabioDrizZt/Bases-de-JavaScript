console.log('¡Probando NodeJS desde prueba.js!')
console.warn('Warning')
console.error('Error')

console.log(['anana', 'pera', 'manzana'])
console.table(['anana', 'pera', 'manzana'])
console.table({
  nombre: 'Fabio',
  edad: 20,
  sexo: 'masculino',
  esProfesor: true
})
// Usamos let para declarar variables dinamicas
let nombre = 'Damian'
nombre = 'Fabio'
console.log({ nombre })
// Usamos const para declarar variables constantes
const gravedad = 9.8
console.log({ gravedad })
