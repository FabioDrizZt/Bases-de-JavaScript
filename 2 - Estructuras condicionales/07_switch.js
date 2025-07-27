const nombre = window.prompt('Escribe su nombre')
const nota = Math.round(window.prompt('Ingrese su nota'))
let resultado = null

switch (nota) {
  case 10: resultado = 'Sobresaliente'
    break
  case 8: case 9: resultado = 'Distinguido'
    break
  case 7: case 6: resultado = 'Bueno'
    break
  case 5: case 4: resultado = 'Suficiente'
    break
  case 3: case 2: case 1: resultado = 'Insuficiente'
    break
  case 0: resultado = 'Ausente'
    break
  default: resultado = 'Nota no válida'
    break
}

window.alert(`El estudiante ${nombre} fue calificado como: ${resultado}`)
