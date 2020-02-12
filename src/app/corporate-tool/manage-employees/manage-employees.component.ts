import { Component, OnInit } from '@angular/core';
import Stepper from 'bs-stepper';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-manage-employees',
  templateUrl: './manage-employees.component.html',
  styleUrls: ['./manage-employees.component.scss']
})
export class ManageEmployeesComponent implements OnInit {
  page = 4;
  page2 = 1;
  currentPage = 3;
  disablepage = 3;
  isDisabled = true;
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
  delete(p){
    let index = this.loyaltycarddetails.indexOf(p);
    this.loyaltycarddetails.splice(index, 1);
   }

  name = 'Angular';
  private stepper: Stepper;

  previous(){ 
    this.stepper.previous();
  }

  next() {
    this.stepper.next();
  }

  onSubmit() {
    return false;
  }

  ngOnInit() {
    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true
    })
  }

}
