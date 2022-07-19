//console.log('script sourced');

$(readyNow);

let employee = []

function readyNow() {
    console.log('in readyNow');
    
    $('#submit-Btn').on('click', employeeSubmit);
    $('body').on('click', '#delete-Btn',removeEmployee)

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

    totalMonthly();
} // End employeeSubmit

function removeEmployee() {
    console.log('in removeEmployee');
    $(this).parent().parent().remove()
} // End RemoveEmployee


function totalMonthly(){
    console.log('in totalMonthly');
    const totalmonth = $('#total-monthly');
    let total = 0;
    for(let i = 0; i < employee.length; i++){
        total += Number(employee[i].annualSalary);
        if(total > 20000){
            console.log('exceeded monthly total', total);
            $('#total-monthly').css('background-color', 'red')
        }
    }
    console.log('total monthly', total);

    const monthlytotal = total
    
    totalmonth.empty();
    totalmonth.append(monthlytotal)

} // End monthly total