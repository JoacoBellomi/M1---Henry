
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {

  var x = 10;
  console.log(x); //10
  console.log(a); //8

  var f = function(a, b, c) {

    b = a;
    console.log(b); //8
    b = c; 
    var x = 5;
  }

  f(a,b,c);
  console.log(b); //9
}

c(8,9,10);
console.log(b); // 10
console.log(x); // 1


console.log(bar); // undefined
//console.log(baz); // no fue declarada
foo(); // 'Hola!'
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;

var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); //Tony
var instructor = "Tony";
console.log(instructor); //'Tony'
 //NO ENTIENDO ESTO ------------------------
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); //'Franco' pero realmente no se ejecuta
   }
}
)();

console.log([] == ![])
//---------------------------
console.log(instructor); //'Tony' Si no se ejecuta

var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); //'The Flash'
    console.log(pm); // 'Reverse Flash'
}
console.log(instructor); //'The Flash'
console.log(pm); // 'Franco'

function test() {
    console.log(a); //undefined
    console.log(foo()); //2
 
    var a = 1;
    function foo() {
       return 2;
    }
 }
 //Si
 test();


 
var snack = 'Meow Mix';
function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);