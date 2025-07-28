// Join: Convertir un array en una cadena
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

const correosElectronicos = [
  'fabio@gmail.com',
  'anana@gmail.com',
  'marcos@gmail.com',
  'jorge@gmail.com'
]

console.log(correosElectronicos.join(', '))
console.log(correosElectronicos.join(''))
console.log(correosElectronicos.join(','))
console.log(correosElectronicos.join('\n'))
console.log(correosElectronicos.join(' - '))
