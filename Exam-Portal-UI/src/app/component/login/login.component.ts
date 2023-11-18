import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f')
  loginForm!: NgForm;

  loginData = {
    email: '',
    password: ''
  };

  slides = [{ 'image': '../../assets/img1.jpg' }
  ];
  constructor(private loginService: LoginService, private snack: MatSnackBar,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  login() {
    //console.log("clicked");
    this.loginService.generateToken(this.loginData).subscribe({
      next: (data: any) => {
        //console.log(data);
        this.loginService.setTokenToLocalStorage(data.token);
        this.loginService.getCurrentUser().subscribe({

          next: (loginUser: any) => {
            this.loginService.setUserDetails(loginUser.email);
            //console.log(loginUser.email)
            if (loginUser.authorities[0].authority == 'ADMIN') {
              this.loginService.setRole(loginUser.authorities[0].authority);
              this.loginService.loggedInStatus$.next(true);
              this.router.navigateByUrl('/admin');
            } else if (loginUser.authorities[0].authority == 'NORMAL') {
              this.loginService.setRole(loginUser.authorities[0].authority);
              this.loginService.loggedInStatus$.next(true);
              this.router.navigateByUrl('/user-dashboard');
            } else {
              this.loginService.logout();
              this.router.navigateByUrl('/login');
            }
          }
        });
      },
      error: (error: any) => {
        //console.log(error.error.text);
        if (error.error.text) {
          this.snack.open(error.error.text, 'Ok', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'right'
          });

        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Something happens to the Backend !!'
          })
        }
        this.loginForm.reset();
      }
    });
  }

}
