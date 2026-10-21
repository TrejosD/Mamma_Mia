# Landing Page, Pizzeria Mamma Mia - React + Vite

Proyecto estatico, creado con React + Vite, landing page para una pizzeria.
Este proyecto muestra la parte #5 del hito de React para desafio_latam.
Se incluye navegacion completa y rutas protegidas con React-Router.

## Acceso

```
https://trejosd.github.io/Mamma_Mia/
```

## Descripción

- La pagina muestra un landig page con tienda online, para una pizzeria.
- Se obtienen los recursos para cada pizza, de manera dinamica gracias a un API-local.
- El proyecto contempla tambien 2 secciones de Registro y Login, con sus respectivas validaciones.
- Desarrollado un carrito completamente funcional, mostrando el total, como agregar o eliminar productos.

## Tecnologías Utilizadas

- HTML5
- CSS3
- JS
- React + Vite

## Estructura del Proyecto

```text
├─ public
│   ├── favicon.svg
│   └── icons.svg
├─ src
│   ├── assets
│   │    ├── Header.jpg
│   │    ├── hero.png
│   │    ├── react.svg
│   │    └── vite.svg
│   ├── components
│   │    ├── Cardpizza.jsx
│   │    ├── Footer.jsx
│   │    ├── Header.jsx
│   │    └── Navbar.jsx
│   ├── pages
│   │    ├── Pizza.jsx
│   │    ├── Cart.jsx
│   │    ├── Home.jsx
│   │    ├── Login.jsx
│   │    ├── Register.jsx
│   │    ├── Profile.jsx
│   │    └── NotFound.jsx
│   ├── contexts
│   │    ├── CartContext.jsx
│   │    └── PizzasContext.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## Características

- Layout principal contruido con Flexbox.
- Header donde crear/ingresar a tu cuenta, como comprar.
- Sección principal con los productos disponibles.
- Sección de Registro, donde crear usuario y contraseña.
- Sección de login, donde iniciar seccion. Con sus respectivas validaciones.
- Sección de carrito desarrollo en funcionamiento.
- Rutas protegidas con React Router, JWT en desarrollo.

## Autor

Proyecto creado por Diego Trejos para DesafioLatam
