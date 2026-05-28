// Fetching data from an API and displaying it in the console 
//fetch() request -> response received -> response.json() -> JS object/array created -> loop through data -> print names
async function get(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users" );
        const data = await response.json();
        data.forEach((user) => {
            console.log(`Name: ${user.name}`);
        });
    }
    catch(error){
        console.log("Error",error);
    }
}
getUsers();

//fetch - response - response.json() - data 
// 1. Get
async function getUsers(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users" );
        if(!response.ok){
            throw new Error(`HTTP ERROR! status: ${response.status}`);
        }
        const users = await response.json();
        users.forEach((user) =>{
            console.log(`UserName: ${user.username}`);
            console.log(`Email: ${user.email}`);
            console.log(`Phone: ${user.phone}`);
        });

    }
    catch(error){
        console.log("Error" , error);
    }
}
getUsers();

// 2. Post 
async function createPost(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/post" ,
            method = "POST" , 
            "Content-Type = application/json",
            body = JSON.stringify({
                id : 11,
                name:"John Doe",
                username:"johnny",
                email:"johny@exo.com",
                phone:"123-234-1233"
            })
        )
        if(!response.ok){
            throw new Error(`HTTP ERROR! STATUS: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.log("Error" , error);
    }
}
createPost();

// 3. Put
async function createPut(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users"
            , method = "PUT" , 
            "Content-Type = application/json",
            body = JSON.stringify({
                id : 1,
                name:"Jatin Shukla",
                username:"jatzz",
                email:"jatzz@mail.com",
                phone:"123-455-3452"
            })
        )
        if(!response.ok){
            throw new Error(`HTTP ERROR! STATUS: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.log("Error" , error);
    }
}
createPut();

// 4 . Delete
async function deleteUser(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1" , method = "DELETE");
        if(!response.ok){
            throw new Error(`HTTP ERROR! STATUS: ${response.status}`);
        }
        console.log("User Deleted Successfully");
    }
    catch(error){
        console.log("Error" , error);
    }                               
}
deleteUser();
