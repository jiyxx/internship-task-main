//function declaration
const multiply = ( a, b ) => {
    return a * b;
}
alert(multiply(5,10));

//default parameters
let name = "Jiya";
console.log(`Hello, ${name}`);

//default parameters
function greet(name= " Jiya") {
    console.log(`Hello, ${name}`);
}
greet();

//default parameters
function add(a  = 10 , b = 20){
    console.log(a + b);
}
add();

//function expression 
const card = (name = "Unknown" , age = 0) =>{
    return `Name: ${name} , Age: ${age}`;
};
console.log(card("Jiya", 21));
console.log(card());

//function expression (arrow function)
let sayHii = () => alert("Hello");
sayHii();

//object
let user = { name:" jatin" , age: 20};
alert(user.name);
alert(user.age);

//object with space in key
let user; 
user["Likes bird"] = true;
alert(user["Likes bird"]);

//object reference
let user = { Name : " jiya"};
let admin = user;
alert(admin.name);

//using key in our object
let user = {
    name: "Jatin",
    age: 20,
    "likes birds": true
};
let key = prompt("What do you like?","likes birds"); //prompt is used to take input from user from a box 
alert(user[key]);

//computed properties
let fruit = prompt("Which fruit to buy?", apple);
let bag = {
    [fruit]: 5,
};
alert(bag.apple);//5

//function that returns an object
function makeUser(name,age){
    return{
        name: name,
        age: age
    };
}
let makeUser = makeUser("Jatin", 20);
alert(makeUser.name);

//checks if key exists in object(using in operator)
let user = { name:"Ria"};
let key = "name";
alert(key in user);//in operator 

//for..in loop
let user = {
    name : "Ram",
    age : 30,
    isaddress : Jaipur
};
for(let key in user){
    alert(key);
    alert(use[key]);
}

//object.assign
let user ={
    name:"Ria"
};
let permission = {canView : true};
let permission1 = { canEdit : true};
Object.assign(user , permission , permission1);
alert(user.name);//ria
alert(user.canView); //true
alert(user.canEdit);//true

//object reference
function siblings(man, woman){
    woman.brother = man;
    man.sister = woman;
    return {
        brother : man,
        sister : woman
    };
}
let family = siblings ({"name" : "Ria"},
    {name : "Rohan"}
)

//object method 
let user = {
    name : "Neeta",
    age : 40
}
user.sayHii = () => alert("Hello, " + user.name);
user.sayHii()

//this keyword
let student = { name : "Jiya"};
let teacher = {name : "Ranika"};
function sayHii(){
    alert(this.name);
}
student.f = sayHii;
teacher.f = sayHii;

student.f();//jiya
teacher.f(); //ranika

//constructor function
function smallUser() {
    this.name = "Jiya";
    return ;
};
alert( new smallUser().name);//jiya
console.log(new smallUser().name); // jiya

//returns overrides this keyword
function bigUser(){
    this.name = "Ravi";
    return {name : "Riya"};
}
alert(new bigUser().name); //riya

//symbol are unique identifiers
let id1 = Symbol("id");
let id2 = Symbol("id");
alert(id1 == id2); //error because they are unique

//global symbol (it is not uniquely defined every time it is called)
let id1 = Symbol.for("id");
let id2 = Symbol.for("id");
alert(id1 == id2); // true because they are same symbol from global registry
let localsymbol = Symbol("name");
let globalsymbol = Symbol.for("name");

alert(Symbol.keyFor(globalsymbol)); // name
alert(Symbol.keyFor(localsymbol)); // error because it is not a global symbol 

alert(localsymbol.description); //name (desription is used to get the name of symbol )

//toString and valueOf
let user = {
    name: " Jatin",
    money: 1000,
    
    toString(){
        return `{name: "${this.name}"}`;
    },

    valueOf() {
        return `this.money`;
    }
}
alert(user);
alert(+user);
alert(user + 500);

//
alert(String.fromCodePoint(A)); //A it works unicode char ( ASCII CODES )


//Array methods 
let numbers = [1, 2, 3, 4, 5];

// map() 
let doubled = numbers.map(num => num * 2);
console.log("map():", doubled);//[2,4,6,8,10]

// filter() 
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("filter():", evenNumbers);//[2,4]

// reduce() 
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("reduce():", sum);//15

// find() 
let found = numbers.find(num => num > 3);
console.log("find():", found);//4

// forEach() 
console.log("forEach():");

numbers.forEach((num, index) => {
    console.log(`Index ${index}: ${num}`);
});
//index 0 : 1
//index 1 : 2
//index 2 : 3
//index 3 : 4
//index 4 : 5


//Destructuring assignment  means unpacking values from array into distinct variables 
let user = {
    name : "Hem",
    Hobies :["Reading", "Cooking", "Travelling"],
    Age : 20
}
let { name , Hobies , Age} = user;
console.log(name);
console.log(Hobies);
console.log(Age);

//The spread operator is used to:
//copy arrays/objects
//merge arrays/objects
//expand elements

//copy arrays
let arr1 = [1, 2, 3];
let arr2 = [...arr1];
console.log(arr2);//[1, 2, 3]

//merge arrays
let a = [1, 2];
let b = [3, 4];
let result = [...a, ...b];
console.log(result);//[1,2,3,4]

//expand elements
function numbers(x,y,z){
    return x+y+z;
}
let numbers = [1,2,3];
console.log(numbers(...numbers)); //6

//export commands
export const name = " Jiya";
export function add(a , b){
    return a + b;
}
export function multiply(a,b){
    return a * b;
}
