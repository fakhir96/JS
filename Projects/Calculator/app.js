const display = document.querySelector('input[name="display"]');

const buttons = document.querySelectorAll('input[type="button"]');

const themeToggle = document.getElementById("themeToggle");
const body = document.body;
themeToggle.addEventListener("click", () => {
    if (themeToggle.checked) {
        // body.classList.remove("light");
        body.classList.add("dark");
        // localStorage.setItem("mode", "dark");
    }
    else {
        body.classList.remove("dark");
        // body.classList.add("light");
        // localStorage.setItem("mode", "light");
    }
});
function disableButtons() {
    buttons.forEach(btn => {
        if (btn.value !== "AC") {
            btn.disabled = true;
            btn.style.opacity = 0.5;
        }
    });
}

function enableButtons() {
    buttons.forEach(btn => {
        btn.disabled = false;
        btn.style.opacity = 1;
    });
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        if (value === 'AC') {
            display.value = '';
            enableButtons();
        } 
        else if (value === 'DE') {
            // Delete the last character from the display
            display.value = display.value.slice(0, -1);
        } 
        else if (value === '=') {
            try {
                // Evaluate the expression and show result
                display.value = eval(display.value);
            } 
            catch (error) {
                // Handle invalid expressions (++, ..)
                display.value = "Error";
                disableButtons();
            }
        } 
        else {
            display.value += value;
        }
    });
});


