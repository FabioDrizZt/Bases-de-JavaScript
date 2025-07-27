// Operadores lógicos

// &&: AND lógico - Y lógico
// Solo devuelve true si ambos operandos son verdaderos
// Solo devuelve false si al menos un operando es falso
console.log('--- AND ---')
console.log(true && true) // true
console.log(true && false) // false
console.log(false && true) // false
console.log(false && false) // false
const tieneLicencia = true
const sabeManejar = true
const edad = 16
const esMayor = edad >= 18
console.log(tieneLicencia && sabeManejar) // true
console.log(tieneLicencia && sabeManejar && esMayor) // true

// ||: OR lógico - O lógico
// Solo devuelve true si al menos un operando es verdadero
// Solo devuelve false si ambos operandos son falsos
console.log('--- OR ---')
console.log(true || true) // true
console.log(true || false) // true
console.log(false || true) // true
console.log(false || false) // false
const permisoDelPadre = true
console.log('Puede manejar: ', (tieneLicencia && sabeManejar && (esMayor || (edad >= 16 && permisoDelPadre))))

const rolUsuario = 'editor'
console.log('Tiene permiso de edicion: ', (rolUsuario === 'admin' || rolUsuario === 'editor'))

const enOferta = false
const envioGratis = false
const producto = {
  precio: 10,
  oferta: true,
  envioGratis: false
}
console.log('Aprovechaste un descuento: ', (enOferta || envioGratis))
console.log('Aprovechaste un descuento: ', producto.oferta || producto.envioGratis)

// Validar campos vacios (Falsos)
const valorCampo = null
const valorCampo2 = undefined
const valorCampo3 = ''
const valorCampo4 = 0
const valorCampo5 = NaN

console.log('Los campos estan vacio o no existen: ', Boolean(valorCampo || valorCampo2 || valorCampo3 || valorCampo4))
console.log(Boolean(valorCampo))
console.log(Boolean(valorCampo2))
console.log(Boolean(valorCampo3))
console.log(Boolean(valorCampo4))
console.log(Boolean(valorCampo5))

// !: NOT lógico - No lógico
// Devuelve el complemento del valor booleano
console.log('--- NOT ---')
console.log(!true) // false
console.log(!false) // true
console.log(!!true) // true
console.log(!!false) // false

console.log(!!valorCampo) // false
console.log(!!valorCampo2) // false
console.log(!!valorCampo3) // false
console.log(!!valorCampo4) // false
console.log(!!valorCampo5) // false
