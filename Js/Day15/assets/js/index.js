
let employees = [];

let form = document.getElementById("employeeForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let age = document.getElementById("age").value;
    let department = document.getElementById("department").value.trim();
    let salary = document.getElementById("salary").value;

    if (name === "" || age === "" ||
        department === "" || salary === "") {
        alert("Please fill all fields");
        return;
    }

    if (Number(age) <= 0 || Number(salary) <= 0) {
        alert("Age and Salary must be positive numbers");
        return;
    }

    let employee = {
        name: name,
        age: Number(age),
        department: department,
        salary: Number(salary)
    };

    employees.push(employee);

    let table = document.getElementById("employeeTable");

    table.innerHTML = "";

    employees.forEach(function(emp, index) {
        table.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${emp.name}</td>
                <td>${emp.age}</td>
                <td>${emp.department}</td>
                <td>${emp.salary}</td>
            </tr>
        `;
    });

    form.reset();

});
