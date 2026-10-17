
let registerForm = document.getElementById("registerForm");
let loginForm = document.getElementById("loginForm");

// REGISTER
if (registerForm) {

    registerForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        let user = {
            name: name,
            email: email,
            password: password
        };

        localStorage.setItem("user", JSON.stringify(user));

        alert("Register Successful!");

        window.location.href = "login.html";
    });
}

// LOGIN
if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        let savedUser = JSON.parse(localStorage.getItem("user"));

        if (savedUser &&
            savedUser.email === email &&
            savedUser.password === password) {

            localStorage.setItem("loggedIn", "true");

            alert("Login Successful!");

            window.location.href = "dashboard.html";

        } else {
            alert("Invalid Email or Password!");
        }
    });
}

// DASHBOARD
if (window.location.pathname.endsWith("dashboard.html")) {

    let savedUser = JSON.parse(localStorage.getItem("user"));
    let loggedIn = localStorage.getItem("loggedIn");

    if (loggedIn !== "true" || !savedUser) {

        window.location.href = "login.html";

    } else {

        document.getElementById("welcome").textContent =
            "Welcome " + savedUser.name;
    }
}

// LOGOUT
let logoutButton = document.getElementById("logout");

if (logoutButton) {

    logoutButton.addEventListener("click", function() {

        localStorage.removeItem("loggedIn");

        window.location.href = "login.html";
    });
}
