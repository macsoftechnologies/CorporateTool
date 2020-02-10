import { Component, OnInit } from '@angular/core';
import Stepper from 'bs-stepper';


@Component({
  selector: 'app-manage-employees',
  templateUrl: './manage-employees.component.html',
  styleUrls: ['./manage-employees.component.css']
})
export class ManageEmployeesComponent implements OnInit {

  constructor() { }

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
