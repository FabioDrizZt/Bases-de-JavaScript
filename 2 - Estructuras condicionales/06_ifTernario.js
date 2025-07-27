const edad = 16
// if (edad >= 18) console.log('Eres mayor de edad')
// else console.log('Eres menor de edad')

// edad >= 18 ? console.log('Eres mayor de edad') : console.log('Eres menor de edad')

// edad >= 18
//   ? console.log('Eres mayor de edad puedes manejar')
//   : console.log('Eres menor de edad no puedes manejar')

// const mensaje = edad >= 18 ? 'Eres mayor de edad puedes manejar' : 'Eres menor de edad no puedes manejar'

const mensaje = `Eres ${edad >= 18 ? 'mayor' : 'menor'} de edad`
console.log(mensaje)

const calificacion = 5.5

const resultado = (calificacion > 10 || calificacion < 0)
  ? 'No se puede evaluar'
  : (calificacion >= 9)
      ? 'Excelente'
      : (calificacion >= 7)
          ? 'Muy Buena'
          : (calificacion >= 5)
              ? 'Buena'
              : (calificacion >= 3)
                  ? 'Mala'
                  : (calificacion >= 1)
                      ? 'Muy Mala'
                      : 'Ausente'

console.log(resultado)
console.log('Fin del programa')
