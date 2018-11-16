import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    /**
     * Giving validations to login form
     */
    this.loginForm = this.fb.group({
      username: [null, [Validators.required, Validators.minLength(10)]],
      password: [null, [Validators.required, Validators.minLength(8)]]
    });
  }
  /**
   * on submit give alert and the navigate to dashboard
   */
  public OnClickSubmit() {
    console.log('Login Form:', this.loginForm);
    alert('Login Succesful');
    this.route.navigate(['dashboard']);
  }

      showSuccess() {
        this.messageService.add({severity: 'success', summary: 'Success Message', detail: 'Order submitted'});
    }

}
