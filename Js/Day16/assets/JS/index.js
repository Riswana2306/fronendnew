
let employees = JSON.parse(localStorage.getItem("employees")) || [];

let form = document.getElementById("employeeForm");
let employeeTable = document.getElementById("employeeTable");

// Display employees
function displayEmployees() {

    employeeTable.innerHTML = "";

    employees.forEach(function(employee) {

        employeeTable.innerHTML += `
            <tr>
                <td>${employee.id}</td>
                <td>${employee.name}</td>
                <td>${employee.age}</td>
                <td>${employee.department}</td>
                <td>${employee.salary}</td>
                <td>
                    <button onclick="deleteEmployee('${employee.id}')">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    });
}

// Form submit event
form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("empName").value.trim();
    let age = Number(document.getElementById("empAge").value);
    let department = document.getElementById("department").value.trim();
    let salary = Number(document.getElementById("salary").value);

    // Validation
    if (name === "" || department === "" ||
        !Number.isFinite(age) || age <= 0 ||
        !Number.isFinite(salary) || salary <= 0) {

        alert("Please enter valid employee details.");
        return;
    }

    // Create employee object
    let employee = {
        id: Date.now().toString() + Math.random().toString(36).slice(2),
        name: name,
        age: age,
        department: department,
        salary: salary
    };

    // Add employee to array
    employees.push(employee);

    // Save array in localStorage
    localStorage.setItem("employees", JSON.stringify(employees));

    // Display updated employee list
    displayEmployees();

    // Clear form
    form.reset();

});

// Delete employee
function deleteEmployee(id) {

    employees = employees.filter(function(employee) {
        return employee.id !== id;
    });

    localStorage.setItem("employees", JSON.stringify(employees));

    displayEmployees();
}

// Display saved records when page loads
displayEmployees();
