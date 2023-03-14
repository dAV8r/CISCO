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

=======================

ReactJS
--> JavaScript library for building Web client side applications ==> UI

Server Side Rendering
Client Side Rendering

For CSR 
1) DOM ==> object representation of your view ==> create element, navigate, delete elements
document.querySelector(".tmpl-headerNavItem_home").innerHTML = "Banuprakash"
2) jQuery library simplfied way to perform DOM operations
$(".tmpl-headerNavItem_home").html("Banu")

Web 2.0
* SPA ==> Single Page Application
one index.html but many views based on URL
http://amazon.com
should display home contents
http://amazon.com/mobiles
should display mobiles
http://amazon.com/tv
should display tv
http://amazon.com/mobiles/iPhone
should display only iPhone mobils

* Application size started to increase

3) Templates
3.1) Handlebar
3.2) Mustache 
todos.html
{{#todo}}
<h2>{{title}}</h2>
<small>Created on {{createdOn}}</small>
<p>{{text}}</p>
{{/todo}}

{{}} -=> interpolation 

then embed todos.html inside index.html

3.3) Knockout
3.4) Underscore templates

MVC Architectural pattern:
M --> Model
V --> View
C --> Controller

Framework and Libraries:
4) Backbone was a UI library --> provided Model and Controller; for views used any 
templates [ handlebars / Mustache]

5) ReactJS --> View Library
ReactJS is by Facebook
xhp ==> XML and PHP
Facebook search component ==> reactJS was used
JSconf 

Open Source --> Khan Acedamy {Sophie} --> Netflix

React.js: The Documentary
https://www.youtube.com/watch?v=8pDqJVdNa44

6) AngularJS --> Complete Framework --> total solution
7) Google --> Angular

====

ReactJS

codepen.io
HTML
<div id="root"></div>

Settings:
Behaviour => turn off save and preview
JS ==>
Preprocessor: Babel { Babel includes JSX processing. }
CDNS
Search react:
https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js
search react-dom:
https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js

createElement() is the root api of react

let Welcome = React.createElement("h1", {style:{'color':'red'}}, 
    "Welcome to React!!!");

https://github.com/chentsulin/awesome-react-renderer

let Welcome = React.createElement("h1", {style:{'color':'red'}}, "Welcome to React!!!");

console.log(Welcome)
// reconcillation -> VDOM to DOM
ReactDOM.render(Welcome, document.getElementById("root"));

Problem with createElement()

<div>
    <h1> Cisco </h1>
    <h2> React Training !!!</h2>
</div>


let Welcome = React.createElement("div", null, [React.createElement("h1", null, "Cisco"), React.createElement("h2", null, "React Training")]);

1) functional components
2) class components
to simplify how we create React Element


```
function Welcome() {
  return <div>
          <h1>Cisco</h1>
          <h2>React Training </h2>
    </div>
}
// <Welcome /> Babel invokes the Welcome()
// function returns JSX, returned JSX babel -- uses React.createElement()
ReactDOM.render(<Welcome />, document.getElementById("root"));
```

Functional component with props:
```
function Welcome(props) {
  return <div>
          <h1>{props.company}</h1>
          <h2>{props.trg}</h2>
    </div>
}
// <Welcome /> Babel invokes the Welcome()
// function returns JSX, returned JSX babel -- uses React.createElement()
ReactDOM.render(<Welcome company="CISCO" trg="React Training"/>, document.getElementById("root"));
```

Alternatively destructure:
```
function Welcome({company, trg}) {
  return <div>
          <h1>{company}</h1>
          <h2>{trg}</h2>
    </div>
}
ReactDOM.render(<Welcome company="CISCO" trg="React Training"/>, document.getElementById("root"));
```

Class Component:
class component can have state and behaviour

Banking Account:
balance is state
credit() and debit() are behaviours / actions / message

```
// every class component should inherit from Component
class ProductComponent extends React.Component {
  state = {
    product: {"name": "iPhone 13", "price": 98000.00, "category" : "mobile"}
  }
  // what we returns from functional component should go in render()
  render() {
    return <div>
        Name : {this.state.product.name} <br />
        Price : {this.state.product.price} <br />
     </div>
  }
}

ReactDOM.render(<ProductComponent />, document.getElementById("root"));
```



create-react-app:
--> creates scaffolding code with all configs ready 

npx create-react-app customerapp
--> configures "babel", "html-webpack-plugin", "css-loader", "style-loader", "web-pack-dev-server"
--> install react, react-dom, "jest"

