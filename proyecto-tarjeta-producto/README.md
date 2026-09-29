# Tarjeta Producto - Web Component

Proyecto desarrollado para el primer parcial de la asignatura **Desarrollo de Aplicaciones Web y Sistemas Operativos** (UFPSO).

## Descripción

Este proyecto implementa un **Web Component nativo** llamado `<tarjeta-producto>`, construido con HTML, CSS y JavaScript vanilla (sin frameworks), utilizando `customElements` y `Shadow DOM` para encapsular su estructura y estilos.

El componente es:
- **Reutilizable**: se usa 3 veces en `index.html` con datos distintos.
- **Configurable mediante props (atributos)**: `imagen`, `titulo`, `descripcion`, `precio`.
- **Emisor de eventos personalizados**: `agregar-carrito` y `ver-detalle`.
- **Responsivo**: se adapta a pantallas pequeñas mediante media queries.

## Tecnologías utilizadas

- HTML5
- CSS3 (Shadow DOM styling)
- JavaScript (ES6+, Web Components API)

## Estructura del proyecto

```
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── tarjeta-producto.js
├── assets/
│   └── (imágenes de los productos)
└── README.md
```

## Cómo ejecutarlo

1. Clonar el repositorio.
2. Abrir la carpeta en Visual Studio Code.
3. Ejecutar `index.html` con la extensión **Live Server**.
4. Interactuar con las tarjetas: al hacer clic en "Agregar al carrito" o "Ver más" se emite un evento personalizado que se muestra en pantalla.

## Autor

Stevan Mayiv Aleyandro Marcon Márquez — Código 0192709
