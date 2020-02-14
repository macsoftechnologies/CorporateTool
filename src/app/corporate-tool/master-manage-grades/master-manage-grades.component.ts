import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-master-manage-grades',
  templateUrl: './master-manage-grades.component.html',
  styleUrls: ['./master-manage-grades.component.scss']
})
export class MasterManageGradesComponent implements OnInit {

  constructor(private service:ServiceService) { }
  myform= new FormGroup({
    Grade: new FormControl("", Validators.required),
    description: new FormControl("",Validators.required)
  })

  onSubmit(){
    this.service.grade.push({name:this.myform.value.Grade})
    this.myform.patchValue({
      Grade:null,
      description:null,
    })
  }
  ngOnInit() {
  }

}
