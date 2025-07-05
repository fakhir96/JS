const adBtn = document.querySelector("#add")
const inputVal = document.querySelector("input")
const ul = document.querySelector(".task-list") 

// Save data to localStorage
const saveData = () => {
    localStorage.setItem("tasks", ul.innerHTML);
};

// Load saved tasks on page load
const showTasks = () => {
    ul.innerHTML = localStorage.getItem("tasks") || "";
    rebindEvents();
};

// Add event listeners to each task after loading from storage
const rebindEvents = () => {
    const allTasks = ul.querySelectorAll("li");

    allTasks.forEach(li => {
        const taskText = li.querySelector(".task-text");
        const checkIcon = li.querySelector(".check-icon");
        const deleteBtn = li.querySelector(".delete");

        taskText.addEventListener("click", () => {
            checkIcon.classList.toggle("checked");
            taskText.classList.toggle("checked");
            saveData();
        });

        checkIcon.addEventListener("click", () => {
            checkIcon.classList.toggle("checked");
            taskText.classList.toggle("checked");
            saveData();
        });

        deleteBtn.addEventListener("click", () => {
            ul.removeChild(li);
            saveData();
        });
    });
};

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
            saveData()
        });
        checkIcon.addEventListener("click", ()=>{
            checkIcon.classList.toggle("checked");
            taskText.classList.toggle("checked");
            saveData()
        })
        
        
        deleteBtn.addEventListener("click", () => {
            ul.removeChild(li);
            saveData()
        });
        saveData()
    }
    inputVal.value = ""
    
}

adBtn.addEventListener("click", addTask)

showTasks()