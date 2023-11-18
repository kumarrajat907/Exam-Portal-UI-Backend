import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogin$!: BehaviorSubject<boolean>;
  isLoggedIn = false;
  userName = null;

  constructor(private router: Router, public loginService: LoginService) {
    this.isLogin$ = this.loginService.isLoggedIn$;
  }

  ngOnInit(): void {
    this.isLoggedIn = this.loginService.isLoggedIn();
    this.userName = this.loginService.getUser();
    this.loginService.loggedInStatus$.asObservable().subscribe((data)=>{
      this.isLoggedIn = this.loginService.isLoggedIn();
      this.userName = this.loginService.getUser();
    });
  }

  goHome() {
    this.router.navigate(['']);
  }

  goLogin() {
    this.router.navigateByUrl('login');
  }

  goReg() {
    this.router.navigateByUrl('signup');
  }

  doLogout() {
    this.loginService.loggedInStatus$.next(false);
    this.userName=null;
    this.loginService.logout();
    this.router.navigate(['']);
  }
}
