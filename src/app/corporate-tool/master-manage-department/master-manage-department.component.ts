import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-master-manage-department',
  templateUrl: './master-manage-department.component.html',
  styleUrls: ['./master-manage-department.component.scss']
})
export class MasterManageDepartmentComponent implements OnInit {

  constructor( private service: ServiceService) { }
  branchname=[]
  myform = new FormGroup({
    DepartmentName: new FormControl("",Validators.required),
    DepartmentDescription: new FormControl("",Validators.required),
    BranchName : new FormControl("this.branchname[0].name",Validators.required)

  })
  onSubmit(){
    // this.service.DepartmentName.push({name:this.myform.value.DepartmentName})
    this.service.departmentname.push({name:this.myform.value.DepartmentName})
    console.log(this.service.departmentname)
    this.myform.patchValue({
      DepartmentName:null,
      DepartmentDescription:null,
      BranchName:this.branchname[0].name
    })
  }

  ngOnInit() {
    this.branchname=this.service.managebranch
  }

}
