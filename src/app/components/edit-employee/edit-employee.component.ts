/**
 * Neha Gholap
 */
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeModel } from '../../model/employee.model';
import { UpdateEmployeeModel } from '../../model/updateEmployee.model';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  public employeeForm: FormGroup;
  public EmployeeDetails: EmployeeModel;
  public employeeId: number;

  /**
   *take a blank employee form
   */
  ngOnInit() {
    this.employeeForm = this.fb.group({
      name: [],
      age: [],
      salary: []
    });
  }

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {
    /**
     *Get employee id
     */
    route.params.subscribe(
      (param: Params) => {
        this.employeeId = param['id'];

        employeeService.getEmployeeById(param['id']).then(
          (employeeDetails: EmployeeModel) => {
            this.employeeForm.setValue({
              name: employeeDetails.employee_name,
              age: employeeDetails.employee_age,
              salary: employeeDetails.employee_salary
            });
            console.log('Get EmployeeDetails:', employeeDetails);
          }
        );
      }
    );
  }

  SaveData() {
    const employeeDetails: UpdateEmployeeModel = {
      name: this.employeeForm.get('name').value,
      age: this.employeeForm.get('age').value,
      salary: this.employeeForm.get('salary').value
    };
    console.log('Single Employee:', employeeDetails);
  }

  Delete() {
    this.employeeService.deleteEmployee(this.employeeId).then(
      res => {
        this.router.navigate(['/']);
      }
    );
  }
}
