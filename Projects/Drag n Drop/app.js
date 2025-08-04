const lists = document.querySelectorAll(".list");

const input1 = document.querySelector("#todo");
const input2 = document.querySelector("#process");
const input3 = document.querySelector("#done");

let idCounter = 0;

function addTask(input, listIndex){

    // If input is empty so add nothing
    const text = input.value.trim();
    if (!text) return;

    // Creating the element and it's id
    let div = document.createElement("div");
    const cardId = `card-${idCounter++}`;

    // Setting All Attributes
    div.classList.add("card");
    div.setAttribute("id", cardId);
    div.setAttribute("draggable", "true");

    // Create the text node
    let taskText = document.createTextNode(text);

    // Create the delete icon
    let deleteIcon = document.createElement("i");
    deleteIcon.className = "fa-solid fa-square-minus";

    // Remove card by clicking on icon
    deleteIcon.addEventListener("click", () => {
        div.remove();
    });

    // Build the card
    div.appendChild(taskText);
    div.appendChild(deleteIcon);

    // Drag and Drop Event Listeners
    div.addEventListener("dragstart", dragStart);
    div.addEventListener("dragend", dragEnd);

    // Adding the card in appropriate list like (1 for process list)
    lists[listIndex].appendChild(div);
    
    // Clearing The Input
    input.value = "";
    input.blur();
}

// Add
lists.forEach(list => {
    list.addEventListener("dragover", dragOver);
    list.addEventListener("dragenter", dragEnter);
    list.addEventListener("dragleave", dragLeave);
    list.addEventListener("drop", dragDrop);
});

function dragStart(e) {
    e.dataTransfer.setData("text/plain", this.id)
}

function dragEnd() {
    console.log("Drag ENDED");
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.classList.add("over");
}

function dragLeave(e) {
    this.classList.remove("over");
}

function dragDrop(e) {
    const id = e.dataTransfer.getData("text/plain");
    const card = document.getElementById(id);

    this.appendChild(card);
    this.classList.remove("over");
}

// Add Enter key event listener 
document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        if (input1.value.trim()) addTask(input1, 0);
        else if (input2.value.trim()) addTask(input2, 1);
        else if (input3.value.trim()) addTask(input3, 2);
    }
});