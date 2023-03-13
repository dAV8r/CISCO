# ReactJS

Banuprakash C

Full Stack Architect,

Co-founder Lucida Technologies Pvt Ltd.,

Corporate Trainer,

Email: banu@lucidatechnologies.com; 

banuprakashc@yahoo.co.in

https://www.linkedin.com/in/banu-prakash-50416019/

https://github.com/BanuPrakash/CISCO



Softwares Required:

Visual Studio Code.

Chrome Web Browser

NodeJS Latest LTS

=============================

NodeJS

Platform with V8 JavaScript engine and libuv for C / C++ libraries for event-loop, Threads, OS Async helpers


JS ==> JS engine ==> C / C++ libraries 
JS engines : V8 {Google-> Chrome and NodeJS}, SpiderMonkey {FireFox}, JavaScriptVM { Opera}, Chakra, Continnum, Nashorn {Oracle}

ECMA 5 ==> JS 5
ECMA 2015 / ES 6 --> JS 6 

Where can i use NodeJS?
1) build traditional web applications like ==> using PHP / Servlet / .NET ==> serve rendered pages [ Dynamic HTML pages]
2) build RESTful WebServices ==> Spring Boot / PHP / .NET ==> serve JSON / XML { representation of data}
3) Real-time applications ==> ChatBot
4) Build client side applications

Problem with client side application:
1) We might choose to write code in DART / TypeScript / Latest JS / CoffeeScript / LiveScript
Browser doesn't understand them.
TypeScript provides statically typed feature which is missing in JS { dynamically typed}

JS:

var name = "Roger"; // name is treated as string based on literal value
name.toUpperCase();
name.length();

name = 25;
name++;
name + 5;

TS: file.ts
var name:string = "Roger";
name.toUpperCase();
name.length();

name = 25; // compilation error

In nodeJS:
tsc file.ts ==> file.js

Using NodeJS as platform we can transpile / execute pre-processor to convert "DART / TypeScript / Latest JS / CoffeeScript / LiveScript" into JS

2) Testing
Unit testing / E2E testing

3) bundle

index.html
<script src="commonLib.js"> </script>
<script src="customerModule.js"> </script>
<script src="productModule.js"> </script>
<script src="cartModule.js"> </script>
<script src="paymentModule.js"> </script>

<link rel="stylesheet" href="styles.css">

issues:
1) From browser one network call to index.html
2) depending on <script> tags ==> so many network calls
one for commonLib.js
one for customerModule.js
...

For the above code ==> 7 network calls

Using NodeJS we bundle all of them into one single bundle.js
<script src="bundle.js"> </script>

4) Linting ==> static code analysis ==> Code Programming practice / Coding Conventions

====================================

node --version

create nodeexample folder and open folder in VSC

nodeexample> npm init --y

creates package.json ==> each node projects needs 
this file is where we configure dependencies, devDependencies, scripts

Scripts ==> start server / test / linting

dependencies ==> 3rd party modules you install which is required in production => react
devDepencies are 3rd party modules required only in development stage [ TSC, testing module, liniting ]

Node Package Managers:
1) NPM
2) YARN
3) PNPM

NPM is the default Node package manager comes with NodeJS
Uses:
1) install 3rd party modules
Dependency:
npm install react
npm install @angular/core

Development Dependency:
npm install jest -D
npm install cypress -D

JEST is a unit testing library
cypress is a E2E testing library

===

nodeexample> npm i lodash
nodeexample> npm i jest chai -D

Above commands install 3rd party modules into "node_modules" folder
each project has a "node_modules" folder

transitive dependencies
a -> b -> c -> d
npm i a
install a, b, c and d

When we push this project to "repository" we won't commit "node_modules"

team members:

nodeexample> npm install

"lodash": "4.17.21" ==> install exact version
"lodash": "^4.17.21" ==> install latest version equal or greater than "4.17.21"
"lodash": "~4.17.21" ==> install major version should be "4", minor and patch can be latest



Central Repository
npm config get registry
https://registry.npmjs.org/

npm config set registry=https://cisco.com/myproject

Web page:
https://www.npmjs.com/

NPM is similar to Maven / Gradle / PIP

npm publish

 "scripts": {
    "start": "node ./src/server.js",
    "test": "jest"
  },

  npm start
  npm test

  NodeJS by default is using CommonJS module system:
  * every variable / function is private by default until exported using module.exports 

  * importing using require()
  let {forEach, filter, map} = require('./lib');

  HOF:
  1) function accept function as argument
  2) function return a function

Without Arrow functions:
function isEven(e) {
    return e % 2 === 0;
}

