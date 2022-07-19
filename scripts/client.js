//console.log('script sourced');

$(readyNow);

let employee = []

function readyNow() {
    console.log('in readyNow');
    
    $('#submit-Btn').on('click', employeeSubmit);

} // End readyNow


function employeeSubmit() {
    console.log('in employeeSubmit');

    let newEmployee = {
        firstName: $('#first-name').val(),
        lastName:  $('#last-name').val(),
        employeeId: $('#id-number').val(),
        jobTitle: $('#job-title').val(),
        annualSalary: $('#annual-salary').val(),
    }
    employee.push(newEmployee);
    $('#employee-table').append(`
    <tr>
        <td>${newEmployee.firstName}</td>
        <td>${newEmployee.lastName}</td>
        <td>${newEmployee.employeeId}</td>
        <td>${newEmployee.jobTitle}</td>
        <td>${newEmployee.annualSalary}</td>
        <td><button id="delete-Btn">delete</button></td>
    </tr>
    `)
    console.log(newEmployee);
    // empty input
    $('#first-name').val('');
    $('#last-name').val('');
    $('#id-number').val('');
    $('#job-title').val('');
    $('#annual-salary').val('');
} // End employeeSubmit