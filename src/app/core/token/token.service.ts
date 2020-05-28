import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private _key = 'authToken';

  hasToken() {
    return !!this.getToken();
  }

  setToken(token: string) {
    window.localStorage.setItem(this._key, token);
  }

  getToken() {
    return window.localStorage.getItem(this._key);
  }

  removeToken() {
    window.localStorage.removeItem(this._key);
  }
}
