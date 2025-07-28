let i
for (i = 1; i <= 5; i++) {
  console.log({ i })
}
console.log(`index fuera del bucle: ${i}`)

// descremento de i
for (let i = 10; i >= 0; i--) {
  console.log({ i })
}
console.log('Despegue ! 🚀 🚀 🚀')

// Recorrido de un array
const frutas = ['Manzana', 'Banana', 'Cereza', 'Damasco']

for (let i = 0; i < frutas.length; i++) {
  console.log('- ' + frutas[i])
}
