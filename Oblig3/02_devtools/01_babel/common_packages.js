{
  "scripts": {
    "build": "webpack --mode production", // production build
    "start": "webpack-dev-server --mode development", // dev
    "test": "jest --config ./jest.config.json", // test with jest and custom config
    "test:watch": "yarn test -- --watch" // watch for changes always on
  },
  "dependencies": {
    "react": "^16.13.1", // react avhenger av denne
    "react-dom": "16.13.1" // react avhenger av denne
  },
  "devDependencies": {
    "@babel/core": "7.10.2", // babel trenger denne for å fungere
    "@babel/plugin-proposal-nullish-coalescing-operator": "^7.8.3", // support av ny javascript som ikke er default i browser
    "@babel/plugin-proposal-optional-chaining": "^7.10.0", // support av ny javascript som ikke er default i browser
    "@babel/plugin-syntax-dynamic-import": "^7.8.3", // support av ny javascript som ikke er default i browser
    "@babel/plugin-transform-react-constant-elements": "^7.10.1", // extracts static React elements as constants.
    "@babel/plugin-transform-react-inline-elements": "^7.10.1", // evaluates React.createElement during compilation and inlines the result
    "@babel/plugin-transform-runtime": "^7.10.1", // Reduces code duplication by extracting Babel helpers into shared modules.
    "@babel/preset-env": "^7.10.2", // babel trenger denne til å gi support til siste nytt av Javascript
    "@babel/preset-react": "7.10.1", // babel trenger denne til å gi support til React
    "@babel/register": "" // brukes til å "koble" seg på node require (common js) for å transformere filer som hentes med require
    "@babel/polyfill": "" // før babel 7.4.0 brukt man denne til å "polyfille" javascript for å gi browser support
    "@testing-library/jest-dom": "^5.10.1", // companion library for React Testing Library that provides custom DOM element matchers for Jest
    "@testing-library/react": "^10.3.0",
    "@svgr/webpack": "^5.4.0", // transforms imported files into React components
    "babel-eslint": "^9.0.0", // gjør det mulig å linte kode som babel genererer
    "babel-loader": "8.1.0", // babel trenger denne for å fungere
    "babel-plugin-transform-react-remove-prop-types": "^0.4.24", // removes unnecessary prop-types from production code.
    "core-js": "" // erstatter @babel/polyfill og støtter alle ECMAScript standard, proposals ++
    "css-loader": "^3.2.0", // Parses CSS files, resolving external resources, such as images, fonts, and additional style imports.
    "eslint": "^5.14.1", // lintingmotoren (identifiser og rapportere tilbake) "feil" og "dårlig" kodekvalitet
    "eslint-config-airbnb": "^17.1.0", // bruk av airbnb sin beste praksis for linting
    "eslint-config-prettier": "^4.1.0", // sørger for at Prettier i editoren ikke krangler med eslint
    "eslint-config-wesbos": "0.0.19", // for å gjøre verden litt enklere
    "eslint-plugin-html": "^5.0.3", // linting av html
    "eslint-plugin-import": "^2.16.0", // linting av ES6 import
    "eslint-plugin-jsx-a11y": "^6.2.1", // linting som tar hensyn til tilgjengelighet
    "eslint-plugin-prettier": "^3.0.1", // bruker prettier til å linte
    "eslint-plugin-react": "^7.12.4", // linting av react
    "eslint-plugin-react-hooks": "^1.3.0", // linting av hooks
    "file-loader": "^6.0.0", // needed to reference any other kinds of files (no optimazation)
    "jest": "26.0.1", // testing tool
    "html-webpack-plugin": "^4.3.0", // generate an HTML file for us to be used with the bundle
    "mini-css-extract-plugin": "^0.9.0", // Extracts loaded styles into separate files for production use to take advantage of browser caching.
    "node-sass": "^4.14.1", // to use scss files
    "optimize-css-assets-webpack-plugin": "^5.0.3", // minimizing our code
    "postcss-import": "^12.0.1", // Enables PostCSS to process @import statements
    "postcss-loader": "^3.0.0", // Needed for PostCSS to work, a huge library of plugins that you can use to extend CSS syntax, perform optimization, or provide fallbacks for older browsers.
    "postcss-preset-env": "^6.7.0", // Applies polyfills to support modern CSS features in most browsers
    "prettier": "^1.16.4", // prettier til formatinger av kode
    "react-test-renderer": "^16.13.1", // snapshot testing to see diff in UI
    "resolve-url-loader": "^3.1.1", // make relative imports work from @imported Sass files
    "sass-loader": "^8.0.2", // webpack handle scss files
    "style-loader": "^1.2.1", // During development, injects loaded styles into the document at runtime.
    "terser-webpack-plugin": "^3.0.6", // minimizing our code
    "url-loader": "^4.1.0", // handle common image formats (turn them in to base64 if small enough)
    "webpack": "^4.43.0", // selve motoren til å kompilere, bundle, minifye, sette opp webserver +++
    "webpack-cli": "^3.3.12", // gjør det mulig å bruke webpack kommandoer i cli (npm script)
    "webpack-dev-server": "^3.11.0" // create dev server
  }
}
