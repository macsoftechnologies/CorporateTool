import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-personal-details',
  templateUrl: './manage-personal-details.component.html',
  styleUrls: ['./manage-personal-details.component.scss']
})
export class ManagePersonalDetailsComponent implements OnInit {
  selecttitle=[
    {name:"Mr."},
    {name:"Mrs."},
    {name:"Ms."},
   ]
   role=[]
   selectgrade=[]
   departmentname=[]
   team=[]
   selectgender=[
     {name:"Male"},
     {name:"Female"},
  ]
  selectjobtitle=[
  ]
  selectmaritalstatus=[
    {name:"Married"},
    {name:"unMarried"},
  ]
  selectrelationship=[
    {name:"Mother"},
    {name:"Father"},
    {name:"Brother"},
    {name:"Sister"},
    {name:"Son"},
    {name:"Daughter"},
    {name:"Grand Father"},
    {name:"Grand Mother"},

  ]

  constructor( private service:ServiceService,private toastr:ToastrService,private router:Router) { }
  myform= new FormGroup({
    username: new FormControl("", Validators.required),
    title : new FormControl(null,[Validators.required]),
    firstname : new FormControl("",Validators.required),
    lastname : new FormControl("",Validators.required),
    userrole : new FormControl(null,Validators.required),
    gender : new FormControl(null,Validators.required),
    teams : new FormControl(null,Validators.required),
    dob : new FormControl("",Validators.required),
    jobtitle : new FormControl(null,Validators.required),
    maritalstatus : new FormControl(null,Validators.required),
    department : new FormControl(null,Validators.required),
    grade : new FormControl(null,Validators.required),
    primaryemail : new FormControl("",Validators.required),
    personalemail : new FormControl("",Validators.required),
    residenceno : new FormControl("",Validators.required),
    mobileno : new FormControl("",Validators.required),
    fullname : new FormControl("",Validators.required),
    relationship : new FormControl(null,Validators.required),
    contactemail : new FormControl("",Validators.required),
    contactno : new FormControl("",Validators.required),
  
  })
  onSubmit(){
    this.myform.patchValue({
      username:null,
      title:null,
      firstname:null,
      lastname:null,
      userrole : null,
      gender :null,
      teams:null,
      dob:null,
      jobtitle:null,
      maritalstatus:null,
      department:null,
      grade: null,
      primaryemail:null,
      personalemail:null,
      residenceno:null,
      mobileno:null,
      fullname:null,
      relationship:null,
      contactemail:null,
      contactno:null,

    })
  }

  ngOnInit() {
    this.role=this.service.role;
    this.selectgrade=this.service.grade;
    this.departmentname=this.service.departmentname;
    this.team=this.service.team

  }

  
  next(){
    // this.toastr.success("Personal Details Has Been Created")
    this.router.navigateByUrl('/corporateTool/managepreferences')
  }

}
