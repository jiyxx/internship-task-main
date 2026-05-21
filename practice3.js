//A promise is used to handle asynchrounous operations (initial state , resolve state , rejected state)
let promise = new Promise(function(resolve, reject){
    let success = true;

    if(success){
        console.log("Promise is resolved");
    }
    else{
        console.log("Promise is rejected");
    }
});

//Three States of promise (pending, fullfilled (.then) , rejected (.catch))
//.then() handles resolve state and .catch() handle rejected state 
function fetchData(){
    let promise = new Promise(function(resolve, reject){
        setTimeout(() => {
            resolve("Data fetched successfully");
        } , 1000);
    });
    return promise;
}
fetchData()
.then((data) => {
    console.log(data); //Data fetched successfully
})
.catch((error) => {
    console.log(error); // error msg
});


// Promise Chaining (multiple chaining example )
let newPromise = new Promise(function(resolve, reject){
    setTimeout(() => resolve(1) , 1000);
}).then(function(result){
    console.log(result);//  1

    return new Promise(function(resolve, reject){
        setTimeout(() => resolve(result * 2) , 1000);
    });

}).then(function(result){
    console.log(result);// 2
    
    return new Promise((resolve, reject)=>{
        setTimeout(() => resolve(result  * 2 ) , 1000);
    });

}).then(function(result){
    console.log(result); // 4
});


//async await (async func returns a promise and await is used to wait for the promise to resolve)
let AsyncFunction = new Promise(function(resolve, reject){
    setTimeout(() => resolve("Async function resolved") , 4000);
});
async function getData(){
    let result = await AsyncFunction;
    console.log(result); 
}
getData();

//Practice que( Data Loader)
//.then and .catch
let dataLoader = new Promise(function(resolve , reject){
    setTimeout(() => console.log("Data Loaded Successfully") , 5000);
})
dataLoader.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
})

//async await method 
let dataLoader2 = new Promise(function(resolve , reject){
    setTimeout(() => console.log("Data Loaded Successfully") , 6000);
})
async function getDataLoader(){
    let result = await dataLoader;
    console.log(result);
}
getDataLoader();

//Error handling in promises
new Promise((resolve, reject) =>{

    throw new Error("something went wrong");

}).catch(function(error){
    console.log("The error is handled , continues normally");

}).then(() => console.log("Next successful handler runs"));

//6 Static methods of Promise Class
// 1. Promise Resolve

let promise1 = Promise.resolve("Resolved value");
promise1.then((value) => {
    setTimeout(() => console.log(value) , 7000)
})

// 2. Promise Reject 
let promise2 = Promise.reject("Rejected value");
promise2.catch((error) => {
    setTimeout(() => console.log(error) , 8000)
})

// 3. Promise.all 
let p1 = Promise.resolve(1);
let p2 = Promise.resolve(2);
let p3 = Promise.resolve(3);
Promise.all([p1 , p2 , p3]).then((values) =>{
    setTimeout(() => console.log(values) , 9000)
})

// 4. Promise.allSettled
let p1 = Promise.resolve("Success");
let p2 = Promise.reject("Failed");

Promise.allSettled([p1, p2])
    .then((result) => {
        console.log(result); // [{status: "fulfilled", value: "Success"}, {status: "rejected", reason: "Failed"}]
    });

// 5. Promise.race
let p1 = new Promise((resolve) =>
    setTimeout(() => resolve("Fast"), 1000)
);

let p2 = new Promise((resolve) =>
    setTimeout(() => resolve("Slow"), 3000)
);

Promise.race([p1, p2])
    .then((result) => {
        console.log(result); // "Fast" because p1 resolves faster than p2
    });

    let p1 = new Promise((_, reject) =>
    setTimeout(() => reject("Error"), 1000)
);
// If p1 rejects before p2 resolves,
let p2 = new Promise((resolve) =>
    setTimeout(() => resolve("Success"), 3000)
);

Promise.race([p1, p2])
    .catch((error) => {
        console.log(error); // "Error" because p1 rejects before p2 resolves
    });

// 6 Promise.any
let p1 = Promise.reject("Error 1");

let p2 = new Promise((resolve) =>
    setTimeout(() => resolve("Success"), 2000)
);

let p3 = Promise.reject("Error 3");

Promise.any([p1, p2, p3])
    .then((result) => {
        console.log(result);
});


let fetchUsers = () => get("https://jsonplaceholder.typicode.com/users");
fetchUsers();
if(fetchUsers){
    console.log("Users fetched successfully");
}
else{
    console.log("Failed to fetch users ");
}
for(let i=0 ; i< 5 ; i++){
    console.log(i);
}
