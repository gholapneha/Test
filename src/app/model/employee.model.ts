export interface IEmployee {
    id?: string;
    employee_name?: string;
    employee_salary?: string;
    employee_age?: string;
    profile_image?: string;
}

export class EmployeeModel {
    public id?: string;
    public employee_name?: string;
    public employee_salary?: string;
    public employee_age?: string;
    public profile_image?: string;

    constructor(employeeobject: IEmployee) {
    this.id = employeeobject.id;
    this.employee_name = employeeobject.employee_name;
    this.employee_salary = employeeobject.employee_salary;
    this.employee_age = employeeobject.employee_age;
    this.profile_image = employeeobject.profile_image;
    }
}
