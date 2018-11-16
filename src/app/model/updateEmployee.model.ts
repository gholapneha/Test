// tslint:disable-next-line:no-empty-interface
export interface IUpdateEmployee {
    name?: string;
    age?: string;
    salary?: string;
}

export class UpdateEmployeeModel {
    public name?: string;
    public age?: string;
    public salary?: string;

    constructor(UpdateEmployeeObject: IUpdateEmployee) {
    this.name = UpdateEmployeeObject.name;
    this.age = UpdateEmployeeObject.age;
    this.salary = UpdateEmployeeObject.salary;
    }
}
