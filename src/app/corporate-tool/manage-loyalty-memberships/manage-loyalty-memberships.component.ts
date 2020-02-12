import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-loyalty-memberships',
  templateUrl: './manage-loyalty-memberships.component.html',
  styleUrls: ['./manage-loyalty-memberships.component.scss']
})
export class ManageLoyaltyMembershipsComponent implements OnInit {
  loyaltycarddetails=[];
  airline="";
  cardnumber:number;
  loyaltycardobject={};
  selectairline=[
    {id:1,name:"Selected Airline"},
    {id:2,name:"visakhaptnam"},
    {id:2,name:"hyderbad"},
    {id:3,name:"usa"},
    {id:4,name:"uk"},
    
  ]

  flightloyaltycards= new FormGroup({
    airline: new FormControl(this.selectairline[0].name,Validators.required),
    cardnumber:new FormControl("",Validators.required)
  })

  constructor() { }
  onsubmit(){
    this.loyaltycardobject=this.flightloyaltycards.value;
    this.loyaltycarddetails.push(this.loyaltycardobject);
    this.flightloyaltycards.patchValue({
      airline:this.selectairline[0].name,
      cardnumber:null,
    })
    
    
  }

  ngOnInit() {
  }

}
