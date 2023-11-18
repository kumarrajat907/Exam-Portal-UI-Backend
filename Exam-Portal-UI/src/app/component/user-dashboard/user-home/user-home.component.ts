import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  constructor(private _login: LoginService) { }
  user: any;

  ngOnInit(): void {
    this._login.getCurrentUser().subscribe({
      next: (data: any) => {
        this.user = data;
      }
    });
  }

}
