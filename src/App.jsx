import {useState} from "react";
import UserCard from "./components/UserCard";

function App(){

  // const [count, setCount] = useState(0); 
  // const[text , setText] = useState(""); 

  // function Increment(){
  //   setCount(count + 1); 
  // }

  // function Decrement(){
  //   setCount(count < 1 ? 0 : count - 1); // 
  // }

  return (
    <div> 
      {/* <div >
        <h1> User Directory</h1>
        <UserCard 
          name=" John Doe"
          email = "john@gmail.com"
          city = "New York"
        />
      
        <UserCard 
           name = "Leanne Graham"
           email = "leanne@gmail.com"
           city = "Los Angeles"  
         />

        <UserCard 
           name = "Harshel John"
           email = "harshel@gmail.com"
           city = "Chicago"
         /> 

        <UserCard 
           name = "Koel Jimmy"
           email = "Koel@gmail.com"
           city = "Hoston"
         /> 

        <UserCard 
           name =" John Logan"
           email = "logan@gmail.com"
           city = "Brazil"
        />
      </div>

      <div className = "counter-box">
        <h1> Counter</h1>
        <button onClick= {Increment} > Increment</button>
        <button onClick = {Decrement}> Decrement </button>
        <p> Count: {count}</p>
      </div>

      <div className = "input">
        <input 
          type="text"
          placeholder = "Type anything"
          value= {text}
          onChange = {(event) => setText(event.target.value)}
        />
        <div className = "display">
          <p>  Text: {text}</p>
        </div>
      </div>       */}
    </div>
  );
}


export default App;

