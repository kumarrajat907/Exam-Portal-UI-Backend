import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import baseUrl from './url';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public isLoggedIn$ = new BehaviorSubject(false);
  public loggedInStatus$ = new Subject<boolean>();
  role!: string;

  constructor(private http: HttpClient) { }

  //get current user from backend which is logged in
  public getCurrentUser() {
    return this.http.get(`${baseUrl}/current`);
  }

  public generateToken(loginDetails: any) {
    return this.http.post(`${baseUrl}/token`, loginDetails);
  }

  //setting token to browser local storage
  public setTokenToLocalStorage(token: any) {
    localStorage.setItem("token", token);
    this.isLoggedIn$.next(true);
    return true;
  }
  //check customer is logged in or not
  public isLoggedIn() {
    let tokenStr = localStorage.getItem("token");
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    } else {
      return true;
    }
  }

  //function for logout
  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    this.isLoggedIn$.next(false);
    this.loggedInStatus$.next(false);
    return true;
  }

  //get token
  public getToken() {
    return localStorage.getItem('token');
  }

  //set user details
  public setUserDetails(user: any) {
    return localStorage.setItem('user', JSON.stringify(user));
  }

  //get user details
  public getUser() {
    let userStr = localStorage.getItem("user");
    if (userStr != null) {
      return JSON.parse(userStr);
    } else {
      this.logout();
      return null;
    }
  }

  public getUserRole() {
    let roleStr = localStorage.getItem('role');
    if (roleStr != null) {
      return JSON.parse(roleStr);
    } else {
      this.logout();
      return null;
    }
  }

  public setRole(role: string) {
    localStorage.setItem("role", JSON.stringify(role));
  }

}
