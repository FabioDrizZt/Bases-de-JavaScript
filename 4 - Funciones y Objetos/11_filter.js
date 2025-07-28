const frutas = [
  { nombre: 'Manzana', precio: 100, cantidad: 5, color: 'rojo' },
  { nombre: 'Banana', precio: 50, cantidad: 10, color: 'amarillo' },
  { nombre: 'Naranja', precio: 80, cantidad: 8, color: 'naranja' },
  { nombre: 'Pera', precio: 120, cantidad: 3, color: 'verde' },
  { nombre: 'Uva', precio: 200, cantidad: 2, color: 'morado' },
  { nombre: 'kiwi', precio: 300, cantidad: 5, color: 'verde' },
  { nombre: 'sandía', precio: 150, cantidad: 4, color: 'verde' },
  { nombre: 'mango', precio: 250, cantidad: 6, color: 'naranja' },
  { nombre: 'piña', precio: 180, cantidad: 7, color: 'amarillo' },
  { nombre: 'cereza', precio: 350, cantidad: 1, color: 'rojo' }
]

// const frutasCaras = []
// frutas.forEach((fruta) => {
//   if (fruta.precio > 150) {
//     frutasCaras.push(fruta)
//   }
// })

const frutasCaras = frutas.filter((fruta) => fruta.precio > 150)

console.log(frutasCaras)

const frutasPocoStock = frutas.filter((fruta) => fruta.cantidad < 3)

console.log(frutasPocoStock)

const frutasRojas = frutas.filter((fruta) => fruta.color === 'rojo')

console.log(frutasRojas)

const frutasVerdesCaras = frutas.filter((fruta) => (fruta.color === 'verde' && fruta.precio > 150))

console.log(frutasVerdesCaras)
