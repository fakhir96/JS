// const cards = document.querySelectorAll(".card");
const lists = document.querySelectorAll(".list");

const input1 = document.querySelector("#todo");

let idCounter = 0;

function addTask(){

    let div = document.createElement("div");
    const cardId = `card-${idCounter++}`;

    div.classList.add("card");
    div.setAttribute("id", cardId);
    div.setAttribute("draggable", "true");

    // Create the text node
    let taskText = document.createTextNode(input1.value.trim());

    // Create the delete icon
    let deleteIcon = document.createElement("i");
    deleteIcon.className = "fa-solid fa-square-minus";

    deleteIcon.addEventListener("click", () => {
        div.remove();
    });

    // Build the card
    div.appendChild(taskText);
    div.appendChild(deleteIcon);

    div.addEventListener("dragstart", dragStart);
    div.addEventListener("dragend", dragEnd);

    lists[0].appendChild(div);
    
    input1.value = "";
}


// cards.forEach(card => {
//     card.addEventListener("dragstart", dragStart);
//     card.addEventListener("dragend", dragEnd);
// });

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
      if (input1.value != "") {
        addTask();
      }
    }
});