# 🔀 Módulo 2: Estructuras Condicionales

## 📚 Descripción del Módulo

Este módulo aborda uno de los pilares fundamentales de la programación: **el control de flujo**. Las estructuras condicionales permiten que los programas tomen decisiones basadas en diferentes condiciones, creando comportamientos dinámicos e interactivos. 

El control de flujo es esencial para crear aplicaciones inteligentes que respondan de manera diferente según las circunstancias, desde validación de formularios hasta lógica de negocio compleja. Según Dijkstra (1968), las estructuras de control son fundamentales para la programación estructurada y el desarrollo de software mantenible.

## 🎯 Objetivos de Aprendizaje

Al completar este módulo, los estudiantes podrán:

- Utilizar operadores lógicos para crear expresiones complejas
- Implementar estructuras if/else simples y anidadas
- Aplicar el operador ternario para decisiones concisas
- Construir estructuras switch-case para múltiples opciones
- Diseñar algoritmos de decisión efectivos
- Crear aplicaciones interactivas con lógica condicional

## 📖 Contenido Teórico

### 1. Operadores Lógicos

Los operadores lógicos permiten combinar o modificar expresiones booleanas para crear condiciones más complejas y sofisticadas.

#### AND Lógico (`&&`)
Devuelve `true` solo si **ambos** operandos son verdaderos.

```javascript
const tieneLicencia = true;
const esMayorDeEdad = true;
const puedeConducir = tieneLicencia && esMayorDeEdad; // true

// Evaluación de cortocircuito
console.log(false && console.log("No se ejecuta")); // false
```

**Tabla de verdad:**
| A | B | A && B |
|---|---|--------|
| true | true | true |
| true | false | false |
| false | true | false |
| false | false | false |

#### OR Lógico (`||`)
Devuelve `true` si **al menos uno** de los operandos es verdadero.

```javascript
const esAdmin = false;
const esEditor = true;
const tienePermisos = esAdmin || esEditor; // true

// Evaluación de cortocircuito
const nombre = "" || "Usuario Anónimo"; // "Usuario Anónimo"
```

**Tabla de verdad:**
| A | B | A \|\| B |
|---|---|----------|
| true | true | true |
| true | false | true |
| false | true | true |
| false | false | false |

#### NOT Lógico (`!`)
Invierte el valor booleano del operando.

```javascript
const activo = true;
const inactivo = !activo; // false

// Doble negación para convertir a booleano
const estaVacio = !!""; // false
const tieneValor = !!"Hola"; // true
```

#### Valores Falsy y Truthy

JavaScript convierte automáticamente valores a booleanos en contextos lógicos:

**Valores Falsy** (se evalúan como `false`):
- `false`
- `0`
- `""` (string vacío)
- `null`
- `undefined`
- `NaN`

**Valores Truthy** (se evalúan como `true`):
- Cualquier número diferente de 0
- Cualquier string no vacío
- Objetos y arrays (incluso vacíos)
- `true`

### 2. Estructura if/else

La estructura condicional más básica y fundamental en programación.

#### if Simple
```javascript
const edad = 18;

if (edad >= 18) {
    console.log("Eres mayor de edad");
    console.log("Puedes votar");
}
```

#### if/else
```javascript
const temperatura = 25;

if (temperatura > 30) {
    console.log("Hace calor");
} else {
    console.log("Temperatura agradable");
}
```

#### if/else if/else
```javascript
const nota = 85;

if (nota >= 90) {
    console.log("Excelente");
} else if (nota >= 80) {
    console.log("Muy bueno");
} else if (nota >= 70) {
    console.log("Bueno");
} else if (nota >= 60) {
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}
```

#### if Anidado
```javascript
const usuario = {
    activo: true,
    rol: "admin",
    permisos: ["leer", "escribir", "eliminar"]
};

if (usuario.activo) {
    if (usuario.rol === "admin") {
        if (usuario.permisos.includes("eliminar")) {
            console.log("Acceso completo autorizado");
        } else {
            console.log("Acceso limitado");
        }
    } else {
        console.log("Acceso de usuario estándar");
    }
} else {
    console.log("Usuario desactivado");
}
```

### 3. Operador Ternario

Una forma concisa de escribir declaraciones if/else simples. Útil para asignaciones condicionales.

#### Sintaxis
```javascript
condicion ? valorSiVerdadero : valorSiFalso
```

#### Ejemplos
```javascript
const edad = 20;
const estado = edad >= 18 ? "Mayor" : "Menor";

// Equivalente a:
let estado2;
if (edad >= 18) {
    estado2 = "Mayor";
} else {
    estado2 = "Menor";
}

// Ternarios anidados (usar con moderación)
const categoria = edad < 13 ? "Niño" : 
                 edad < 18 ? "Adolescente" : 
                 edad < 65 ? "Adulto" : "Adulto Mayor";
```

### 4. Estructura switch

Ideal para comparar una variable contra múltiples valores específicos. Más eficiente y legible que múltiples if/else cuando se evalúa la misma expresión.

#### Sintaxis Básica
```javascript
const diaSemana = 3;

switch (diaSemana) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
    case 7:
        console.log("Fin de semana");
        break;
    default:
        console.log("Día inválido");
}
```

#### Casos Agrupados
```javascript
const mes = "Enero";

switch (mes) {
    case "Diciembre":
    case "Enero":
    case "Febrero":
        console.log("Verano en el hemisferio sur");
        break;
    case "Marzo":
    case "Abril":
    case "Mayo":
        console.log("Otoño en el hemisferio sur");
        break;
    case "Junio":
    case "Julio":
    case "Agosto":
        console.log("Invierno en el hemisferio sur");
        break;
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
        console.log("Primavera en el hemisferio sur");
        break;
    default:
        console.log("Mes no válido");
}
```

