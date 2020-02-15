import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-manage-branch',
  templateUrl: './manage-branch.component.html',
  styleUrls: ['./manage-branch.component.scss'],
  providers:[ToastrService]
})
export class ManageBranchComponent implements OnInit {

  constructor(private toastr : ToastrService, private service: ServiceService) { }
  selectyourcountry=[
    {name:"Select Your Country"},
    {name:"India"},
    {name:"US"},
    {name:"UK"},
    {name:"CHINA"},
  ]
  selectyourcity=[
    {name:"Select Your City"},
    {name:"Banglore"},
    {name:"NewYark"},
    {name:"London"},
    {name:"Dubai"},
  ]
  selectiscostcenter=[
    {name:"select is cost center"},
    {name:"yes"},
    {name:"no"}
  ]
  selectcostcenter=[
    {name:"Select Cost Center"},
    {name:"Banglore"},
    {name:"NewYark"},
    {name:"London"},
    {name:"Dubai"},
  ]
  myform= new FormGroup({
    branchname: new FormControl("", Validators.required),
    email : new FormControl("",[Validators.required,Validators.email]),
    address : new FormControl("",Validators.required),
    addressline2 : new FormControl("",Validators.required),
    country : new FormControl(this.selectyourcountry[0].name,Validators.required),
    city : new FormControl(this.selectyourcity[0].name,Validators.required),
    pincode : new FormControl("",Validators.required),
    contactno : new FormControl("",Validators.required),
    decisioncost : new FormControl(this.selectiscostcenter[0].name,Validators.required),
    costcenter : new FormControl(this.selectcostcenter[0].name,Validators.required),
  })
  manage=[]

  onSubmit(){
    this.service.managebranch.push({name:this.myform.value.branchname})
    this.myform.patchValue({
      branchname:null,
      email:null,
      address:null,
      addressline2:null,
      country:this.selectyourcountry[0].name,
      city:this.selectyourcity[0].name,
      pincode:null,
      contactno:null,
      decisioncost:this.selectiscostcenter[0].name,
      costcenter:this.selectcostcenter[0].name,
    })
    console.log(this.myform.value)
    console.log(this.service.managebranch)
    this.manage=this.service.managebranch
    
  }

  ngOnInit() {
  }
  showToaster() {
    this.toastr.success("New Branch Created");
  }

}
