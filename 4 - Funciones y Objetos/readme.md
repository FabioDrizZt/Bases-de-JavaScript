# ⚙️ Módulo 4: Funciones y Objetos

## 📚 Descripción del Módulo

Este módulo final introduce conceptos avanzados que transforman la manera de organizar y estructurar código: **las funciones** y **la programación funcional**. Las funciones son bloques de código reutilizable que encapsulan lógica específica, mientras que los métodos de arrays modernos permiten aplicar paradigmas de programación funcional para manipular datos de manera elegante y eficiente.

Este módulo marca la transición de la programación imperativa (paso a paso) hacia enfoques más declarativos y funcionales, preparando a los estudiantes para frameworks modernos como React, Vue.js y Node.js. Según Martin Fowler, "cualquier función que puedas escribir en 6 líneas o menos, probablemente debería ser una función".

## 🎯 Objetivos de Aprendizaje

Al completar este módulo, los estudiantes podrán:

- Declarar y utilizar funciones de diferentes tipos
- Implementar parámetros y valores de retorno efectivamente
- Aplicar arrow functions y su sintaxis moderna
- Dominar métodos de arrays funcionales (forEach, map, filter, reduce)
- Crear código modular y reutilizable
- Aplicar principios de programación funcional
- Desarrollar aplicaciones complejas con arquitectura organizada

## 📖 Contenido Teórico

### 1. Fundamentos de Funciones

