import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

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
  constructor( private fb:FormBuilder) { 
    this.flightloyaltycards= this.fb.group({
      airline: [null,Validators.required],
      cardnumber:["",Validators.required]
    })
  }
  
 get f(){ return this.flightloyaltycards.controls}
  
  onSubmit(){
    this.submitted=false;
    if(this.flightloyaltycards.valid){
      this.submitted=true
    }else
    {
      return;
    }
    this.loyaltycarddetails.push({airline:this.flightloyaltycards.value.airline,cardnumber:this.flightloyaltycards.value.cardnumber})
    // this.loyaltycardobject=this.flightloyaltycards.value
    // this.loyaltycarddetails.push(this.loyaltycardobject);
    this.flightloyaltycards.reset();
    // this.resetForm(this.flightloyaltycards);
    
    this.flightloyaltycards.patchValue({
      // airline:null,
      // cardnumber:null,
    })
    
    
  }
  // resetForm(form: FormGroup) {
	// 	form.reset();
	// }
  delete(p){
    let index = this.loyaltycarddetails.indexOf(p);
    this.loyaltycarddetails.splice(index, 1);
  }

  

  ngOnInit() {
  }

}
