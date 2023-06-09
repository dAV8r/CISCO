import './styles.css'; // trying to import css like Js --> CSS-loader resolves
import Product from './Product';
import filter, {forEach, map} from './lib';
let p = new Product("iPhone 14", 120000.00);
console.log(p.getName(), p.getPrice());


var data = [5,4, 3,11,2,12];

console.log("Hello!!!")
// forEach(data, console.log);

//predicate (e) => e % 2 === 0
//var evens = filter(data, function (e) {return e % 2 === 0;});
let evens = filter(data, e => e % 2 === 0);
var products = [
    {"name": "iPhone 13", "price": 98000.00, "category" : "mobile"},
    {"name": "Sony Braiva", "price": 145000.00, "category": "tv"},
    {"name": "Complete Ref JS", "price": 1200.00, "catgeory" : "book"},
    {"name": "Samsung Fold", "price": 158000.00, "category" : "mobile"},
    {"name": "LG OLED", "price": 168000.00, "category" : "tv"}
];

// predicate e => e.category === 'mobile'
var mobiles = filter(products, e => e.category === 'mobile');

forEach(evens, console.log);
forEach(mobiles, console.log);