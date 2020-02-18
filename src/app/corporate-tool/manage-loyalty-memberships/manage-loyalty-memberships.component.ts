import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manage-loyalty-memberships',
  templateUrl: './manage-loyalty-memberships.component.html',
  styleUrls: ['./manage-loyalty-memberships.component.scss']
})
export class ManageLoyaltyMembershipsComponent implements OnInit {
  loyaltycarddetails=[];
  
  loyaltycardobject={};
  selectairline=[
    {id:1,name:"Selected Airline"},
    {id:2,name:"visakhaptnam"},
    {id:2,name:"hyderbad"},
    {id:3,name:"usa"},
    {id:4,name:"uk"},
    
  ]
  page=1;
  flightloyaltycards: FormGroup;
  submitted =false;
  constructor( private fb:FormBuilder,private toastr:ToastrService) { 
    this.flightloyaltycards= this.fb.group({
      airline: [null,Validators.required],
      cardnumber:["",Validators.required]
    })
  }
  
 get f(){ return this.flightloyaltycards.controls}
  
  onSubmit(){
    this.submitted=true;
    if(!this.flightloyaltycards.valid){
      return;
      
    }else
    {
      
      
    
    this.loyaltycarddetails.push({airline:this.flightloyaltycards.value.airline,cardnumber:this.flightloyaltycards.value.cardnumber})
    this.toastr.success("Loyality Membership has been added Successfully")
    // this.loyaltycardobject=this.flightloyaltycards.value
    // this.loyaltycarddetails.push(this.loyaltycardobject);
    
    // this.resetForm(this.flightloyaltycards);
    
    }
    this.flightloyaltycards.reset();
}
  // resetForm(form: FormGroup) {
	// 	form.reset();
	// }
  delete(p){
    let index = this.loyaltycarddetails.indexOf(p);
    this.loyaltycarddetails.splice(index, 1);
  }
  // showtoastr(){
  //   this.toastr.success("Loyality Membership has been added Successfully")
  // }

  

  ngOnInit() {
  }

}
