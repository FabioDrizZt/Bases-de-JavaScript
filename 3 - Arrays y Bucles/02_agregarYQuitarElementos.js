const pelisFavoritas = [
  'Star Wars',
  'Star Trek',
  'Batman',
  'Superman',
  'Spider-Man',
  'Fantasia'
]

console.log(pelisFavoritas)

// insertar elemento en el final
let nuevaCantidad = pelisFavoritas.push('Avengers', 'Iron Man', 'Thor')
console.log(pelisFavoritas)
console.log({ nuevaCantidad })

// Quitar elemento desde el final
let peliEliminiada = pelisFavoritas.pop()
console.log(pelisFavoritas)
console.log({ peliEliminiada })
console.log(pelisFavoritas.length)

// Quitar elemento desde el principio
peliEliminiada = pelisFavoritas.shift()
console.log(pelisFavoritas)
console.log({ peliEliminiada })

// Agregar elemento al principio
nuevaCantidad = pelisFavoritas.unshift('X-Men', 'Hulk', 'Deadpool')
console.log(pelisFavoritas)
console.log({ nuevaCantidad })
