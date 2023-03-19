
//validation for Name
window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function () {
        if (name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new EmployeePayrollData()).name = name.value;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });
});

// UC 8
const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
salary.addEventListener('input',function(){
output.textContent = salary.value;
});

//UC 9 Main method that invoked by submit button
function save() {
    try {
        let employeePayrollData = createEmployeePayroll();
        createAndUpdateStorage(employeePayrollData);
    } catch (e) {
        return;
    }
}
//Method for creating employee payroll data object
const createEmployeePayroll = () => {
    let employeePayrollData = new EmployeePayrollData();
    try {
        employeePayrollData.name = getInputValueById('#name');
    } catch (e) {
        setTextalue('.text-error', e);
        throw e;
    } 
    employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
    employeePayrollData.department = getSelectedValues('[name=department]');
    employeePayrollData.salary = getInputValueById('#salary');
    employeePayrollData.notes = getInputValueById('#notes');
    let date = getInputValueById('#day') + " " + getInputValueById('#month') + " " + getInputValueById('#year');
    employeePayrollData.date = Date.parseDate(date);
    alert(employeePayrollData.toString());
    return employeePayrollData;
}

/*
 * Helper Method 
 * @param {*} propertyValue 
 * @returns 
 */
const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let setItems = [];
    allItems.forEach(item => {
        if (item.checked) setItems.push(item.value);
    });
    return setItems;
}


/*
 * Helper Method
 * @param {*} id 
 * @returns 
 */
const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}


/**
 * Helper Method 
 * @param {*} id 
 * @returns 
 */
const getInputValueByValue = (id) => {
    let value = document.getElementById(id).value;
    return value;
}
