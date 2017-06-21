import { Component } from '@angular/core';
import { Employee } from './Models/employee'

@Component({
    selector: 'emp-root',
    templateUrl: './Views/employee-app.component.html'
})

export class EmployeeComponent {
    // Binding Logic
    currentEmployee: Employee = new Employee();
    // Employee Collection
    employees: Array<Employee> = new Array<Employee>();
    // Add Employee
    addEmployee() {
        this.employees.push(this.currentEmployee);
        this.clearFields();
        this.currentEmployee = new Employee();
    }
    clearFields() {
        this.currentEmployee = new Employee();
    }
    selectEmployee(empSelected: Employee) {
        this.currentEmployee = Object.assign({}, empSelected);
    }
    deleteEmployee(empIndex: number){
        this.employees.splice(empIndex,1);
    }
    updateEmployee() {
        for(let emp of this.employees) {
            if(emp.empCode == this.currentEmployee.empCode) {
                emp.empName = this.currentEmployee.empName;
                emp.empSalary = this.currentEmployee.empSalary;
            }
        }
        this.currentEmployee = new Employee();
    }
}