Without create-react-app:
1) npm init --y
2) npm i webpack webpack-cli html-webpack-plugin, @babel/core @babel-loader @babel/present-env
webpack-dev-server -D
3) npm i react react-dom
4) write webpack.config.js
5) babel.config.js
6) creact default index.html
....

react-scripts is a wrapper for webpack

index.js ==> App.js ==> CustomerList.jsx ==> 6 CustomerRow.jsx

adding props and behaviour

-------

Recap:
React.createElement() lowlevel API to create VDOM -- like JSON object

Reconcillation ==> VDOM to DOM / UI using different renders
* react-dom for web pages
* react-tv for TV
* react-native for Mobile
* react-proton for desktop

ReactDOM from react-dom --> React version = 17 ==> Stack

ReactDOM from 'react-dom/client' --> React 18+ ==> Fiber is concurrent rendering

functional component ==> returns JSX
* <div> </div> XML tags
* {} is JavaScript
* Babel converts returned JSX into ReactElement

class components 
* render() returns JSX
* can have state / instance variables
* can have behaviour / instance methods 

In react state & props are special keywords
props ==> data passed from parent to child
state ==> internal data of component

state & props are immutable

npx create-react-app nameofapp
* scaffolding code internally using webpack, webpackdevserver, HtmlWebpackplugin, css-loader, style-loader, @babel/core, @babel-loader, @babel-presetenv [ for pollyfills ]
* install react, react-dom, testing libraries

npm run eject

================
<ul>
    <li key="1">One</li>
    <li key="2">Two</li>
</ul>

 TO

 <ul>
    <li key="3">Three</li>
    <li key="1">1</li>
    <li key="2">Two</li>
</ul>

https://www.geeksforgeeks.org/what-is-diffing-algorithm/

VDOM and VDOM-Copy

diffs[] // won't contain <li>Two</li>

diffs.forEach(node => {
    var newNode = document.createElement("li", ...);
    if(oldNode) {
        document.replaceNode(newNode);
    } else {
        document.prepand(newNode);
        or
        doucment.append(newNode);
        or
        document.append(newnode, position);
    }
});


========

Passing Callbacks as props

export default class Parent extends Component{
    render() {
        <Child cb={(data) => this.doTask(data)} />
    }

    doTask(data) {
        console.log("Called!!")
    }
}
function Child({cb}) {
    return <div>
             <button onClick={() => cb("hello")}>
    </div>
}

class Child extends Component {
    render() {
       return <div>
                <button onClick={() => this.props.cb("hello")}>
       </div>
    }
}

======================

Component Life Cycle methods:
1) Mounting phase is when first time component is rendered
constructor() => render() ==> componentDidMount()

do initialization in constructor
render() ==> component will display with initialized data
componentDidMount() ==> make API calls to server to pull the data
setState with the data fetched from API calls

Once setState is called it goes to updating phase

2) Update Phase
this is triggred whenever state or props change

shouldComponentUpdate() ==> false
shouldComponentUpdate() ==> true ==> render() ==> componentDidUpdate()
componentDidUpdate() ==> to make API calls

componentDidMount() ==> fetch main data
    Example: Get Orders
    Get Artist
componentDidUpdate() ==> fetch dependent data
    Get Delivery address for each order
    Get Albums for each artist

3) Destroyed
componentWillUnmount()
place where data can flushed to Server before destroying

==========

Making API calls in constructor() vs componentDidMount()

Making api calls in constructor() will lead to FCP issues
FirstContentfulPaint

shouldComponentUpdate() ==> called whenever state or props change before render()
use this method to avoid unnesscary re-render of child

```
class Child extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    if(this.props.name === nextProps.name) {
      return false;
    }
    return true;
  }
  render() {
    console.log("Child renders!!!");
    return <div>
        Name in Child: {this.props.name}
     </div>
  }
}

class Parent extends React.Component {
  state = {
    name: "George",
    age: 25
  }
  
  incrementAge() {
    this.setState({
      age: this.state.age + 1
    })
  }
  
  render() {
    console.log("Parent renders");
    return <div>
        Name : {this.state.name} <br />
        Age : {this.state.age} <br />
        <Child name={this.state.name} /> <br />
      <button onClick={() => this.incrementAge()}>Age Change </button>
     </div>
  }
}

ReactDOM.render(<Parent />, document.getElementById("root"));
```

Avoid re-render of functional child component

