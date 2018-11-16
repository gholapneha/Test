/**
 * @author Neha Gholap
 */
import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../../model/employee.model';
import { EmployeeService } from '../../services/employee.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public employeeList: EmployeeModel[];
  public employees;

  currentPage = 1;
  page: number;

  /**
   * fuction for pagination page change
   */
  pageChanged(event: any): void {
    this.page = event.page;
  }

  // tslint:disable-next-line:no-inferrable-types
  // tslint:disable-next-line:member-ordering
  // public p: number = 1;

  constructor( private employeeService: EmployeeService) {
    /**
     * call service to get employee list
     */
    employeeService.getEmployeeList().then(
      (response: EmployeeModel) => {
        this.employeeList = response;
      }
    );
   }

  ngOnInit() {
  }

}
