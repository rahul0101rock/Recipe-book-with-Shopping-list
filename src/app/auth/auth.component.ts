import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import * as auth from 'firebase/auth';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    this.isLoading = true;
    if (this.isLoginMode) {
      this.authService.login(form.value['email'], form.value['password']).then(
        response => {
          this.isLoading = false;
          this.router.navigate(['/']);
        }, error => {
          this.error = error;
          this.isLoading = false;
        }
      );
    } else {
      this.authService.signup(form.value['email'], form.value['password']).then(
        response => {
          this.isLoading = false;
          this.router.navigate(['/']);
        }, error => {
          this.error = error;
          this.isLoading = false;
        }
      );
    }
    form.reset();
  }

  onHandleError(){
    this.error = null;
  }

}
