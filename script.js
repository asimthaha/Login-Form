function validateForm(event) {
    event.preventDefault();
    event.stopPropagation();

    // Getting the input fields
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    
    // Resetting the errors
    resetErrors(email);
    resetErrors(password);
    
    let isError = false;
    if (!isEmpty(email.value)) {
        email.parentElement.children[2].innerHTML = "Email should not be empty";
        isError = true;
    } else if (!isEmail(email.value)) {
        email.parentElement.children[2].innerHTML = "Kindly provide a valid email";
        isError = true;
    }
    if (!isEmpty(password.value)) {
        password.parentElement.children[2].innerHTML = "Password should not be empty";
        isError = true;
    }

    if (!isError) {
        alert('Form submitted successfully');
    }
}

function resetErrors(element) {
    element.parentElement.children[2].innerHTML = "";
}

// To check if the entered text is a valid email id
function isEmail(value) {
    var re = /\S+@\S+\.\S+/;
    return re.test(value);
}

// To check if the entered value is empty
function isEmpty(value) {
    return value.trim().length > 0;
}
