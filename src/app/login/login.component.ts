import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username:any={}

  
// form group
loginForm=this.fb.group({

  // form array
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  
    })
  
    // FormBuilder -> class
    constructor(private fb:FormBuilder,private api:ApiService,private navigate:Router){}
  
  
  
    login(){
  
     if(this.loginForm.valid){
      const email=this.loginForm.value.email
      const password=this.loginForm.value.password
  
  
      console.log(` ${email} ${password}`);
  
      const reqBody={email,password}
  
      // api call
  
           this.api.loginApi(reqBody).subscribe({
            next:(res:any)=>{
              console.log(res);
              this.username=res.existingUser.username
              // console.log(this.username);
              localStorage.setItem("user",this.username)
              this.navigate.navigateByUrl('/user/home')
            },
            error:(err:any)=>{
              console.log(err);
              alert('Invalid username or password')
            }
           })
      
  
      // alert(` ${email} ${password}`)
     }
     else{
      alert('invalid form')
     }
    }
  

}
