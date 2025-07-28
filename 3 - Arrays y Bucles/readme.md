# 📊 Módulo 3: Arrays y Bucles

## 📚 Descripción del Módulo

Este módulo introduce dos conceptos fundamentales que revolucionan la manera de trabajar con datos en programación: **los arrays** (estructuras de datos) y **los bucles** (estructuras de iteración). Los arrays permiten almacenar y organizar múltiples valores en una sola variable, mientras que los bucles automatizan tareas repetitivas de manera eficiente.

La combinación de arrays y bucles forma la base de la manipulación de datos en aplicaciones modernas, desde el procesamiento de listas de usuarios hasta el análisis de grandes conjuntos de información. Según Donald Knuth, "la programación se trata de datos y algoritmos", y este módulo establece las bases de ambos conceptos.

## 🎯 Objetivos de Aprendizaje

Al completar este módulo, los estudiantes podrán:

- Crear y manipular arrays de manera efectiva
- Acceder y modificar elementos de arrays
- Implementar algoritmos de búsqueda y ordenamiento básicos
- Utilizar bucles for, while y do-while apropiadamente
- Combinar arrays y bucles para resolver problemas complejos
- Optimizar la iteración según el contexto del problema
- Desarrollar juegos y aplicaciones interactivas con lógica iterativa

## 📖 Contenido Teórico

### 1. Arrays (Arreglos)

Los arrays son estructuras de datos que permiten almacenar múltiples valores en una sola variable, organizados mediante índices numéricos secuenciales.

#### Características Fundamentales

- **Indexación basada en cero**: El primer elemento tiene índice 0
- **Tamaño dinámico**: Pueden crecer o reducirse durante la ejecución
- **Heterogéneos**: Pueden contener diferentes tipos de datos
- **Referencia**: Son objetos pasados por referencia

#### Creación de Arrays

```javascript
// Array vacío
const arrayVacio = [];

// Array con elementos iniciales
const numeros = [1, 2, 3, 4, 5];

// Array heterogéneo (diferentes tipos)
const mixto = ['texto', 42, true, null, {nombre: 'Juan'}];

// Array usando constructor (menos común)
const arrayConstructor = new Array(5); // 5 elementos undefined
```

#### Acceso a Elementos

```javascript
const frutas = ['manzana', 'banana', 'naranja', 'uva'];

console.log(frutas[0]);     // 'manzana'
console.log(frutas[2]);     // 'naranja'
console.log(frutas[10]);    // undefined
console.log(frutas.length); // 4

// Último elemento
console.log(frutas[frutas.length - 1]); // 'uva'
```

### 2. Métodos de Arrays

#### Métodos Modificadores (Mutan el array original)

```javascript
const numeros = [1, 2, 3];

// Agregar elementos
numeros.push(4);        // [1, 2, 3, 4] - al final
numeros.unshift(0);     // [0, 1, 2, 3, 4] - al inicio

// Remover elementos
const ultimo = numeros.pop();     // remueve y retorna 4
const primero = numeros.shift();  // remueve y retorna 0

// Agregar/remover en posición específica
numeros.splice(1, 1, 'nuevo'); // [1, 'nuevo', 3]
```

#### Métodos de Búsqueda

```javascript
const animales = ['perro', 'gato', 'pájaro', 'pez'];

// Encontrar índice
const indice = animales.indexOf('gato');     // 1
const noEncontrado = animales.indexOf('león'); // -1

// Verificar existencia
const existe = animales.includes('pájaro');  // true
```

#### Métodos de Transformación

```javascript
const palabras = ['hola', 'mundo', 'javascript'];

// Unir elementos
const frase = palabras.join(' ');  // 'hola mundo javascript'
const csv = palabras.join(',');    // 'hola,mundo,javascript'

// Ordenar
const numeros = [3, 1, 4, 1, 5];
numeros.sort();                    // [1, 1, 3, 4, 5]

// Invertir
numeros.reverse();                 // [5, 4, 3, 1, 1]
```

### 3. Bucles (Loops)

Los bucles permiten ejecutar código repetidamente mientras se cumpla una condición, automatizando tareas que serían tediosas de escribir manualmente.

#### Bucle for

Ideal cuando conocemos el número de iteraciones o trabajamos con arrays.

```javascript
// Sintaxis básica
for (inicialización; condición; incremento) {
    // código a repetir
}

// Ejemplo: contar del 1 al 5
for (let i = 1; i <= 5; i++) {
    console.log(`Número: ${i}`);
}

// Iterar array
const colores = ['rojo', 'verde', 'azul'];
for (let i = 0; i < colores.length; i++) {
    console.log(`Color ${i + 1}: ${colores[i]}`);
}
```

#### Variaciones del bucle for

