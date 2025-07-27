const calificacion = -5

if (calificacion > 10 || calificacion < 0) {
  console.log('No se puede evaluar')
} else if (calificacion >= 9) {
  console.log('Excelente')
} else if (calificacion >= 7) {
  console.log('Muy Buena')
} else if (calificacion >= 5) {
  console.log('Buena')
} else if (calificacion >= 3) {
  console.log('Mala')
} else if (calificacion >= 1) {
  console.log('Muy Mala')
} else {
  console.log('Ausente')
}
