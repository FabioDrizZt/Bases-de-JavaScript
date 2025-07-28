// const edades = [12, 15, 18, 20, 25, 30, 35, 40]

// const sumaEdades = edades.reduce((acumulador, edad) => {
//   console.log(acumulador)
//   return acumulador + edad
// })
// console.log(sumaEdades)

const personas = [
  { nombre: 'Juan', edad: 25 },
  { nombre: 'Ana', edad: 30 },
  { nombre: 'Pedro', edad: 35 },
  { nombre: 'María', edad: 40 }
]

const sumaEdades = personas.reduce((acumulador, persona) => {
  console.log(acumulador)
  return acumulador + persona.edad
}, 0)

console.log(sumaEdades)
console.log('El promedio de edades es: ' + (sumaEdades / personas.length))

const carritoFrutas = [
  { nombre: 'Manzana', precio: 100, cantidad: 5 }, // 500
  { nombre: 'Banana', precio: 50, cantidad: 10 }, // 500
  { nombre: 'Naranja', precio: 80, cantidad: 8 }, // 640
  { nombre: 'Pera', precio: 120, cantidad: 3 }, // 360
  { nombre: 'Uva', precio: 200, cantidad: 2 }, // 400
  { nombre: 'kiwi', precio: 300, cantidad: 5 }, // 1500
  { nombre: 'sandía', precio: 150, cantidad: 4 }, // 600
  { nombre: 'mango', precio: 250, cantidad: 6 }, // 1500
  { nombre: 'piña', precio: 180, cantidad: 7 }, // 1260
  { nombre: 'cereza', precio: 350, cantidad: 1 } // 350
] // 7610

const precioTotalFrutas = carritoFrutas.reduce((acumulador, fruta) => acumulador + fruta.precio * fruta.cantidad, 0)

console.log({ precioTotalFrutas })
