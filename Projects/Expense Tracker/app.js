let balance = document.getElementById("balance");
let income = document.getElementById("income-amount");
let expense = document.getElementById("expense-amount");

let desc = document.getElementById("desc");
let amount = document.getElementById("amount");

const btn = document.querySelector(".btn button");
const cards = document.querySelector(".cards");

let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

// Save transaction
function addTransaction(desc, amount, type) {
    let transaction = { desc, amount: Number(amount), type };
    transactions.push(transaction);

    localStorage.setItem("transactions", JSON.stringify(transactions));
    renderTransaction(transaction);
    updateBalance();
}

// Render one card
function renderTransaction(t) {
    let div = document.createElement("div");
    div.classList.add("card");
    div.classList.add(t.type === "income" ? "green" : "red");

    let p1 = document.createElement("p");
    let p2 = document.createElement("p");

    p1.innerText = t.desc;
    p2.innerText = t.type === "income" ? `$${t.amount}` : `-$${t.amount}`;

    div.appendChild(p1);
    div.appendChild(p2);

    cards.appendChild(div);
}

// Update balance, income, expense
function updateBalance() {
    let incomeTotal = 0;
    let expenseTotal = 0;

    transactions.forEach(t => {
        if (t.type === "income") incomeTotal += t.amount;
        else expenseTotal += t.amount;
    });

    let totalBalance = incomeTotal - expenseTotal;

    income.innerText = `$${incomeTotal}`;
    expense.innerText = `$${expenseTotal}`;
    balance.innerText = `$${totalBalance.toFixed(2)}`;
}

// Restore all on page load
function init() {
    cards.innerHTML = ""; // clear old DOM
    transactions.forEach(t => renderTransaction(t));
    updateBalance();
}

// Handle input & send to addTransaction
function handleAddTransaction() {
    if (!desc.value || !amount.value) {
        alert("Please enter both description and amount!");
        return;
    }

    let amt = Number(amount.value);
    let type = amt < 0 ? "expense" : "income";

    // store always as positive number for expense
    addTransaction(desc.value, Math.abs(amt), type);

    desc.value = "";
    amount.value = "";
}

btn.addEventListener("click", (e) => {
    e.preventDefault();
    handleAddTransaction();
});

init();
