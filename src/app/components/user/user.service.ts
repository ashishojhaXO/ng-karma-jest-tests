import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class UserService {
    

  constructor(
      private http: HttpClient
  ) { }

  getUsers(): Array<{}> {
      return [
          {
              name: 'user1',
              surname: 'usersurname1'
          },
          {
              name: 'user2',
              surname: 'usersurname2'
          }
      ];
  }

  getUsersFromServer(): Observable<User[]> {
      return this.http.get<User[]>(`${this.GET_USERS}`)
  }

}
