function saludo (nombre = 'Visitante', apellido = 'anonimo') {
  return `Hola ${nombre} ${apellido}`
}

console.log(saludo())
console.log(saludo('Juan'))
console.log(saludo('Pedro', 'Perez'))
console.log(saludo('Maria', 'Jimenez'))
