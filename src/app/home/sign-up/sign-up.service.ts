import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { NewUser } from './new-user';

@Injectable()
export class SignUpService {
  constructor(private http: HttpClient) { }

  checkUserNameTaken(userName: string) {
    return this.http.get(`${environment.API_URL}/user/exists/${userName}`);
  }

  signUp(newUser: NewUser) {
    return this.http.post(`${environment.API_URL}/user/signup`, newUser);
  }
}
