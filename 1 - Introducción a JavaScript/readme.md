# 📌 Módulo 1: Introducción a JavaScript

## 📚 Descripción del Módulo

Este módulo establece los fundamentos esenciales de JavaScript, introduciendo los conceptos básicos que todo desarrollador debe dominar. Se abordan desde los elementos más elementales del lenguaje hasta las operaciones fundamentales que permiten la manipulación de datos y la construcción de lógica básica.

JavaScript, creado por Brendan Eich en 1995 en tan solo 10 días, ha evolucionado desde un simple lenguaje de scripting para navegadores hasta convertirse en un lenguaje de programación completo y versátil que funciona tanto en el frontend como en el backend.

## 🎯 Objetivos de Aprendizaje

Al completar este módulo, los estudiantes podrán:

- Declarar y utilizar variables y constantes correctamente
- Identificar y trabajar con diferentes tipos de datos
- Aplicar operadores aritméticos y de comparación
- Utilizar métodos numéricos básicos
- Implementar técnicas de debugging con console
- Comprender la diferencia entre tipos primitivos y complejos

## 📖 Contenido Teórico

### 1. Variables y Constantes

Las variables son contenedores que almacenan valores de datos. En JavaScript moderno (ES6+), utilizamos principalmente `let` y `const` para declarar variables, abandonando el uso de `var` debido a problemas de scope.

#### Declaración con `let`
```javascript
let nombre = 'Juan';
nombre = 'Pedro'; // ✅ Permitido
```

#### Declaración con `const`
```javascript
const PI = 3.14159;
// PI = 3.14; // ❌ Error: no se puede reasignar
```

**Buenas prácticas:**
- Usar `const` por defecto para valores que no cambiarán
- Usar `let` solo cuando necesites reasignar la variable
- Nombrar variables con camelCase (ej: `nombreCompleto`)
- Usar nombres descriptivos y significativos

### 2. Tipos de Datos

JavaScript es un lenguaje **dinámicamente tipado**, lo que significa que las variables no tienen un tipo fijo y pueden cambiar durante la ejecución.

#### Tipos Primitivos

1. **Number**: Representa tanto enteros como decimales
   ```javascript
   const entero = 42;
   const decimal = 3.14159;
   const negativo = -17;
   ```

2. **String**: Cadenas de texto
   ```javascript
   const comillasDobles = "Hola mundo";
   const comillasSimples = 'JavaScript';
   const templateLiteral = `El resultado es ${42}`;
   ```

3. **Boolean**: Valores lógicos verdadero/falso
   ```javascript
   const verdadero = true;
   const falso = false;
   ```

4. **Undefined**: Valor no definido
   ```javascript
   let sinValor; // undefined
   ```

5. **Null**: Valor nulo intencionalmente vacío
   ```javascript
   const vacio = null;
   ```

6. **NaN**: "Not a Number" - resultado de operaciones matemáticas inválidas
   ```javascript
   const noEsNumero = "texto" / 2; // NaN
   ```

#### Tipos Complejos

1. **Object**: Estructura de datos clave-valor
   ```javascript
   const persona = {
     nombre: "Ana",
     edad: 25,
     activo: true
   };
   ```

2. **Array**: Lista ordenada de elementos
   ```javascript
   const numeros = [1, 2, 3, 4, 5];
   const mixto = ["texto", 42, true, null];
   ```

### 3. Operadores Aritméticos

Los operadores aritméticos permiten realizar cálculos matemáticos:

| Operador | Descripción | Ejemplo |
|----------|-------------|---------|
| `+` | Suma | `5 + 3 = 8` |
| `-` | Resta | `5 - 3 = 2` |
| `*` | Multiplicación | `5 * 3 = 15` |
| `/` | División | `15 / 3 = 5` |
| `%` | Módulo (resto) | `15 % 4 = 3` |
| `**` | Exponenciación | `2 ** 3 = 8` |

#### Operadores de Incremento y Decremento

```javascript
let contador = 0;
contador++; // Post-incremento: usa el valor, luego incrementa
++contador; // Pre-incremento: incrementa, luego usa el valor
contador--; // Post-decremento
--contador; // Pre-decremento
```

#### Operadores de Asignación Compuesta

