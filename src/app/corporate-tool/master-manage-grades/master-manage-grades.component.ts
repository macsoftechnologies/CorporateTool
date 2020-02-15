import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ServiceService } from '../service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-master-manage-grades',
  templateUrl: './master-manage-grades.component.html',
  styleUrls: ['./master-manage-grades.component.scss']
})
export class MasterManageGradesComponent implements OnInit {

  constructor(private service:ServiceService,private toastr:ToastrService) { }
  myform= new FormGroup({
    grade: new FormControl("", Validators.required),
    description: new FormControl("",Validators.required)
  })

  onSubmit(){
    this.service.grade.push({name:this.myform.value.grade})
    this.myform.patchValue({
      grade:null,
      description:null,
    })
  }
  showtoastr(){
    this.toastr.success("Grade Has Been Created Successfully")
  }
  ngOnInit() {
  }

}