```
function Child (props) {
    console.log("Child renders!!!");
    return <div>
        Name in Child: {props.name}
     </div>
}

let MemoChild = React.memo(Child);

class Parent extends React.Component {
  state = {
    name: "George",
    age: 25
  }
  
  incrementAge() {
    this.setState({
      age: this.state.age + 1
    })
  }
  
  render() {
    console.log("Parent renders");
    return <div>
        Name : {this.state.name} <br />
        Age : {this.state.age} <br />
        <MemoChild name={this.state.name} /> <br />
      <button onClick={() => this.incrementAge()}>Age Change </button>
     </div>
  }
}

ReactDOM.render(<Parent />, document.getElementById("root"));

```

React.memo(Child) is a HOC
memo() checks currentProps with newProps and conditionally exectue Child component
if(currentProps == newProps) {
    return;
} else {
    return Child(newProps);
}

====

React Context ==> React 16.6 version onwards
Context ==> acts like a central placeholder for data, using this we can avoid props drill

```

let PersonContext = React.createContext(); // central placeholder for data

class Parent extends React.Component {
    state = {
        name:"banuprakash"
    }
    render() {
        return <PersonContext.Provider value={this.state}>
                <A/>
            </PersonContext.Provider>
    }
}

function A() {
    return <div>
        I am A comp <br />
        <B/>
    </div>
}

function B() {
    return <div>
        I am B <br />
        <C/>
    </div>
}

class C extends React.Component {
    render() {
    return <div>
              I am C <br />
            <PersonContext.Consumer>
                {
                    value => <h1> {value.name}</h1>
                }
            </PersonContext.Consumer>
    </div>
    }
}
ReactDOM.render(<Parent/>, document.getElementById("root"));

```

IF C COMPONENT IS functional Component we can use hooks useContext();

```
function C() {
  let {name} = React.useContext(PersonContext);
    return <div>
        I am C <br />
       <h1>Name is {name} </h1>
      </div>
}

```

React Hooks:
Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.
Simple Goal: Avoid writing Class components

extends Component ==> lots of things are inherited

Class component provides state and behaviour

Hooks:
1) useState() is a hook to have state variables in functional component

```
function App() {
  let [name, setName] = React.useState("Danny");
  let [age, setAge]= React.useState(25);
  
 return <div>
   Name: {name} <br />
   Age : {age} <br />
   <button onClick={() => setAge(age + 1)}>Age Change</button>
   </div>
}
ReactDOM.render(<App />, document.getElementById("root"));

```

class MyComp extends Component {
    state = {
        x : 10,
        y : 15
    }

    setX(no) {
        this.setState({
            x: no
        })
    }

    setY(no) {
        this.setState({
            y:no
        })
    }
}

Using useState()

function MyComp() {
    let [x, setX] = React.useState(10);
    let [y, setY] = React.useState(15);
}
 @fortawesome/free-solid-svg-icons,@fortawesome/react-fontawesome,


========
Event Handling and pass callback as props
1) ReactContext
2) useState
3) useContext()
4) React.memo() and shouldComponentUpdate() to avoid re-render of child components
5) useReducer()
6) useCallback()
7) useEffect()

useEffect() is a hook to simulate life cycle methods of react

function App() {
    let [age, setAge] = useState(20);
    let [name, setName] = useState("Tim");

    useEffect(() => {
        console.log("similar to componentDidMount(), called only once when componet is loaded");
    },[]);

    useEffect(() => {
       console.log("similar to componentDidUpdate(), called whenever any state or props change"); 
    })

    useEffect(() => {
        console.log("called whenever age changes, but not name");
    }, [age])
}

=============

$ npx create-react-app mobileapp
within mobileapp folder>
$ npm i react-router-dom bootstrap react-bootstrap 
$ npm i @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome

react-router-dom
is for client side routing
Different URLs different components has to be rendered
http://localhost:3000/
should display HomeComponent
http://localhost:3000/products
should display <ProductList />
http://localhost:3000/cart
should display <Cart />

http://localhost:3000/details/4
should display <Details/> component with product 4 info

http://localhost:3000/new_product
should display <ProductForm /> for adding new product

http://localhost:3000/dsfsdf
wrong URL should be display <Default />


bundle.js ==> containing all the components ==> FCP ==> Core Web vitals ==> First Contentful Paint
until bundle.js is not loaded from server nothing comes on screen.

Solutions:
divide components into different chunks and lazy load them only if required.

bundle.js will be without details / cart / customer components