```javascript
// Decremento
for (let i = 10; i >= 0; i--) {
    console.log(`Cuenta regresiva: ${i}`);
}

// Incremento de 2 en 2
for (let i = 0; i <= 10; i += 2) {
    console.log(`Número par: ${i}`);
}

// Múltiples variables
for (let i = 0, j = 10; i < j; i++, j--) {
    console.log(`i: ${i}, j: ${j}`);
}
```

#### Bucle while

Ejecuta mientras la condición sea verdadera. Útil cuando no sabemos exactamente cuántas iteraciones necesitamos.

```javascript
let contador = 0;
while (contador < 5) {
    console.log(`Iteración: ${contador}`);
    contador++;
}

// Ejemplo práctico: buscar elemento
const numeros = [1, 3, 5, 7, 9];
let buscar = 5;
let encontrado = false;
let indice = 0;

while (indice < numeros.length && !encontrado) {
    if (numeros[indice] === buscar) {
        encontrado = true;
        console.log(`Encontrado en índice: ${indice}`);
    }
    indice++;
}
```

#### Bucle do-while

Similar a while, pero garantiza al menos una ejecución.

```javascript
let numero;
do {
    numero = Math.floor(Math.random() * 10) + 1;
    console.log(`Número generado: ${numero}`);
} while (numero !== 7);

console.log('¡Finalmente salió 7!');
```

### 4. Algoritmos Básicos con Arrays

#### Búsqueda Lineal

```javascript
function buscarElemento(array, elemento) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === elemento) {
            return i; // retorna el índice
        }
    }
    return -1; // no encontrado
}

const nombres = ['Ana', 'Juan', 'María', 'Pedro'];
const posicion = buscarElemento(nombres, 'María'); // 2
```

#### Encontrar Máximo y Mínimo

```javascript
function encontrarMaximo(numeros) {
    if (numeros.length === 0) return null;
    
    let maximo = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maximo) {
            maximo = numeros[i];
        }
    }
    return maximo;
}

const valores = [3, 7, 2, 9, 1, 5];
console.log(encontrarMaximo(valores)); // 9
```

#### Sumar Elementos

```javascript
function sumarArray(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma;
}

// También se puede calcular promedio
function calcularPromedio(numeros) {
    return sumarArray(numeros) / numeros.length;
}
```

#### Filtrar Elementos

```javascript
function filtrarPares(numeros) {
    const pares = [];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i]);
        }
    }
    return pares;
}

const numeros = [1, 2, 3, 4, 5, 6];
console.log(filtrarPares(numeros)); // [2, 4, 6]
```

### 5. Algoritmos de Ordenamiento

#### Ordenamiento Burbuja (Bubble Sort)

```javascript
function ordenamientoBurbuja(array) {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                // Intercambiar elementos
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}
```

### 6. Bucles Anidados

Los bucles anidados permiten trabajar con estructuras multidimensionales.

```javascript
// Tabla de multiplicar
for (let i = 1; i <= 3; i++) {
    console.log(`Tabla del ${i}:`);
    for (let j = 1; j <= 5; j++) {
        console.log(`${i} × ${j} = ${i * j}`);
    }
    console.log('---');
}

// Matriz 2D
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let fila = 0; fila < matriz.length; fila++) {
    for (let columna = 0; columna < matriz[fila].length; columna++) {
        console.log(`Posición [${fila}][${columna}]: ${matriz[fila][columna]}`);
    }
}
```

### 7. Control de Bucles

#### break - Salir del bucle

```javascript
const numeros = [1, 2, 3, 4, 5, 6, 7];
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === 5) {
        console.log('Encontré el 5, saliendo...');
        break;
    }
    console.log(numeros[i]);
}
```

#### continue - Saltar iteración

```javascript
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; // saltar números pares
    }
    console.log(`Número impar: ${i}`);
}
```

### 8. Mejores Prácticas

#### 1. Elegir el bucle apropiado

```javascript
// ✅ for - cuando conoces el número de iteraciones
for (let i = 0; i < array.length; i++) { }

// ✅ while - cuando la condición puede cambiar
while (condicion) { }

// ✅ do-while - cuando necesitas al menos una ejecución
do { } while (condicion);
```

#### 2. Evitar bucles infinitos

```javascript
// ❌ Peligro: bucle infinito
let i = 0;
while (i < 10) {
    console.log(i);
    // ¡Olvidé incrementar i!
}

// ✅ Correcto
let i = 0;
while (i < 10) {
    console.log(i);
    i++; // incrementar contador
}
```

#### 3. Usar nombres descriptivos

