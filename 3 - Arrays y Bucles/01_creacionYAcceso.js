const arrayVacio = []

console.log(arrayVacio)
console.log(typeof arrayVacio)
console.log(Boolean(arrayVacio))

// Arrays heterogeneos: cada elemento puede ser de cualquier tipo
const miArray = ['Star Wars', true, 23, ['anana'], { nombre: 'Fabio' }]
console.log(miArray)

// Arrays homogeneos: todos los elementos deben ser del mismo tipo
const pelisFavoritas = [
  'Star Wars',
  'Star Trek',
  'Batman',
  'Superman',
  'Spider-Man',
  'Fantasia'
]

console.log(pelisFavoritas)
console.table(pelisFavoritas)

console.log(`Peli en indice 0 es: ${pelisFavoritas[0]}`)
console.log(`Peli en indice 1 es: ${pelisFavoritas[1]}`)
console.log(`Peli en indice 2 es: ${pelisFavoritas[2]}`)
console.log(`Peli en indice 2 es: ${pelisFavoritas[6]}`) // undefined

console.log(`cantidad de elementos: ${pelisFavoritas.length}`)
