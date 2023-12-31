import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user!:any;

  constructor(private login:LoginService) { }

  ngOnInit(): void {
    this.login.getCurrentUser().subscribe({
      next:(data:any)=>{
        this.user=data;
        //console.log(this.user);
      }
    });
  }

}
