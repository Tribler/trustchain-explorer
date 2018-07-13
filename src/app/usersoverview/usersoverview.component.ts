import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-usersoverview',
  templateUrl: './usersoverview.component.html',
  styleUrls: ['./usersoverview.component.css']
})
export class UsersoverviewComponent implements OnInit {

  users: any;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.usersService.getUsers(100).subscribe(users => this.users = users.users);
  }

}
