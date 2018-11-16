import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

collection = [];
p = 1;
iCount = 0;
  constructor() {
    for (let i = 1; i <= 100; i++) {
      this.collection.push('Angular ' + i + '.0');
      this.iCount++;
    }
  }


  ngOnInit() {
  }

}
