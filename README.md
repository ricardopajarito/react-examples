# Proyecto con ejemplos prácticos de react
### Librerías
#### react hook form
Para crear formularios y evitar demasiados renders en la aplicación

#### react query
Sirve para no utilizar fetch en useEffect

#### best practices


In production, it is recommended to minify any JavaScript code that is included with your application. **Minification can help your website load several times faster,** especially as the size of your JavaScript source code grows.

Here's one way to set it up:

1. [Install Node.js](https://nodejs.org/)
2. Run `npm init -y` in your project folder (**don't skip this step!**)
3. Run `npm install terser`

Now, to minify a file called `like-button.js`, run in the terminal:

```
npx terser -c -m -o like-button.min.js -- like-button.js
```

This will produce a file called `like-button.min.js` with the minified code in the same directory. If you're typing this often, you can [create an npm script](https://medium.freecodecamp.org/introduction-to-npm-scripts-1dbb2ae01633) to give this command a name.

agregue una linea