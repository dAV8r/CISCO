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
