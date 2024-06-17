# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh




# Pruebas E2E (Cypress)

## Instalar Librería

```
npm install cypress --save-dev
```

## Usar Interfaz gráfica de Cypress

```
npx cypress open
```

## Ejecutar pruebas desde terminal

```
npx cypress run
```

## Ejecutar una prueba específica en terminal

```
npx cypress run --spec "ruta/prueba/login.cy.js"
```

## Ejecutar una prueba  desde terminal en un navegador en específico

```
npx cypress run --browser chrome
```
