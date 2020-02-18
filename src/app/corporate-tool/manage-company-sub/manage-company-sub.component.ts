import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-manage-company-sub',
  templateUrl: './manage-company-sub.component.html',
  styleUrls: ['./manage-company-sub.component.scss']
})
export class ManageCompanySubComponent implements OnInit {

  
  constructor(private toastr : ToastrService,
    private router:Router
    ) { }
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
  myform = new FormGroup({
    image : new FormControl("",Validators.required),
    username : new FormControl ("", Validators.required),
    address : new FormControl("",Validators.required),
    addressline2 : new FormControl("",Validators.required),
    country : new FormControl(this.selectyourcountry[0].name,Validators.required),
    city : new FormControl(this.selectyourcity[0].name,Validators.required),
    pincode : new FormControl("",Validators.required),
    contactno : new FormControl("",Validators.required),
    email : new FormControl("",[Validators.required,Validators.email]),
    text : new FormControl("",Validators.required) 
  })
  onSubmit(){
    console.log(this.myform.valid)
    this.myform.patchValue({
      image:null,
      username:null,
      address:null,
      addressline2:null,
      country:this.selectyourcountry[0].name,
      city:this.selectyourcity[0].name,
      pincode:null,
      contactno:null,
      email:null,
      text:null,
    })
  }
  showToaster() {
    this.toastr.success("Company Updated Successfully");
    this.router.navigateByUrl("/corporateTool/managebranch")
    
  }

  ngOnInit() {
  }
  url :any;
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        
        this.url = reader.result;//event.target.result;
      }
    }
  }
  Update(){
    alert("Manage Company has been Created Successfully")
  }

}