With Arrow:
 (e) => e % 2 === 0;

 OR:
  (e) =>  {
    console.log(...);
    return e % 2 === 0;
  }

==


Check:
1) README.md
2) lib.js
3) server.js
4) package.json

nodeexample> npm start


function test() {
    var x = 10;
    let y = 15; // no diff between var and let
    if(y > x) {
        let t = 100; // block scope
        var r = 889; // this will be hoisted to function scope
    }
    console.log(r); // visible
    console.log(t); // not visible
}

===

JS Unit Testing Framework
1) Jasmine ==> Angular uses
2) Mocha
3) Jest ==> react uses


Assertion Library ==> chai.js
Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.


AAA ==> Assemble Action Assert

npm i mocha -D

====

Webpack
React one small app
React bigger application with All advance featrues with 8  - 10 components
with react-router-dom / Hooks/ API call to server/ Context 

e => e * 2;

e => e.name;

e => <div class="card">
    <h1> {e.name} </h1>
    <h2> {e.price} </h2>
</div>

We have built-in methods for forEach, filter and map in "arrays" type of data

==============================

JS build tools: Grunt, Gulp and Webpack

Grunt is a JavaScript task runner, a tool used to automatically perform frequent tasks such as minification, compilation, unit testing, and linting. 

tsc customer.ts ==> customer.js
tsc product.ts ==> product.js

Why Webpack?
1) automate compilation
2) create bundles
    bundle.js includes all the js code 
3) before bundle we need to 
    a) minifiy ==> remove all empty white spaces
    b) uglify ==> shorten variable and function names
4) automate inclusion of the compiled bundle into index.html
    <script src="bundle.js"> </script>
5) automate including CSS 
6) etc..,

Default javascript build tool which comes with react, angular, vue scaffolding code is webpack

webpackexample> npm init --y
webpackexample> npm i webpack webpack-cli webpack-dev-server html-webpack-plugin css-loader style-loader @babel/core babel-loader @babel/preset-env -D
npm start
npm test

1) npm run dev
> webpackexample@1.0.0 dev
> webpack --mode development

asset bundle.js 3.82 KiB [emitted] (name: main)
./src/index.js 715 bytes [built] [code generated]
./src/lib.js 645 bytes [built] [code generated]
webpack 5.76.1 compiled successfully in 46 ms

npm run prod

asset bundle.js 770 bytes [emitted] [minimized] (name: main)
./src/index.js 715 bytes [built] [code generated]
./src/lib.js 645 bytes [built] [code generated]
webpack 5.76.1 compiled successfully in 130 ms


bundle.js ==> all my modules
vendor.js ==> all modules from "node_modules" folder 

=================

html-webpack-plugin
The HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles. This is especially useful for webpack bundles that include a hash in the filename which changes every compilation.

index.html
<script src="bundle.js"></script> ==> Browser caches the file and will not reflect
changes done in development mode

Development mode --> each change to files creates new bundles

<script src="bundle#dsfdsf2632.js"></script>
<script src="bundle%sdf115$1.js"></script>
<script src="bundle*$xcdf!232.js"></script>


// webpack development server
 "start": "webpack serve --mode production",

 css-loader and style-loader

 css-loader resolves css imports in JS
 style-loader places css contents into index.html using
 <style></style>


==============
Tracuer/Babel ==> Transpiler / pre-processor

Latest version of JS ==> lower version of JS which is compatable across browsers
ES 6  ==> ES 5

ES 6 features:
1) let and const
2) arrow functions
3) class 
4) ES 6 module system
    --> import and export instead of module.exports and require
    export class Product {

    }

    other.js
    import {Product} from './Product'

5) Promise API

https://caniuse.com/

webpack-dev-server

devServer: {
    port: 9000,
},

====

@babel/core ==> provides babel 

Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into backwards-compatible JavaScript code that can be run by older JavaScript engines. 

 "babel-loader" ==> loads .js files imported 

 import Product from './Product'

 Product.js

 like "css-loader"

"@babel/es2015"
 @babel/preset-env ==> polyfills
 A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.

 Promise API ==> ES 6 ==> Polyfill ==> make it work in ES5
 @babel/preset-env is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s).


Any version of JS ==> bundle.js will be of ES6 {sent to different browsers}

let p = {"name": "iPhone 13", "price": 98000.00, "category" : "mobile"};
let {name, price} = p;
name and price will be local variables

===
lib.js
export function forEach(elems, action) {..}
export default function filter(elems, predicate) {..}
export function map(elems, transformFn) {..}

index.js

import filter from './lib';  into memory only filter is loaded not entire 'lib.js'

import {map} from './lib'; loads entire lib.js into memory and from that destructure map

========


