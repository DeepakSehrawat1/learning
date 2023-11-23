console.log("hello world");
/* how javascript works:-
Everthing in javascript happens inside execution context
more in notebook mostly theory;

*/
/* understanding scoping */

var x = 10;
{
  var x = 100;
  console.log(x);
}
console.log(x);

//var have function scope not block scope so output will be 100 100

// while let const will have block scope output will be 100 10;
//closers means bundle of function and its lexical scope
/*let a=4;
function x(){
    let v = 5;
    function y(){
        console.log(v);             // this will print 5 this is closers.. we have lexical scope with function scope
    }
    y();
}
x();*/

//real use of closers is when we return function

let a = 4;
function c() {
  let v = 5;
  return function y() {
    console.log(v);
  };
}
var z = c();
z(); //this will print 5 because when we return y .. this function comes with his lexical scope i.e. is closer.. means function retain its all scopes
// so we can use later
