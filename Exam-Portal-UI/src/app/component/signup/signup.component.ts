import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import { UserModel } from '../models/user.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  slides = [
    { 'image': '../../assets/img2.jpg' }
  ];

  @ViewChild('f')
  signup!: NgForm;

  user: UserModel = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    userId: 0,
    isEnable: false
  };

  constructor(private userService: UserService,
    private snack: MatSnackBar) { }

  ngOnInit(): void {
  }

  formSubmit() {
    this.userService.addUser(this.user).subscribe({
      next: (data: any) => {
        //console.log(data);
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Successfully registered...'
        })
      },
      error: (error: any) => {
        this.snack.open(error.error, 'Ok', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right'
        });
        this.signup.reset();
      }
    });
  }

}
