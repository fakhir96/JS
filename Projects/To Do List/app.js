const adBtn = document.querySelector("#add")
const inputVal = document.querySelector("input")
const ul = document.querySelector(".task-list") 

// const saveData = () =>{
//     localStorage.setItem("data", ul.innerHTML)
// }
// const showTask = () =>{
//     ul.innerHTML = localStorage.getItem("data")
// }

const addTask = ()=>{
    if(inputVal.value === ""){
        console.log("Nothing")
    }
    else{
        let li = document.createElement("li")


        // Checkbox span
        let checkIcon = document.createElement("span");
        checkIcon.className = "check-icon"; 
        
        // Create span for task text
        let taskText = document.createElement("span");
        taskText.className = "task-text";
        taskText.textContent = inputVal.value;


        // Create span for delete icon
        let deleteBtn = document.createElement("span");
        deleteBtn.className = "delete";
        deleteBtn.innerHTML = "\u00d7"; // × symbol

        // Append both spans to li
        li.appendChild(checkIcon);
        li.appendChild(taskText);
        li.appendChild(deleteBtn);

        // Append li to ul
        ul.appendChild(li);

        taskText.addEventListener("click", () => {
            checkIcon.classList.toggle("checked");
            taskText.classList.toggle("checked");
            // saveData()
        });
        checkIcon.addEventListener("click", ()=>{
            checkIcon.classList.toggle("checked");
            taskText.classList.toggle("checked");
            // saveData()
        })


        deleteBtn.addEventListener("click", () => {
            ul.removeChild(li);
        });
    }
    inputVal.value = ""
    // saveData()
}

adBtn.addEventListener("click", addTask)

// showTask()




// const form = document.getElementById("todo-form");
// const taskInput = document.getElementById("task-input");
// const taskList = document.getElementById("task-list");

// let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// // Load tasks on page load
// window.addEventListener("DOMContentLoaded", () => {
//   tasks.forEach(task => renderTask(task));
// });

// // Handle form submit
// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const taskText = taskInput.value.trim();
//   if (taskText === "") return;

//   const task = {
//     id: Date.now(),
//     text: taskText,
//     completed: false
//   };

//   tasks.push(task);
//   saveTasks();
//   renderTask(task);
//   taskInput.value = "";
// });

// // Render a task item
// function renderTask(task) {
//   const li = document.createElement("li");
//   li.dataset.id = task.id;

//   if (task.completed) {
//     li.classList.add("checked");
//   }

//   li.innerHTML = `
//     <span class="task-text">${task.text}</span>
//     <button class="delete-btn">Delete</button>
//   `;

//   // Toggle checked state
//   li.querySelector(".task-text").addEventListener("click", () => {
//     task.completed = !task.completed;
//     li.classList.toggle("checked");
//     saveTasks();
//   });

//   // Delete task
//   li.querySelector(".delete-btn").addEventListener("click", () => {
//     tasks = tasks.filter(t => t.id !== task.id);
//     li.remove();
//     saveTasks();
//   });

//   taskList.appendChild(li);
// }

// // Save tasks to localStorage
// function saveTasks() {
//   localStorage.setItem("tasks", JSON.stringify(tasks));
// }