Las funciones son subprogramas que encapsulan un conjunto de instrucciones para realizar una tarea específica. Son fundamentales para escribir código DRY (Don't Repeat Yourself) y modular.

#### Declaración de Funciones

```javascript
// Declaración clásica (function declaration)
function saludar() {
    console.log("¡Hola mundo!");
}

// Llamada a la función
saludar(); // ¡Hola mundo!

// Las declaraciones se elevan (hoisting)
miFuncion(); // Funciona aunque se llame antes de declararla

function miFuncion() {
    console.log("Hoisting en acción");
}
```

#### Expresiones de Función

```javascript
// Expresión de función (function expression)
const despedirse = function() {
    console.log("¡Hasta luego!");
};

// Las expresiones NO se elevan
// miFuncionExpresion(); // ❌ Error: Cannot access before initialization

const miFuncionExpresion = function() {
    console.log("Soy una expresión");
};
```

### 2. Parámetros y Argumentos

Los parámetros permiten que las funciones reciban datos externos para procesarlos.

#### Parámetros Básicos

```javascript
function saludarPersona(nombre) {
    console.log(`¡Hola, ${nombre}!`);
}

saludarPersona("Ana");     // ¡Hola, Ana!
saludarPersona("Carlos");  // ¡Hola, Carlos!
```

#### Múltiples Parámetros

```javascript
function calcularArea(largo, ancho) {
    const area = largo * ancho;
    console.log(`El área es: ${area}`);
    return area;
}

const resultado = calcularArea(5, 3); // El área es: 15
console.log(resultado); // 15
```

#### Valores por Defecto

```javascript
function saludarConTitulo(nombre, titulo = "Sr./Sra.") {
    console.log(`¡Hola, ${titulo} ${nombre}!`);
}

saludarConTitulo("García");              // ¡Hola, Sr./Sra. García!
saludarConTitulo("Pérez", "Dr.");        // ¡Hola, Dr. Pérez!
```

#### Parámetros Rest (...)

```javascript
function sumarTodos(...numeros) {
    let total = 0;
    for (const numero of numeros) {
        total += numero;
    }
    return total;
}

console.log(sumarTodos(1, 2, 3));        // 6
console.log(sumarTodos(1, 2, 3, 4, 5));  // 15
```

### 3. Valores de Retorno

Las funciones pueden devolver valores usando la palabra clave `return`.

```javascript
function multiplicar(a, b) {
    return a * b;
}

function esPar(numero) {
    return numero % 2 === 0;
}

function clasificarEdad(edad) {
    if (edad < 18) {
        return "Menor de edad";
    } else if (edad < 65) {
        return "Adulto";
    } else {
        return "Adulto mayor";
    }
}

// Uso de valores de retorno
const producto = multiplicar(4, 5);        // 20
const esNumeroPar = esPar(8);              // true
const categoria = clasificarEdad(25);      // "Adulto"
```

### 4. Arrow Functions (ES6+)

Las arrow functions proporcionan una sintaxis más concisa y tienen un comportamiento especial con el contexto (`this`).

#### Sintaxis Básica

```javascript
// Función tradicional
function sumar(a, b) {
    return a + b;
}

// Arrow function equivalente
const sumar = (a, b) => {
    return a + b;
};

// Arrow function concisa (retorno implícito)
const sumar = (a, b) => a + b;

// Con un solo parámetro (paréntesis opcionales)
const duplicar = x => x * 2;

// Sin parámetros
const saludar = () => console.log("¡Hola!");
```

#### Ventajas de Arrow Functions

```javascript
// Más legible en funciones cortas
const numeros = [1, 2, 3, 4, 5];

// Función tradicional
const cuadrados1 = numeros.map(function(x) {
    return x * x;
});

// Arrow function
const cuadrados2 = numeros.map(x => x * x);

// Especialmente útil en callbacks
setTimeout(() => console.log("Ejecutado después de 1 segundo"), 1000);
```

### 5. Scope y Closures

#### Scope (Ámbito)

```javascript
// Scope global
const mensajeGlobal = "Soy global";

function miFuncion() {
    // Scope local
    const mensajeLocal = "Soy local";
    console.log(mensajeGlobal); // ✅ Acceso a variable global
    console.log(mensajeLocal);  // ✅ Acceso a variable local
}

miFuncion();
console.log(mensajeGlobal);    // ✅ Acceso desde fuera
// console.log(mensajeLocal);  // ❌ Error: fuera de scope
```

#### Closures

```javascript
function crearContador() {
    let contador = 0;
    
    return function() {
        contador++;
        return contador;
    };
}

const miContador = crearContador();
console.log(miContador()); // 1
console.log(miContador()); // 2
console.log(miContador()); // 3
```

### 6. Métodos de Arrays Funcionales

Los métodos funcionales transforman arrays sin mutar el original, siguiendo principios de inmutabilidad.

#### forEach() - Iteración

```javascript
const frutas = ['manzana', 'banana', 'naranja'];

// En lugar de bucle for tradicional
frutas.forEach((fruta, indice) => {
    console.log(`${indice}: ${fruta}`);
});

// Equivalente con función separada
function mostrarFruta(fruta, indice) {
    console.log(`${indice}: ${fruta}`);
}

frutas.forEach(mostrarFruta);
```

#### map() - Transformación

```javascript
const numeros = [1, 2, 3, 4, 5];

// Crear nuevo array con transformaciones
const cuadrados = numeros.map(x => x * x);
console.log(cuadrados); // [1, 4, 9, 16, 25]

// Transformar objetos
const personas = [
    { nombre: 'Ana', edad: 25 },
    { nombre: 'Juan', edad: 30 },
    { nombre: 'María', edad: 28 }
];

const nombres = personas.map(persona => persona.nombre);
console.log(nombres); // ['Ana', 'Juan', 'María']

// Crear objetos transformados
const personasConCategoria = personas.map(persona => ({
    ...persona,
    categoria: persona.edad >= 30 ? 'Senior' : 'Junior'
}));
```

#### filter() - Filtrado

```javascript
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filtrar números pares
const pares = numeros.filter(x => x % 2 === 0);
console.log(pares); // [2, 4, 6, 8, 10]

// Filtrar objetos complejos
const productos = [
    { nombre: 'Laptop', precio: 1000, categoria: 'Electrónicos' },
    { nombre: 'Camisa', precio: 50, categoria: 'Ropa' },
    { nombre: 'Teléfono', precio: 800, categoria: 'Electrónicos' },
    { nombre: 'Zapatos', precio: 120, categoria: 'Calzado' }
];

const electronicos = productos.filter(producto => producto.categoria === 'Electrónicos');
const caros = productos.filter(producto => producto.precio > 100);
```

#### reduce() - Reducción/Acumulación

```javascript
const numeros = [1, 2, 3, 4, 5];

// Sumar todos los elementos
const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(suma); // 15

// Encontrar el máximo
const maximo = numeros.reduce((max, numero) => numero > max ? numero : max, numeros[0]);

// Crear objeto contador
const palabras = ['hola', 'mundo', 'hola', 'javascript', 'mundo', 'hola'];
const contador = palabras.reduce((acc, palabra) => {
    acc[palabra] = (acc[palabra] || 0) + 1;
    return acc;
}, {});
console.log(contador); // { hola: 3, mundo: 2, javascript: 1 }

// Aplanar arrays
const arrayAnidado = [[1, 2], [3, 4], [5, 6]];
const plano = arrayAnidado.reduce((acc, arr) => acc.concat(arr), []);
console.log(plano); // [1, 2, 3, 4, 5, 6]
```

#### find() - Búsqueda

```javascript
const usuarios = [
    { id: 1, nombre: 'Ana', activo: true },
    { id: 2, nombre: 'Juan', activo: false },
    { id: 3, nombre: 'María', activo: true }
];

// Encontrar el primer usuario activo
const usuarioActivo = usuarios.find(usuario => usuario.activo);
console.log(usuarioActivo); // { id: 1, nombre: 'Ana', activo: true }

// Encontrar por ID
const usuario = usuarios.find(u => u.id === 2);
console.log(usuario); // { id: 2, nombre: 'Juan', activo: false }

// Si no encuentra, retorna undefined
const noExiste = usuarios.find(u => u.id === 10);
console.log(noExiste); // undefined
```

#### sort() - Ordenamiento

```javascript
const numeros = [3, 1, 4, 1, 5, 9, 2, 6];

// Ordenamiento numérico
const numerosOrdenados = [...numeros].sort((a, b) => a - b);
console.log(numerosOrdenados); // [1, 1, 2, 3, 4, 5, 6, 9]

// Ordenamiento descendente
const descendente = [...numeros].sort((a, b) => b - a);

// Ordenar objetos
const estudiantes = [
    { nombre: 'Ana', nota: 85 },
    { nombre: 'Juan', nota: 92 },
    { nombre: 'María', nota: 78 }
];

const porNota = [...estudiantes].sort((a, b) => b.nota - a.nota);
const porNombre = [...estudiantes].sort((a, b) => a.nombre.localeCompare(b.nombre));
```

### 7. Encadenamiento de Métodos

```javascript
const ventas = [
    { producto: 'Laptop', precio: 1000, categoria: 'Electrónicos', vendido: true },
    { producto: 'Camisa', precio: 50, categoria: 'Ropa', vendido: false },
    { producto: 'Teléfono', precio: 800, categoria: 'Electrónicos', vendido: true },
    { producto: 'Zapatos', precio: 120, categoria: 'Calzado', vendido: true }
];

// Encadenar múltiples operaciones
const ingresosPorElectronicos = ventas
    .filter(venta => venta.vendido)                    // Solo vendidos
    .filter(venta => venta.categoria === 'Electrónicos') // Solo electrónicos
    .map(venta => venta.precio)                        // Solo precios
    .reduce((total, precio) => total + precio, 0);     // Sumar total

console.log(ingresosPorElectronicos); // 1800

// Análisis complejo en una cadena
const resumen = ventas
    .filter(venta => venta.vendido)
    .reduce((acc, venta) => {
        acc.totalVentas += venta.precio;
        acc.productosVendidos++;
        acc.categorias.add(venta.categoria);
        return acc;
    }, {
        totalVentas: 0,
        productosVendidos: 0,
        categorias: new Set()
    });
```

### 8. Programación Funcional vs Imperativa

#### Estilo Imperativo (tradicional)

```javascript
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        pares.push(numeros[i] * numeros[i]);
    }
}

console.log(pares); // [4, 16, 36, 64, 100]
```

#### Estilo Funcional (declarativo)

```javascript
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pares = numeros
    .filter(x => x % 2 === 0)    // Filtrar pares
    .map(x => x * x);            // Elevar al cuadrado

console.log(pares); // [4, 16, 36, 64, 100]
```

### 9. Funciones de Orden Superior

```javascript
// Función que recibe otra función como parámetro
function aplicarOperacion(array, operacion) {
    return array.map(operacion);
}

const numeros = [1, 2, 3, 4, 5];
const cuadrados = aplicarOperacion(numeros, x => x * x);
const dobles = aplicarOperacion(numeros, x => x * 2);

// Función que retorna otra función
function crearMultiplicador(factor) {
    return function(numero) {
        return numero * factor;
    };
}

const triplicar = crearMultiplicador(3);
const quintuplicar = crearMultiplicador(5);

console.log(triplicar(4));    // 12
console.log(quintuplicar(3)); // 15
```

### 10. Mejores Prácticas

#### 1. Funciones Puras

```javascript
// ✅ Función pura: mismo input → mismo output, sin efectos secundarios
function calcularDescuento(precio, porcentaje) {
    return precio * (porcentaje / 100);
}

// ❌ Función impura: modifica variables externas
let total = 0;
function agregarAlTotal(cantidad) {
    total += cantidad; // Efecto secundario
    return total;
}
```

#### 2. Composición de Funciones

```javascript
// Funciones pequeñas y específicas
const esPar = x => x % 2 === 0;
const cuadrado = x => x * x;
const mayor10 = x => x > 10;

// Componer funciones para lógica compleja
const procesarNumeros = numeros => numeros
    .filter(esPar)
    .map(cuadrado)
    .filter(mayor10);

console.log(procesarNumeros([1, 2, 3, 4, 5, 6])); // [16, 36]
```

#### 3. Nombres Descriptivos

```javascript
// ❌ Nombres confusos
const calcular = (x, y, z) => x * y * z;

// ✅ Nombres descriptivos
const calcularVolumenCaja = (largo, ancho, altura) => largo * ancho * altura;
```

## 💻 Archivos de Práctica

1. **`01_declaracion.js`** - Declaración básica de funciones
2. **`02_parametro.js`** - Parámetros y argumentos
3. **`03_retorno.js`** - Valores de retorno
4. **`04_multiplesParametros.js`** - Múltiples parámetros
5. **`05_valoresPorDefecto.js`** - Parámetros con valores por defecto
6. **`06_almacenamiento.js`** - Almacenar funciones en variables
7. **`07_arrowFunctions.js`** - Arrow functions modernas
8. **`08_calculadora.js`** - Proyecto: calculadora con funciones
9. **`09_forEach.js`** - Método forEach para iteración
10. **`10_map.js`** - Transformación con map
11. **`11_filter.js`** - Filtrado de arrays
12. **`12_reduce.js`** - Reducción y acumulación
13. **`13_find.js`** - Búsqueda de elementos
14. **`14_sort.js`** - Ordenamiento de arrays

## 🚀 Proyecto Final: Sistema de Gestión de Inventario

### Descripción
Desarrollar un sistema completo de gestión de inventario que integre todos los conceptos aprendidos: funciones modulares, manipulación de arrays, programación funcional y lógica de negocio compleja.

### Características Principales
- CRUD de productos (Crear, Leer, Actualizar, Eliminar)
- Sistema de búsqueda y filtrado avanzado
- Cálculos de inventario y reportes
- Validaciones de datos
- Interfaz de usuario interactiva

### Funcionalidades
1. **Gestión de Productos**
   - Agregar nuevos productos
   - Modificar información existente
   - Eliminar productos
   - Validar datos de entrada

2. **Análisis y Reportes**
   - Calcular valor total del inventario
   - Productos con stock bajo
   - Productos más caros/baratos
   - Agrupación por categorías

3. **Búsqueda y Filtrado**
   - Buscar por nombre o código
   - Filtrar por categoría, precio, stock
   - Ordenar por diferentes criterios

## 🔧 Ejercicios Prácticos Avanzados

### Ejercicio 1: Procesador de Transacciones
Crear funciones que procesen un array de transacciones financieras:
- Calcular balance total
- Filtrar por tipo (ingreso/gasto)
- Agrupar por categoría
- Generar resumen mensual

### Ejercicio 2: Analizador de Texto
Desarrollar funciones para análisis de texto:
- Contar palabras y caracteres
- Encontrar palabras más frecuentes
- Detectar palíndromos
- Generar estadísticas de lectura

### Ejercicio 3: Sistema de Calificaciones Avanzado
Implementar un sistema completo que:
- Calcule promedios ponderados
- Determine rankings de estudiantes
- Genere reportes por materia
- Identifique estudiantes en riesgo

## 📚 Referencias Bibliográficas

1. **Fowler, M.** (2018). *Refactoring: Improving the Design of Existing Code*. 2nd Edition. Addison-Wesley.
2. **Simpson, K.** (2021). *You Don't Know JS Yet: Scope & Closures*. 2nd Edition. O'Reilly Media.
3. **Frisby, B.** (2017). *Professor Frisby's Mostly Adequate Guide to Functional Programming*. GitBook.
4. **Elliott, E.** (2017). *Composing Software*. Medium Articles Series.
5. **Flanagan, D.** (2020). *JavaScript: The Definitive Guide* - Capítulos 8-9. O'Reilly Media.

## 🌐 Enlaces de Interés

### Documentación Oficial
- [MDN - Functions](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions)
- [MDN - Arrow Functions](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [MDN - Array Methods](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)

### Programación Funcional
- [Functional Programming in JavaScript](https://www.youtube.com/playlist?list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84) - Fun Fun Function
- [Professor Frisby's Guide](https://mostly-adequate.gitbook.io/mostly-adequate-guide/) - Guía completa
- [Functional Programming Principles](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)

### Herramientas y Práctica
- [Ramda.js](https://ramdajs.com/) - Librería de programación funcional
- [Lodash/FP](https://github.com/lodash/lodash/wiki/FP-Guide) - Utilidades funcionales
- [Functional Programming Exercises](https://github.com/InceptionCode/functional-programming-exercises)

### Recursos Avanzados
- [JavaScript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)
- [Clean Code JavaScript](https://github.com/ryanmcdermott/clean-code-javascript)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

### Comunidades y Práctica
- [Codewars - Functional Programming](https://www.codewars.com/kata/search/javascript?q=%23functional-programming)
- [HackerRank - Functional Programming](https://www.hackerrank.com/domains/fp)
- [LeetCode - Array Problems](https://leetcode.com/problemset/all/?topicSlugs=array)

## 🏆 Certificación y Evaluación

### Proyecto Final Evaluativo
Para completar el curso, los estudiantes deben desarrollar un proyecto que demuestre:

1. **Arquitectura Modular** (25%)
   - Funciones bien definidas y reutilizables
   - Separación de responsabilidades
   - Código organizado y mantenible

2. **Programación Funcional** (25%)
   - Uso efectivo de map, filter, reduce
   - Funciones puras sin efectos secundarios
   - Composición de funciones

3. **Lógica Compleja** (25%)
   - Algoritmos de procesamiento de datos
   - Manejo de casos edge
   - Validaciones robustas

4. **Mejores Prácticas** (25%)
   - Código limpio y legible
   - Nombres descriptivos
   - Documentación adecuada

## 🚀 Próximos Pasos en tu Carrera

Habiendo completado los fundamentos de JavaScript, estás preparado para:

### Desarrollo Frontend
- **React.js** - Framework para interfaces de usuario
- **Vue.js** - Framework progresivo
- **Angular** - Plataforma completa de desarrollo

### Desarrollo Backend
- **Node.js** - JavaScript en el servidor
- **Express.js** - Framework web minimalista
- **MongoDB** - Base de datos NoSQL

### Herramientas Modernas
- **TypeScript** - JavaScript con tipos estáticos
- **Webpack** - Bundler de módulos
- **Jest** - Framework de testing

### Frameworks y Librerías
- **Lodash** - Utilidades de programación funcional
- **Moment.js/Day.js** - Manipulación de fechas
- **Axios** - Cliente HTTP

---

**¡Felicitaciones por completar el curso "Bases de JavaScript"!**  
Ahora tienes las herramientas fundamentales para crear aplicaciones web modernas y eficientes.

**Duración estimada:** 5-6 horas  
**Dificultad:** Intermedio-Avanzado  
**Prerrequisitos:** Módulos 1, 2 y 3 completados
