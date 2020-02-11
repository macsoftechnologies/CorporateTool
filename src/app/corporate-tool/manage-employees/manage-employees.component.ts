import { Component, OnInit } from '@angular/core';
import Stepper from 'bs-stepper';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';


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

  constructor() { }
  loyaltycarddetails=[];
  airline="";
  cardnumber:number;
  selectairline=[
    {id:1,name:"Selected Airline"},
    {id:2,name:"visakhaptnam"},
    {id:2,name:"hyderbad"},
    {id:3,name:"usa"},
    {id:4,name:"uk"},
    
  ]
  submit(){
    this.loyaltycarddetails.push({airline:this.airline,cardnumber:this.cardnumber})
    this.airline=null;
    this.cardnumber=null;
    console.log(this.loyaltycarddetails)
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
