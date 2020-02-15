import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manage-personal-details',
  templateUrl: './manage-personal-details.component.html',
  styleUrls: ['./manage-personal-details.component.scss']
})
export class ManagePersonalDetailsComponent implements OnInit {
  selecttitle=[
    {name:"Select Title"},
    {name:"Mr."},
    {name:"Mrs."},
    {name:"Ms."},
   ]
   role=[]
   selectgrade=[]
   departmentname=[]
   team=[]
   selectgender=[
     {name:"Select Your Gender"},
     {name:"Male"},
     {name:"Female"},
  ]
  selectjobtitle=[
    {name:"Select Your JobTitle"}
  ]
  selectmaritalstatus=[
    {name:"Select Your Maritl Status"},
    {name:"Married"},
    {name:"unMarried"},
  ]
  selectrelationship=[
    {name:"Select Your relationship"},
    {name:"Mother"},
    {name:"Father"},
    {name:"Brother"},
    {name:"Sister"},
    {name:"Son"},
    {name:"Daughter"},
    {name:"Grand Father"},
    {name:"Grand Mother"},

  ]

  constructor( private service:ServiceService,private toastr:ToastrService) { }
  myform= new FormGroup({
    username: new FormControl("", Validators.required),
    title : new FormControl("this.selecttitle[0].name",[Validators.required]),
    firstname : new FormControl("",Validators.required),
    lastname : new FormControl("",Validators.required),
    userrole : new FormControl("this.role[0].name",Validators.required),
    gender : new FormControl("this.selectgender[0].name",Validators.required),
    teams : new FormControl("this.team[0].name",Validators.required),
    dob : new FormControl("",Validators.required),
    jobtitle : new FormControl("this.selectjobtitle[0].name",Validators.required),
    maritalstatus : new FormControl("this.selectmaritalstatus[0].name",Validators.required),
    department : new FormControl("this.departmentname[0].name",Validators.required),
    grade : new FormControl("this.selectgrade[0].name",Validators.required),
    primaryemail : new FormControl("",Validators.required),
    personalemail : new FormControl("",Validators.required),
    residenceno : new FormControl("",Validators.required),
    mobileno : new FormControl("",Validators.required),
    fullname : new FormControl("",Validators.required),
    relationship : new FormControl("this.selectrelationship[0].name",Validators.required),
    contactemail : new FormControl("",Validators.required),
    contactno : new FormControl("",Validators.required),
  
  })
  onSubmit(){
    this.myform.patchValue({
      username:null,
      title:this.selecttitle[0].name,
      firstname:null,
      lastname:null,
      userrole : this.role[0].name,
      gender :this.selectgender[0].name,
      teams:this.team[0].name,
      dob:null,
      jobtitle:this.selectjobtitle[0].name,
      maritalstatus:this.selectmaritalstatus[0].name,
      department:this.departmentname[0].name,
      grade: this.selectgrade[0].name,
      primaryemail:null,
      personalemail:null,
      residenceno:null,
      mobileno:null,
      fullname:null,
      relationship:this.selectrelationship[0].name,
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

  public next():void{
    
  }
  showtoastr(){
    this.toastr.success("Personal Details Has Been Created")
  }

}
