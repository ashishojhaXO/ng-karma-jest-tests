import { Component } from '@angular/core';

import { UserService } from './user.service';

@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent {
  count = 0;
  text = 'user page';
  users;
  usersFromServer;

  constructor(private userService: UserService) {
    this.users = this.userService.getUsers();
    this.usersFromServer = this.userService.getUsersFromServer();
  }
}
