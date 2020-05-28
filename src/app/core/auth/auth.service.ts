import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { tap } from 'rxjs/operators';

import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private userService: UserService) { }

  authenticate(userName: string, password: string) {
    return this.http
      .post(`${environment.API_URL}/user/login`, { userName, password }, { observe: 'response' })
      .pipe(tap(response => {
        const token = response.headers.get('x-access-token');
        this.userService.setToken(token);
      }));
  }
}
