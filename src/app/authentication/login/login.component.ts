import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
  loginform : FormGroup;
  submitted=false;
  name="username";
  constructor(public router: Router, public fb:FormBuilder) {
    this.loginform = this.fb.group({
      username : ["", Validators.required],
      password : ["", Validators.required,Validators.minLength[6]]
    })
  }
 


  ngOnInit() {
   
  }
  profile={username:"i2space",password:"ctool"}

  get f(){ return this.loginform.controls}
  
  onSubmit(){
    this.submitted = true;
    
    // if(this.profile.username !== this.loginform.value.username){
    //     alert("plz enter correct username")
    //     this.name
    //     console.log(this.name)
    //    }else if(this.profile.password !== this.loginform.value.password){
    //      alert("plz enter password")
         
    //    }else{
    //     this.router.navigateByUrl("/corporateTool/allTrips")
    //    }

        if(this.profile.username !== this.loginform.value.username || this.profile.password !== this.loginform.value.password){
        return
      }
    

      this.router.navigateByUrl("/corporateTool/allTrips")
     }

  ngAfterViewInit() {
    /*$(function() {
            $(".preloader").fadeOut();
        });
        $('#to-recover').on("click", function() {
            $("#loginform").slideUp();
            $("#recoverform").fadeIn();
        });*/
  }

  onLoggedin() {
    localStorage.setItem('isLoggedin', 'true');
  }
}
