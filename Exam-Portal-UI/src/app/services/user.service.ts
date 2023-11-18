import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../component/models/user.model';
import baseUrl from './url';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public addUser(user: UserModel) {
    return this.http.post(`${baseUrl}/user/register`, user);
  }
}