### 5. Mejores Prácticas

#### 1. Usar comparaciones estrictas
```javascript
// ✅ Recomendado
if (valor === "5") {
    // código
}

// ❌ Evitar
if (valor == "5") {
    // puede dar resultados inesperados
}
```

#### 2. Extraer condiciones complejas
```javascript
// ❌ Difícil de leer
if (usuario.activo && usuario.rol === "admin" && usuario.permisos.includes("write") && new Date() < usuario.fechaVencimiento) {
    // código
}

// ✅ Más claro
const esUsuarioActivo = usuario.activo;
const esAdmin = usuario.rol === "admin";
const tienePermisoEscritura = usuario.permisos.includes("write");
const noHaVencido = new Date() < usuario.fechaVencimiento;

if (esUsuarioActivo && esAdmin && tienePermisoEscritura && noHaVencido) {
    // código
}
```

#### 3. Usar return temprano
```javascript
// ✅ Return temprano
function validarUsuario(usuario) {
    if (!usuario) {
        return "Usuario no encontrado";
    }
    
    if (!usuario.activo) {
        return "Usuario inactivo";
    }
    
    if (!usuario.permisos.length) {
        return "Sin permisos";
    }
    
    return "Usuario válido";
}

// ❌ Anidación excesiva
function validarUsuario2(usuario) {
    if (usuario) {
        if (usuario.activo) {
            if (usuario.permisos.length) {
                return "Usuario válido";
            } else {
                return "Sin permisos";
            }
        } else {
            return "Usuario inactivo";
        }
    } else {
        return "Usuario no encontrado";
    }
}
```

## 💻 Archivos de Práctica

1. **`01_operadoresLogicos.js`** - AND, OR, NOT y valores truthy/falsy
2. **`02_if.js`** - Estructura if básica
3. **`03_else.js`** - Estructura if/else
4. **`04_ifAnidado.js`** - Estructuras if anidadas
5. **`05_elseif.js`** - Cadenas if/else if/else
6. **`06_ifTernario.js`** - Operador ternario
7. **`07_switch.js`** - Estructura switch-case
8. **`08_calculadora.js`** - Proyecto integrador: calculadora

## 🚀 Proyecto: Calculadora Básica

### Descripción
Desarrollar una calculadora web que permita realizar operaciones básicas utilizando todas las estructuras condicionales aprendidas.

### Características
- Operaciones: suma, resta, multiplicación, división
- Validación de entrada
- Manejo de errores (división por cero)
- Interfaz web simple

### Tecnologías
- JavaScript (lógica)
- HTML (estructura)
- Eventos del DOM

## 🔧 Ejercicios Prácticos

### Ejercicio 1: Clasificador de Edad
Crear un programa que clasifique a las personas según su edad:
- 0-12: Niño
- 13-17: Adolescente  
- 18-64: Adulto
- 65+: Adulto Mayor

### Ejercicio 2: Validador de Contraseñas
Implementar un validador que verifique:
- Longitud mínima (8 caracteres)
- Al menos una mayúscula
- Al menos un número
- Al menos un carácter especial

### Ejercicio 3: Sistema de Calificaciones
Crear un sistema que convierta notas numéricas a letras:
- 90-100: A
- 80-89: B
- 70-79: C
- 60-69: D
- 0-59: F

## 📚 Referencias Bibliográficas

1. **Dijkstra, E. W.** (1968). *Go To Statement Considered Harmful*. Communications of the ACM.
2. **McConnell, S.** (2004). *Code Complete: A Practical Handbook of Software Construction*. 2nd Edition. Microsoft Press.
3. **Flanagan, D.** (2020). *JavaScript: The Definitive Guide* - Capítulo 4. O'Reilly Media.
4. **MDN Web Docs** (2024). *Control flow and error handling*. [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)

## 🌐 Enlaces de Interés

### Documentación Oficial
- [MDN - if...else](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/if...else)
- [MDN - switch](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/switch)
- [MDN - Operadores lógicos](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Logical_Operators)

### Herramientas de Visualización
- [Python Tutor JavaScript](http://pythontutor.com/javascript.html) - Visualiza la ejecución paso a paso
- [JavaScript Visualizer 9000](https://www.jsv9000.app/) - Ejecución visual de código

### Recursos Educativos
- [JavaScript.info - Conditional operators](https://javascript.info/ifelse)
- [freeCodeCamp - Basic JavaScript](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/)
- [Eloquent JavaScript - Program Structure](https://eloquentjavascript.net/02_program_structure.html)

### Ejercicios Interactivos
- [Codecademy - Conditionals](https://www.codecademy.com/learn/introduction-to-javascript)
- [HackerRank - JavaScript Conditionals](https://www.hackerrank.com/domains/tutorials/30-days-of-code)
- [LeetCode - JavaScript](https://leetcode.com/)

## 🚀 Siguientes Pasos

Con el dominio de las estructuras condicionales, estarás preparado para el **Módulo 3: Arrays y Bucles**, donde aprenderás a trabajar con colecciones de datos y a automatizar tareas repetitivas mediante iteración.

---

**Duración estimada:** 3-4 horas  
**Dificultad:** Principiante-Intermedio  
**Prerrequisitos:** Módulo 1 completado
