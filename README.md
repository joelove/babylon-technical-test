# Babylon Technical Test

A thin version of Babylon's web portal.

### Pre-requisites

You will need Node and NPM installed to run this project. If you don't, there are several options to consider; it might be worth talking to Google. ([Just tell me how!](https://nodejs.org/en/download/package-manager/))

### Tooling

This project uses [LESS](http://lesscss.org/), [Babel](https://babeljs.io/) and [Grunt](http://gruntjs.com/) to build assets. If you're unfamiliar with any of these tools, please take a look at their respective documentation pages. Templating is handled by [Twig](https://github.com/justjohn/twig.js/wiki).

### Set up

The server runs on Node with Express. Nothing to see here, just:

```
npm install
```

### Starting the application

You can start the application using:

```
npm start
```

You won't need to restart the server when changing assets or views. Assets are built automatically when they change and whilst templates _do_ require a restart, that will happen automatically so no need to worry.

### Building assets

If you're running the server, assets will get built automatically when they change. They are also built after you run `npm install`. Alternatively, if you want to build them manually use:

```
npm run build
```

> Notes: Grunt transpiles the `javascript` folder from ES6/7 to vanilla JavaScript, saves it to a temporary directory, then concatenates it and saves it to `dist/build.concat.js`. Then LESS is then compiled to a single file and minified, `dist/less.min.css`.

### Running the test suite

To run the tests, use:

```
npm test
```

### Code Quality

You can lint the code with ESLint (Airbnb config) using:

```
npm run lint
```
