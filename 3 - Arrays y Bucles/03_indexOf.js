// Indice de la primera aparicion de un elemento

const numeros = [1, 2, 3, 4, 5, 9, 5, 10, 9]
//               0  1  2  3  4  5  6  7   8
const indice5 = numeros.indexOf(5)
console.log({ indice5 })
const indice9 = numeros.indexOf(9)
console.log({ indice9 })
const indice8 = numeros.indexOf(8)
console.log({ indice8 })

// Indice de la ultima aparicion de un elemento
const indiceUltimo5 = numeros.lastIndexOf(5)
console.log({ indiceUltimo5 })
const indiceUltimo9 = numeros.lastIndexOf(9)
console.log({ indiceUltimo9 })
const indiceUltimo8 = numeros.lastIndexOf(8)
console.log({ indiceUltimo8 })

// includes
console.log(numeros.includes(5))
console.log(numeros.includes(9))
console.log(numeros.includes(8))
