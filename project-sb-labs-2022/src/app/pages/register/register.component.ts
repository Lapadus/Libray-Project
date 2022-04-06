import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from "../../services/auth.service";
import { CrudService } from 'src/app/services/crud.service';
import { getDatabase, ref, set, onValue } from "firebase/database";
import * as firebase from 'firebase/compat';
import 'firebase/compat/firestore';
import { FirebaseApp } from '@angular/fire/app';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  db = getDatabase();
  name1: string = ''
  public myForm!: FormGroup; //cu ! spunem ca myForm poate sa fie si null
  //in myForm retinem datele introduse de utiliozator
  errorMessage = ''; //validation err
  error: {name:string, message:string} = {name: '', message: ''}; //for firebase error handle
  message = '';
  //serviciile folosite trebuie injectate in componenta,
  //iar pt a face asta trebuie sa le adaugam ca parametrii
  //la constructorul clasei.
  //Cosntructorul este folosit doar pentru injectare
  constructor(private formBuilder: FormBuilder, private router: Router, 
    public authservice: AuthService, public crudservice: CrudService) { }

  //ngOnInit() se apeleaza o sg data dupa ce se afiseaza comp pe ecran
  ngOnInit(): void {
    this.myForm = this.formBuilder.group({ //definim grupul de prop
      lastName: ['',[Validators.maxLength(10), Validators.required]],
      firstName:['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password:['',[Validators.required, Validators.minLength(5)]],
      phone: ['',Validators.minLength(10)],
    });
  }
  clearErrorMessage()
  {
    this.errorMessage = '';
    this.error = {name : '' , message:''};
  }
  
  doRegister(){
    this.clearErrorMessage();
    if (this.myForm.controls['email'].value && this.myForm.controls['password'].value ) {
      this.authservice.registerWithEmail(this.myForm.controls['email'].value, this.myForm.controls['password'].value)
        .then(() => {
          this.message = "You are register with data on firbase"
          this.router.navigate(['/user-profile'])
         
          let Record = {};
          //console.log(this.authservice.currentUserName)
          Record['lastName'] = this.myForm.controls['lastName'].value;
          Record['firstName'] = this.myForm.controls['firstName'].value;
          Record['email'] = this.myForm.controls['email'].value;
          Record['password'] = this.myForm.controls['password'].value;
          Record['phone'] = this.myForm.controls['phone'].value;

          this.crudservice.createNewUser(Record);
          //alert(this.crudservice.obtainName(Record['lastName']));
         
          set(ref(this.db, 'Users/' + this.myForm.controls['lastName'].value), {
            lastName: this.myForm.controls['lastName'].value,
            firstName: this.myForm.controls['firstName'].value,
            email : Record['email'] = this.myForm.controls['email'].value,
            phone : Record['phone'] = this.myForm.controls['phone'].value
          }); 
          alert('user created!');

          //aici iau datele despre user-ul inregistrat curent
          const starCountRef = ref(this.db, 'Users/' + this.myForm.controls['lastName'].value);
          onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();  
            this.name1=data.first_name;
            //console.log(this.name1)
          });   
      
        }).catch(_error => {
          this.error = _error
          this.router.navigate(['/register'])
        })
    }
    
  }
  displayName(){
    const starCountRef = ref(this.db, 'Users/' + this.myForm.controls['lastName'].value);
          onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();  
            this.name1=data.first_name;
            //console.log(this.name1)
          });   
    console.log(this.name1);
  }

  goToLogin(){
    //redirectare catre login cu serviciul router
    this.router.navigate(['/login']);
  }

}
