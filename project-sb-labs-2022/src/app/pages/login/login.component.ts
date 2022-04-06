import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/interfaces/login';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public user: Login = { //aici salvam ce introduce user-ul in form de login
    email: '',
    password: ''
  }
  
  errorMessage = ''; //validation err 
  error: { name: string, message: string } = { name: '', message: '' }; // for firbase error handle

  constructor(private router:Router, public authservice: AuthService) { }

  ngOnInit(): void {
  }
  
  isNotValid(){
    return !this.user.email || !this.user.password;
  }
  clearErrorMessage()
  {
    this.errorMessage = '';
    this.error = {name : '' , message:''};
  }
  doLogin(){
    if(this.user.email && this.user.password){ //daca a introdus datele
      if(this.validateEmail(this.user.email) && this.validatePassword(this.user.password)){ //daca sunt valide
        localStorage.setItem("user",JSON.stringify(this.user));
        //apelam API de login
        this.authservice.loginWithEmail(this.user.email, this.user.password)
        .then(() => {
          this.router.navigate(['/user-profile']) //aici il trimit la pag contului sau
          //console.log(this.user.email)
        }).catch(_error => {
          this.error = _error
          this.router.navigate(['/login']) //aici redirectionez catre pag pt ca are eroare
        })
      }
    }
  }

  goToDashboard(){
    this.router.navigate(['/dashboard']);
  }
  validateEmail(email:string){
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  validatePassword(password:string){
    if (password.length < 6)
    {
      this.errorMessage = "password should be at least 6 char";
      return false;
    }
    return true;
  }

}
