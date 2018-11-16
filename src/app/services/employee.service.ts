import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeModel } from '../model/employee.model';
import { promise } from 'protractor';
import { resolve } from 'url';
// import { resolve } from 'path';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  public getEmployeeList(): Promise<EmployeeModel> {
    const employeeList = new Promise(
      // tslint:disable-next-line:no-shadowed-variable
      resolve => {
        this.http.get('http://dummy.restapiexample.com/api/v1/employees').subscribe(
          (response: EmployeeModel) => {
            resolve(response);
            console.log('EmployeeList:', response);
          }
        );
      }
    );
    return employeeList;
  }

  /**
   * API call to get single employee details by it's id
   */

  public getEmployeeById(id: number): Promise<EmployeeModel> {
    const EmployeeDetails: Promise<EmployeeModel> = new Promise(
      // tslint:disable-next-line:no-shadowed-variable
      resolve => {
        this.http.get('http://dummy.restapiexample.com/api/v1/employee/' + id).subscribe(
          (response: EmployeeModel) => {
            resolve(response);
          }
        );
      }
    );
    return EmployeeDetails;
  }

  /**
   * API call to Delete employee
   */

   public deleteEmployee(id: number): Promise<boolean> {
     const deleteEmployee: Promise<boolean> = new Promise(
       // tslint:disable-next-line:no-shadowed-variable
       resolve => {
          this.http.get('http://dummy.restapiexample.com/api/v1/delete/' + id).subscribe(
            response => {
              resolve(true);
            }
          );
       }
     );
     return deleteEmployee;
   }
}
