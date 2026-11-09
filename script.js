/* =========================================================
   EVENTEASE STORE
   JavaScript file
   ========================================================= */


/* =========================================================
   1. SHOW ERROR MESSAGE
   ========================================================= */

function showError(input, errorElement, message) {

    errorElement.textContent = message;

    input.classList.add("input-error");

    input.classList.remove("input-success");
}


/* =========================================================
   2. CLEAR ERROR MESSAGE
   ========================================================= */

function clearError(input, errorElement) {

    errorElement.textContent = "";

    input.classList.remove("input-error");

    input.classList.add("input-success");
}


/* =========================================================
   3. PASSWORD STRENGTH FUNCTION
   Control statements
   ========================================================= */

function checkPasswordStrength() {

    const password =
        document.getElementById("password");

    const strengthMessage =
        document.getElementById("passwordStrength");

    // Check if the signup page exists
    if (!password || !strengthMessage) {
        return;
    }


    const value = password.value;


    /* Control statement #1 */

    if (value.length === 0) {

        strengthMessage.textContent =
            "Password strength will appear here.";

        strengthMessage.className =
            "password-strength";

        return;
    }


    /* Control statement #2 */

    if (value.length < 6) {

        strengthMessage.textContent =
            "Weak password - use at least 6 characters.";

        strengthMessage.className =
            "password-strength password-weak";

    }

    else if (value.length < 10) {

        strengthMessage.textContent =
            "Medium password - add more characters.";

        strengthMessage.className =
            "password-strength password-medium";

    }

    else {

        strengthMessage.textContent =
            "Strong password!";

        strengthMessage.className =
            "password-strength password-strong";

    }

}


/* =========================================================
   4. EVENT SUMMARY
   Dynamic HTML element
   ========================================================= */

function updateEventSummary() {

    const eventType =
        document.getElementById("eventType");

    const eventDate =
        document.getElementById("eventDate");

    const summary =
        document.getElementById("eventSummary");


    if (!eventType || !eventDate || !summary) {
        return;
    }


    const selectedEvent =
        eventType.value;

    const selectedDate =
        eventDate.value;


    /* Control statement */

    if (selectedEvent === "" && selectedDate === "") {

        summary.textContent =
            "Your event information will appear here.";

        summary.classList.remove("highlight");

        return;
    }


    let message =
        "<strong>Your Event Plan:</strong><br>";


    if (selectedEvent !== "") {

        message +=
            "Event Type: " +
            selectedEvent +
            "<br>";

    }

    else {

        message +=
            "Event Type: Not selected<br>";

    }


    if (selectedDate !== "") {

        message +=
            "Event Date: " +
            selectedDate +
            "<br>";

    }

    else {

        message +=
            "Event Date: Not selected<br>";

    }


    message +=
        "<br>Choose your favorite services below to create your event plan.";


    /* Dynamic HTML */

    summary.innerHTML = message;


    /* Dynamic CSS */

    summary.classList.add("highlight");

}


/* =========================================================
   5. VALIDATE EMAIL
   ========================================================= */

function validateEmail(email) {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);
}


/* =========================================================
   6. VALIDATE SIGNUP FORM
   ========================================================= */

function validateSignupForm() {

    const fullName =
        document.getElementById("fullName");

    const email =
        document.getElementById("email");

    const password =
        document.getElementById("password");

    const confirmPassword =
        document.getElementById("confirmPassword");

    const eventType =
        document.getElementById("eventType");

    const eventDate =
        document.getElementById("eventDate");

    const terms =
        document.getElementById("terms");


    const nameError =
        document.getElementById("nameError");

    const emailError =
        document.getElementById("emailError");

    const passwordError =
        document.getElementById("passwordError");

    const confirmPasswordError =
        document.getElementById("confirmPasswordError");

    const eventError =
        document.getElementById("eventError");

    const dateError =
        document.getElementById("dateError");

    const termsError =
        document.getElementById("termsError");


    let valid = true;


    /* -----------------------------------------
       NAME VALIDATION
       ----------------------------------------- */

    if (fullName.value.trim() === "") {

        showError(
            fullName,
            nameError,
            "Please enter your full name."
        );

        valid = false;

    }

    else if (fullName.value.trim().length < 3) {

        showError(
            fullName,
            nameError,
            "Name must contain at least 3 characters."
        );

        valid = false;

    }

    else {

        clearError(
            fullName,
            nameError
        );

    }


    /* -----------------------------------------
       EMAIL VALIDATION
       ----------------------------------------- */

    if (email.value.trim() === "") {

        showError(
            email,
            emailError,
            "Please enter your email."
        );

        valid = false;

    }

    else if (!validateEmail(email.value.trim())) {

        showError(
            email,
            emailError,
            "Please enter a valid email address."
        );

        valid = false;

    }

    else {

        clearError(
            email,
            emailError
        );

    }


    /* -----------------------------------------
       PASSWORD VALIDATION
       ----------------------------------------- */

    if (password.value.length < 6) {

        showError(
            password,
            passwordError,
            "Password must contain at least 6 characters."
        );

        valid = false;

    }

    else {

        clearError(
            password,
            passwordError
        );

    }


    /* -----------------------------------------
       CONFIRM PASSWORD
       ----------------------------------------- */

    if (
        confirmPassword.value !== password.value ||
        confirmPassword.value === ""
    ) {

        showError(
            confirmPassword,
            confirmPasswordError,
            "Passwords do not match."
        );

        valid = false;

    }

    else {

        clearError(
            confirmPassword,
            confirmPasswordError
        );

    }


    /* -----------------------------------------
       EVENT TYPE
       ----------------------------------------- */

    if (eventType.value === "") {

        showError(
            eventType,
            eventError,
            "Please select an event type."
        );

        valid = false;

    }

    else {

        clearError(
            eventType,
            eventError
        );

    }


    /* -----------------------------------------
       EVENT DATE
       ----------------------------------------- */

    if (eventDate.value === "") {

        showError(
            eventDate,
            dateError,
            "Please select your event date."
        );

        valid = false;

    }

    else {

        clearError(
            eventDate,
            dateError
        );

    }


    /* -----------------------------------------
       TERMS
       ----------------------------------------- */

    if (!terms.checked) {

        termsError.textContent =
            "You must agree to the terms and conditions.";

        valid = false;

    }

    else {

        termsError.textContent = "";

    }


    /* -----------------------------------------
       FINAL RESULT
       ----------------------------------------- */

    if (valid) {

        alert(
            "Welcome to EventEase Store, " +
            fullName.value.trim() +
            "! Your account has been created successfully."
        );


        return true;

    }

    else {

        alert(
            "Please correct the highlighted fields."
        );


        return false;
    }

}


