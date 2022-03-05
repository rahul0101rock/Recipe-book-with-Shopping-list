import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoginMode = true;

  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit(): void {
  }

  onSwitchMode(){
    this.isLoginMode = ! this.isLoginMode;
  }

  onSubmit(form: NgForm){
    if(this.isLoginMode){
      this.authService.login(form.value['email'],form.value['password']).then(
        response =>{
          console.log(response);
          this.router.navigate(['/']);
        }
      );
    }else{
      this.authService.signup(form.value['email'],form.value['password']).then(
        response =>{
          console.log(response);
          this.router.navigate(['/']);
        }
      );
    }
    form.reset();
  }

}
