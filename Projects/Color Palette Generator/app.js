const btn = document.querySelector("#create");

const cardArr = document.querySelectorAll(".card .top");
const colorCode = document.querySelectorAll("#color-code");

const iconArr = document.querySelectorAll("i");

const chars = "0123456789abcdef";

function randomColor(){
    for(let a = 0; a<5; a++){
        
        let color = "";
        // This will generate a single color code
        for(let i = 0; i<6; i++){
            const randomChar = chars[Math.floor(Math.random() * chars.length)];
            color += randomChar;
        }
        cardArr[a].style.backgroundColor = `#${color}`;
        colorCode[a].innerText = `#${color}`;
    }
    iconArr.forEach(icon=>{
        icon.className = "fa-solid fa-copy";
    })
}

iconArr.forEach(icon =>{
    icon.addEventListener("click", ()=>{
        console.log(icon.parentNode)
        const temp = icon.parentNode;
        console.log(temp.childNodes[1].innerText)

        const val = temp.childNodes[1].innerText;
        
        navigator.clipboard
        .writeText(val)
        .then(() => {
            icon.className = "fa-solid fa-check";
        })
        .catch((error) => console.log("Could not copy:", error));
    })
})
btn.addEventListener("click", randomColor);
document.addEventListener("DOMContentLoaded", randomColor);