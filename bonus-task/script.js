//Getting elements from id 
const taskinput = document.getElementById('taskInput'); 
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const totalTasks = document.getElementById('totalTasks');
const completedTasks = document.getElementById('completedTasks');
const filterButtons = document.querySelectorAll('.filter-btn');

let tasks = JSON.parse(localStorage.getItem("tasks")) || []; //

let currentFilter = "all";

//adding task to the list
function addTask() {
    const taskText = taskInput.value.trim(); //trim removes extra space 

    if(taskText == "") return; 

    const newtask = {
        id : Date.now(), 
        text : taskText,
        completed : false
    }

    tasks.push(newtask); //adds new item into array
    saveTasks();
    renderTasks();
    taskInput.value = ""; //clears the input fields after adding a task
}

//Rendering tasks on the screen  
function renderTasks() {

  taskList.innerHTML = ""; //clears old list before rendering again 

  let filteredTasks = tasks;

  if(currentFilter === "active"){
    filteredTasks = tasks.filter(task => !task.completed); 
  }

  if(currentFilter === "completed"){
    filteredTasks = tasks.filter(task => task.completed); 
  }

  filteredTasks.forEach(task => {  
  
    const li = document.createElement("li"); 

    if(task.completed){
      li.classList.add("completed"); 
    }

    li.innerHTML = ` 
      <div class="task-left">
        <input type="checkbox" ${task.completed ? "checked" : ""}>
        <span>${task.text}</span>
      </div>

      <button class="delete-btn">Delete</button>
    `;

    // checkbox
    const checkbox = li.querySelector("input");  //selects the checkbox input element 
    checkbox.addEventListener("change", () => {
      toggleTask(task.id);
    });

    // delete button
    const deleteBtn = li.querySelector(".delete-btn");

    deleteBtn.addEventListener("click", () => {
      deleteTask(task.id);
    });

    taskList.appendChild(li); 
  });

  updateCounts();
}

//toggle completed tasks
function toggleTask(id){

  tasks = tasks.map(task => { 

    if(task.id === id){
      return {
        ...task, //spread operator to copy all the properties of the original task obj 
        completed: !task.completed 
      };
    } 
    return task;
  });
  saveTasks();
  renderTasks();
}

//delete a task
function deleteTask(id){
    tasks = tasks.filter(task => task.id != id);
    saveTasks();
    renderTasks();
}

//save task to local storage
function saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

//update task counts
function updateCounts(){
  totalTasks.textContent = tasks.length; 
  const completed = tasks.filter(task => task.completed).length;
  completedTasks.textContent = completed;
}

//event listeners
addBtn.addEventListener("click", addTask);

//enter key press
taskInput.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        addTask();
    }
});

//Filter Buttons
filterButtons.forEach(button => {

  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;
    renderTasks();
  });
}); 

//Rendering tasks 
renderTasks();


