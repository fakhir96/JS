const adBtn = document.querySelector("#add")
const inputVal = document.querySelector("input")
const ul = document.querySelector(".task-list") 
const filters = document.querySelectorAll(".trans")
const clrBtn = document.querySelector("#clear-btn")


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

filters.forEach(el => {
    el.addEventListener("click", ()=>{
        
        filters.forEach(btn => btn.classList.remove("act"));
        el.classList.toggle("act");
        console.log(el.innerText)

        const allTasks = ul.querySelectorAll("li");

        if(el.innerText === "Completed"){
           allTasks.forEach(li => {
            const checkIcon = li.querySelector(".check-icon");
            if (checkIcon.classList.contains("checked")) {
                li.style.display = "flex";  // show completed
            } 
            else {
                li.style.display = "none";  // hide incomplete
            }
            });
        }
        else if (el.innerText === "Active") {
            allTasks.forEach(li => {
                const checkIcon = li.querySelector(".check-icon");
                if (checkIcon.classList.contains("checked")) {
                    li.style.display = "none";  // hide completed
                } 
                else {
                    li.style.display = "flex";  // show incomplete
                }
            });
        }
        else { // All
            allTasks.forEach(li => {
                li.style.display = "flex";
            });
        }
        saveData();
    })
})

adBtn.addEventListener("click", addTask)

clrBtn.addEventListener("click", ()=>{
    const allTasks = ul.querySelectorAll("li");
    allTasks.forEach(li => {
        if (li.style.display !== "none") {
            ul.removeChild(li);
        }
    });
    saveData();
})

// Add Task When press Enter
inputVal.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});

showTasks()