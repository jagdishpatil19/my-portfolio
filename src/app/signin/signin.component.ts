import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
 
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
constructor(  private formBuilder:FormBuilder ,private router:Router ){}
  login!:FormGroup
  apiData:any=[]
  heading:string='LOGIN'
  color:string='black'
  ngOnInit(){
    this.formLoad()
  }

  formLoad(){
    this.login=this.formBuilder.group({
      userName:[''],
      password:['']
    })
  }
  submit(){
 
 
   if('jagdish'==this.login.get('userName')?.value && 123456==this.login.get('password')?.value){
    this.router.navigateByUrl('massage')
    localStorage.setItem('isLoggedIn','true')
   }
  else{
    this.heading=' Not Match...Try Again'
    this.color='red'
    localStorage.setItem('isLoggedIn','false')
  }
 

  }
}