```javascript
let numero = 10;
numero += 5;  // numero = numero + 5
numero -= 3;  // numero = numero - 3
numero *= 2;  // numero = numero * 2
numero /= 4;  // numero = numero / 4
```

### 4. Operadores de Comparación

Permiten comparar valores y devuelven un resultado booleano:

| Operador | Descripción | Ejemplo |
|----------|-------------|---------|
| `==` | Igualdad (con coerción) | `'5' == 5 // true` |
| `===` | Igualdad estricta | `'5' === 5 // false` |
| `!=` | Desigualdad | `5 != 3 // true` |
| `!==` | Desigualdad estricta | `'5' !== 5 // true` |
| `>` | Mayor que | `5 > 3 // true` |
| `<` | Menor que | `3 < 5 // true` |
| `>=` | Mayor o igual | `5 >= 5 // true` |
| `<=` | Menor o igual | `3 <= 5 // true` |

**Recomendación:** Siempre usar `===` y `!==` para evitar conversiones implícitas inesperadas.

### 5. Métodos Numéricos

JavaScript proporciona métodos útiles para trabajar con números:

```javascript
// Métodos de Number
Number.isInteger(42);          // true
Number.isNaN(NaN);            // true
Number.parseFloat("3.14");    // 3.14
Number.parseInt("42px");      // 42

// Métodos de Math
Math.round(4.7);              // 5
Math.floor(4.9);              // 4
Math.ceil(4.1);               // 5
Math.random();                // número aleatorio entre 0 y 1
Math.max(1, 3, 2);            // 3
Math.min(1, 3, 2);            // 1
```

### 6. Console API - Herramientas de Debugging

La Console API es fundamental para el desarrollo y debugging:

```javascript
console.log("Mensaje informativo");
console.warn("Advertencia");
console.error("Error");
console.table([1, 2, 3, 4, 5]);
console.table({nombre: "Ana", edad: 25});
console.clear(); // Limpia la consola
```

## 💻 Archivos de Práctica

1. **`01_variables.js`** - Declaración de variables con `let` y `const`
2. **`02_tiposDeDatos.js`** - Exploración de tipos primitivos y complejos
3. **`03_operadoresAritmeticos.js`** - Operaciones matemáticas básicas
4. **`04_metodosNumericos.js`** - Métodos útiles para trabajar con números
5. **`05_operadoresComparacion.js`** - Comparaciones y evaluaciones lógicas

## 🔧 Ejercicios Prácticos

### Ejercicio 1: Calculadora Básica
Crea variables para dos números y realiza todas las operaciones aritméticas básicas.

### Ejercicio 2: Información Personal
Crea un objeto que represente una persona con diferentes tipos de datos.

### Ejercicio 3: Análisis de Tipos
Utiliza `typeof` para identificar el tipo de diferentes variables.

## 📚 Referencias Bibliográficas

1. **Flanagan, D.** (2020). *JavaScript: The Definitive Guide* - Capítulos 2-3. O'Reilly Media.
2. **Simpson, K.** (2021). *You Don't Know JS Yet: Get Started* - Capítulo 2. O'Reilly Media.
3. **MDN Web Docs** (2024). *JavaScript data types and data structures*. [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

## 🌐 Enlaces de Interés

### Documentación Oficial
- [MDN - Variables](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/var)
- [MDN - Tipos de datos](https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures)
- [MDN - Operadores](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators)

### Herramientas Interactivas
- [JavaScript Visualizer](https://ui.dev/javascript-visualizer) - Visualiza la ejecución de código
- [JS Bin](https://jsbin.com/) - Editor online para practicar
- [CodePen](https://codepen.io/) - Entorno de desarrollo web

### Recursos Adicionales
- [JavaScript.info - Variables](https://es.javascript.info/variables)
- [W3Schools - JS Variables](https://www.w3schools.com/js/js_variables.asp)
- [Eloquent JavaScript - Capítulo 1](https://eloquentjavascript.net/01_values.html)

## 🚀 Siguientes Pasos

Una vez dominados estos conceptos fundamentales, estarás preparado para avanzar al **Módulo 2: Estructuras Condicionales**, donde aprenderás a tomar decisiones en tu código y controlar el flujo de ejecución.

---

**Duración estimada:** 2-3 horas  
**Dificultad:** Principiante  
**Prerrequisitos:** Conocimientos básicos de informática
