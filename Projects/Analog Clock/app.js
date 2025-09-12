const hours = document.querySelector(".number-hours");

const numberElement = [];

for(let i = 1; i<=12; i++){
    numberElement.push(
        `<span style="--index:${i}"><p>${i}</p></span>`
    );
    console.log(numberElement);
}
hours.insertAdjacentHTML("afterbegin", numberElement.join(""))
console.log(numberElement)