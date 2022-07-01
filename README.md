# Quasar + Vite + Pinia + Axios + i18n (vue 3)

Acortador de URLs.

Esto es una repositorio de pruebas para usar Quasar Framework 2 (para vue 3).

# Requerimientos

Previamente debe tener instalado NodeJS.

https://nodejs.org/es/

Como editor de código, le recomiendo Visual Studio Code.

https://code.visualstudio.com/

Los requerimientos para poder usar Quasar Framework los puede encontrar en:

https://quasar.dev/

### Instalación del CLI:

```sh
$ npm i -g @quasar/cli
```

Fuente: https://quasar.dev/start/quasar-cli

### Inicio de un nuevo proyecto usando el CLI:

```sh
$ npm init quasar
```

Fuente: https://quasar.dev/start/quasar-cli

# Primeros pasos

Se ha iniciado el proyecto con el CLI, seleccionando las siguientes opciones:

✔ What would you like to build? › App with Quasar CLI, let's go!

✔ Project folder: … shorturl-quasar-vite-pinia-axios

✔ Pick Quasar version: › Quasar v2 (Vue 3 | latest and greatest)

✔ Pick script type: › Javascript

✔ Pick Quasar App CLI variant: › Quasar App CLI with Vite

✔ Package name: … shorturl-quasar-vite-pinia-axios

✔ Project product name: (must start with letter if building mobile apps) … Short URL

✔ Project description: … Acortador de URL con QUASAR

✔ Author: … Vicente Alcañiz Huerta <vialhue@gmail.com>

✔ Pick your CSS preprocessor: › Sass with SCSS syntax

✔ Check the features needed for your project: › ESLint, State Management (Pinia), Axios, Vue-i18n

✔ Pick an ESLint preset: › Prettier

## Correcciones sobre la plantilla estandar proporcionada por QUASAR CLI.

He realizado la traducción al castellano de los comentarios incluidos en los diferentes ficheros de la plantilla original, y también he completado los scripts para DEV y BUILD que parece que no se incluyen en la plantilla.

En el `package.json` se ha actualizado los `scripts`:

```json
  "scripts": {
    "lint": "eslint --ext .js,.vue ./",
    "format": "prettier --write \"**/*.{js,vue,scss,html,md,json}\" --ignore-path .gitignore",
    "test": "echo \"No test specified\" && exit 0",
    "dev": "quasar dev",
    "build": "quasar build"
  },
```
