// 1. Callback Function (A callback is a func that is called as an argument to another function )
function greet(name){
    console.log("Hello "+ name );
}
function processorUnit(callback){
    const name = "Ria";
    callback(name);
}
processorUnit(greet); //Hello Ria 

//A Closure is a function remembers variables from its outer function even after the outer function has finished execution.
function outer(){
    let count = 0;

    function inner(){
        return count++;
        console.log(count);
    }
    return inner;
}

let counter = outer();
alert(counter());
alert(counter());
alert(counter());// 1 2 3 

//Closure function using counter example
function makeCounter(){
    let count = 0;

    return function(){
        count++;
        return count;
    }
}
let counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter()); // 1 2 3 

//Counter functions using closure functions 
function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());

// Lexical Scope (A function that is defined inside another function can access the variables of the outer function)
// An inner function remembers the outer function 
function outer(){
    let name = "Jatin";

    function inner(){
        console.log(name);
    }
    inner();
}//Jatin 


//Memory management and Garbage collection in JS 
function f() {
  let value = 123;

  return function() {
    alert(value);   
  }
}

let g = f(); // o/p - 123[]

//Practice que( Write a counter function using closure)
function createCounter(){
    let count = 0;

    return function(){
        count++;
        return count;
    }
}
const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter()); //1 2 3 

