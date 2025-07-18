const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const phoneError = document.getElementById("phone-error");
const msgError = document.getElementById("msg-error");
const submitError = document.getElementById("submit-error");

function validateName() {
    let name = document.querySelector("#contact-name").value;
    if (name.length == 0) {
        nameError.innerHTML = "Name is required";
        return false;
    }
    
    if(!name.match(/^[A-Za-z ]*\s{1}[A-Za-z ]*$/)) {
        nameError.innerHTML = "Write full name";
        return false;
    }
    nameError.innerHTML = "<i class='fas fa-check-circle'></i>";
    return true;
}

function validatePhone() {
    let phone = document.querySelector("#contact-phone").value;
    
    if (phone.length == 0) {
        phoneError.innerHTML = "Phone is required";
        return false;
    }
    if(phone.length !== 10) {
        phoneError.innerHTML = "10 digits required";
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "Only numbers please";
        return false;
    }
    phoneError.innerHTML = "<i class='fas fa-check-circle'></i>";
    return true;
}       

function validateEmail() {
    let email = document.querySelector("#contact-email").value;
    
    if (email.length == 0) {
        emailError.innerHTML = "Email is required";
        return false;
    }
    
    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
        emailError.innerHTML = "Invalid email format";
        return false;
    }
    emailError.innerHTML = "<i class='fas fa-check-circle'></i>";
    return true;
}

function validateMessage() {
    let msg = document.querySelector("#contact-msg").value;
    let reuired = 20;
    let left = reuired - msg.length;
    
    if (left > 0) {
        msgError.innerHTML = left + " more characters required";
        return false;
    }
    msgError.innerHTML = "<i class='fas fa-check-circle'></i>";
    return true;
}

function validateForm() {
    if (!validateName() || !validateEmail() || !validatePhone() || !validateMessage()) {
        submitError.style.display = "block";
        submitError.innerHTML = "Please fix errors before submitting";
        setTimeout(function () {
            submitError.style.display = "none";
        }, 3000);
        return false;
    }
    submitError.style.display = "none";
    alert("Form submitted successfully!");
    return true;
}