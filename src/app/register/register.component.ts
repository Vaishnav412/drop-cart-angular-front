import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {


  // form Group
  // form Array
  // formControlName (to connect html input box and form array)

// form group
  registerForm=this.fb.group({

// form array
    username:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]

  })

  // FormBuilder -> class
  constructor(private fb:FormBuilder,private api:ApiService,private navigate:Router){}



  register(){

   if(this.registerForm.valid){
    const username=this.registerForm.value.username
    const email=this.registerForm.value.email
    const password=this.registerForm.value.password


    console.log(`${username} ${email} ${password}`);

    const reqBody={username,email,password}

    // api call

         this.api.registerApi(reqBody).subscribe({
          next:(res:any)=>{
            console.log(res);
            this.navigate.navigateByUrl('user/login')
          },
          error:(err:any)=>{
            console.log(err);
            
          }
         })
    

    // alert(`${username} ${email} ${password}`)
   }
   else{
    alert('invalid form')
   }
  }


}