/* =========================================================
   7. RESET FORM
   ========================================================= */

function resetSignupForm() {

    const fields =
        document.querySelectorAll(
            "#signupForm input, #signupForm select"
        );


    /*
       LOOP REQUIREMENT

       This for loop removes the validation
       classes from every form field.
    */

    for (let i = 0; i < fields.length; i++) {

        fields[i].classList.remove("input-error");

        fields[i].classList.remove("input-success");

    }


    const errorMessages =
        document.querySelectorAll(
            ".error-message"
        );


    /*
       Second loop
    */

    for (let i = 0; i < errorMessages.length; i++) {

        errorMessages[i].textContent = "";

    }


    const passwordStrength =
        document.getElementById(
            "passwordStrength"
        );


    if (passwordStrength) {

        passwordStrength.textContent =
            "Password strength will appear here.";

        passwordStrength.className =
            "password-strength";

    }


    const summary =
        document.getElementById(
            "eventSummary"
        );


    if (summary) {

        summary.textContent =
            "Your event information will appear here.";

        summary.classList.remove("highlight");

    }

}


/* =========================================================
   8. PAGE EVENTS
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* -----------------------------------------
           PASSWORD EVENT
           ----------------------------------------- */

        const password =
            document.getElementById("password");


        if (password) {

            password.addEventListener(
                "input",
                checkPasswordStrength
            );

        }


        /* -----------------------------------------
           EVENT TYPE EVENT
           ----------------------------------------- */

        const eventType =
            document.getElementById("eventType");


        if (eventType) {

            eventType.addEventListener(
                "change",
                updateEventSummary
            );

        }


        /* -----------------------------------------
           EVENT DATE EVENT
           ----------------------------------------- */

        const eventDate =
            document.getElementById("eventDate");


        if (eventDate) {

            eventDate.addEventListener(
                "change",
                updateEventSummary
            );

        }


        /* -----------------------------------------
           SERVICE CHECKBOXES
           ----------------------------------------- */

        const serviceCheckboxes =
            document.querySelectorAll(
                'input[name="services"]'
            );


        /*
           LOOP through all service checkboxes.
        */

        for (
            let i = 0;
            i < serviceCheckboxes.length;
            i++
        ) {

            serviceCheckboxes[i].addEventListener(
                "change",
                function () {

                    updateSelectedServices();

                }
            );

        }


    }
);


/* =========================================================
   9. DYNAMIC SERVICES
   Dynamic HTML + CSS
   ========================================================= */

function updateSelectedServices() {

    const checkboxes =
        document.querySelectorAll(
            'input[name="services"]:checked'
        );


    const summary =
        document.getElementById(
            "eventSummary"
        );


    if (!summary) {
        return;
    }


    let servicesText = "";


    /*
       FOR LOOP
       Demonstrates repetition/control statements.
    */

    for (
        let i = 0;
        i < checkboxes.length;
        i++
    ) {

        servicesText +=
            checkboxes[i].value;


        if (i < checkboxes.length - 1) {

            servicesText += ", ";

        }

    }


    if (checkboxes.length > 0) {

        summary.innerHTML +=
            "<br><strong>Selected Services:</strong> " +
            servicesText;


        /* Dynamic CSS */

        summary.style.borderColor =
            "#2a9d8f";

        summary.style.backgroundColor =
            "#f3fffc";

    }

    else {

        summary.style.borderColor =
            "#9d4edd";

        summary.style.backgroundColor =
            "#faf3ff";

    }

}