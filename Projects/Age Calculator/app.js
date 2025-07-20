const ageDisplay = document.getElementById("result");
const btn = document.querySelector("button");

const currDate = new Date();
const currYear = currDate.getFullYear();
const currMonth = currDate.getMonth() + 1; // Months are zero-indexed
const currDay = currDate.getDate();

function calculateAge(e) {
    e.preventDefault();
    const birthDate = document.getElementById("birthDate");

    if(birthDate.value === "") {
        ageDisplay.innerHTML = "Please enter your birth date.";
        return;
    }
    
    const birth = new Date(birthDate.value);
    const birthYear = birth.getFullYear();
    const birthMonth = birth.getMonth() + 1; // Months are zero-indexed
    const birthDay = birth.getDate();

    console.log(`Birth Date: ${birthYear}-${birthMonth}-${birthDay}`);

    let age = currYear - birthYear;
    let monthDiff = currMonth - birthMonth;
    let dayDiff = currDay - birthDay;

    console.log(`Current Date: ${currYear}-${currMonth}-${currDay}`);
    
    if(age === 0 && monthDiff === 0 && dayDiff === 0) {
        ageDisplay.innerHTML = "You are born today!";
        return;
    }

    if(monthDiff === 0 && dayDiff === 0) {
        ageDisplay.innerHTML = `You are ${age} years ${monthDiff} months ${dayDiff} days old!`;
        return;
    }

    if (age < 0) {
        ageDisplay.innerHTML = "Future date is not allowed!";
        return;
    }

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) { 
        age--;
        monthDiff = 12 + monthDiff;
        
        if(dayDiff < 0) {
            const lastMonth = new Date(currYear, currMonth - 1, 0); // Last Day of The Previous Month
            dayDiff = lastMonth.getDate() + dayDiff + 1; 
            monthDiff--;
        }
        ageDisplay.innerHTML = `You are ${age} years ${monthDiff} months ${dayDiff} days old!`;
        
    }
    if (dayDiff < 0) {
        const lastMonth = new Date(currYear, currMonth - 1, 0); // Last Day of The Previous Month
        dayDiff = lastMonth.getDate() + dayDiff + 1; 
        monthDiff--;
    }
    console.log(`${age}-${monthDiff}-${dayDiff}`);
    ageDisplay.innerHTML = `You are <span class="bold">${age}</span> years <span class="bold">${monthDiff}</span> months <span class="bold">${dayDiff}</span> days old!`;
}
btn.addEventListener("click", calculateAge);
