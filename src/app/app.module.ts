import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination' ;
import {ToastModule} from 'primeng/toast';
import {AccordionModule} from 'primeng/accordion';
import {MenuItem, MessageService} from 'primeng/api';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { UsersComponent } from './components/users/users.component';
import { PhotosComponent } from './components/photos/photos.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { NotesComponent } from './components/notes/notes.component';
import { ChartComponent } from './components/chart/chart.component';


const appRoute: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'editEmployee/:id', component: EditEmployeeComponent},
  { path: 'users', component: UsersComponent},
  {path: 'photos', component: PhotosComponent},
  { path: 'notes', component: NotesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DashboardComponent,
    EmployeeComponent,
    UsersComponent,
    PhotosComponent,
    EditEmployeeComponent,
    NotesComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    ToastModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoute),
    CarouselModule.forRoot(),
    PaginationModule.forRoot()
  ],
  providers: [
    HttpClient,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