```javascript
// ❌ Confuso
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        // ¿qué representan i y j?
    }
}

// ✅ Claro
for (let fila = 0; fila < matriz.length; fila++) {
    for (let columna = 0; columna < matriz[fila].length; columna++) {
        // más fácil de entender
    }
}
```

## 💻 Archivos de Práctica

1. **`01_creacionYAcceso.js`** - Creación de arrays y acceso a elementos
2. **`02_agregarYQuitarElementos.js`** - Métodos push, pop, shift, unshift
3. **`03_indexOf.js`** - Búsqueda de elementos en arrays
4. **`04_join.js`** - Unión de elementos en strings
5. **`05_sortYReverse.js`** - Ordenamiento e inversión
6. **`06_for.js`** - Bucles for básicos y con arrays
7. **`07_while.js`** - Bucles while y aplicaciones
8. **`08_doWhile.js`** - Bucles do-while
9. **`09_numeroSecreto.js`** - Proyecto: juego del número secreto

## 🚀 Proyecto: Juego del Número Secreto

### Descripción
Desarrollar un juego interactivo donde el usuario debe adivinar un número secreto generado aleatoriamente, aplicando bucles y arrays para gestionar intentos y pistas.

### Características
- Número aleatorio entre 1 y 100
- Sistema de pistas (muy alto/muy bajo)
- Contador de intentos
- Historial de números intentados
- Validación de entrada

### Algoritmo Principal
```javascript
// Pseudocódigo del juego
1. Generar número secreto aleatorio
2. Inicializar array de intentos
3. MIENTRAS no adivinado Y intentos < máximo:
   - Solicitar número al usuario
   - Validar entrada
   - Comparar con número secreto
   - Agregar a historial
   - Proporcionar pista
4. Mostrar resultado final
```

## 🔧 Ejercicios Prácticos

### Ejercicio 1: Gestión de Inventario
Crear un sistema que:
- Almacene productos en un array
- Permita buscar productos por nombre
- Calcule el valor total del inventario
- Ordene productos por precio

### Ejercicio 2: Análisis de Calificaciones
Desarrollar un programa que:
- Almacene calificaciones de estudiantes
- Calcule promedio, máximo y mínimo
- Cuente cuántos aprobaron/reprobaron
- Genere estadísticas detalladas

### Ejercicio 3: Generador de Patrones
Crear funciones que generen:
- Pirámides de asteriscos
- Tablas de multiplicar
- Secuencias numéricas
- Patrones geométricos

## 📚 Referencias Bibliográficas

1. **Cormen, T. H., Leiserson, C. E., Rivest, R. L., & Stein, C.** (2009). *Introduction to Algorithms*. 3rd Edition. MIT Press.
2. **Knuth, D. E.** (1997). *The Art of Computer Programming, Volume 1: Fundamental Algorithms*. 3rd Edition. Addison-Wesley.
3. **Flanagan, D.** (2020). *JavaScript: The Definitive Guide* - Capítulos 7-8. O'Reilly Media.
4. **Sedgewick, R. & Wayne, K.** (2011). *Algorithms*. 4th Edition. Addison-Wesley.

## 🌐 Enlaces de Interés

### Documentación Oficial
- [MDN - Array](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN - for](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for)
- [MDN - while](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/while)

### Visualizadores de Algoritmos
- [VisuAlgo](https://visualgo.net/en) - Visualización de algoritmos y estructuras de datos
- [Algorithm Visualizer](https://algorithm-visualizer.org/) - Algoritmos interactivos
- [Sorting Algorithms Visualizer](https://www.sortvisualizer.com/) - Algoritmos de ordenamiento

### Recursos Educativos
- [JavaScript.info - Arrays](https://javascript.info/array)
- [freeCodeCamp - Basic Data Structures](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/)
- [Eloquent JavaScript - Data Structures](https://eloquentjavascript.net/04_data.html)

### Práctica Interactiva
- [Codewars](https://www.codewars.com/) - Desafíos de programación
- [LeetCode](https://leetcode.com/problemset/algorithms/) - Problemas de algoritmos
- [HackerRank](https://www.hackerrank.com/domains/algorithms) - Competencias de programación

### Herramientas de Desarrollo
- [Replit](https://replit.com/) - IDE online para experimentar
- [CodePen](https://codepen.io/) - Entorno para proyectos web
- [JSFiddle](https://jsfiddle.net/) - Editor rápido de JavaScript

## 🚀 Siguientes Pasos

Con el dominio de arrays y bucles, estarás preparado para el **Módulo 4: Funciones y Objetos**, donde aprenderás a crear código modular y reutilizable, y explorarás técnicas avanzadas de programación funcional.

---

**Duración estimada:** 4-5 horas  
**Dificultad:** Intermedio  
**Prerrequisitos:** Módulos 1 y 2 completados
