// Number: numeros enteros y decimales
let numero = 10
console.log(typeof numero)
console.log(numero)
const numeroDecimal = 10.5
console.log(typeof numeroDecimal)
console.log(numeroDecimal)
const numeroNegative = -10
console.log(typeof numeroNegative)
console.log(numeroNegative)

// String: texto
const texto = "Hola D'alessandro " + numero
console.log(typeof texto)
console.log(texto)
const textoConComillasSimples = 'Hola "mundo" ' + numero
console.log(typeof textoConComillasSimples)
console.log(textoConComillasSimples)
const textoConComillasInvertidas = `Hola mundo ${numero}`
console.log(typeof textoConComillasInvertidas)
console.log(textoConComillasInvertidas)

// Boolean: verdadero o falso
const verdadero = true
console.log(typeof verdadero)
console.log(verdadero)
const falso = false
console.log(typeof falso)
console.log(falso)

// NaN (Not a Number): representa un valor no numérico
console.log(NaN)
console.log('diez' - 10)
console.log('diez' / 10)
console.log('10' + 10)

// undefined: representa un valor no definido
let variableNoDefinida
console.log(typeof variableNoDefinida)
console.log(variableNoDefinida)

// null: representa un valor nulo
const variableNula = null
console.log(typeof variableNula)
console.log(variableNula)

// Tipo de dato Dinamicos
numero = 'Fabio'
console.log(numero)
numero = true
console.log(numero)

// Tipo de dato Objeto
const persona = {
  nombre: 'Fabio',
  edad: 20,
  sexo: 'masculino'
}
console.log(persona)
console.table(persona)

// Tipo de dato Array
const listaDeNumeros = [1, 2, 3, 4, 5]
console.table(listaDeNumeros)
const listaDeTextos = ['Fabio', 'Damian', 'Ana']
console.table(listaDeTextos)
const listaDeObjetos = [
  { nombre: 'Fabio', edad: 20, sexo: 'masculino' },
  { nombre: 'Damian', edad: 21, sexo: 'masculino' },
  { nombre: 'Ana', edad: 22, sexo: 'femenino' }
]
console.log(listaDeObjetos)
console.table(listaDeObjetos)
