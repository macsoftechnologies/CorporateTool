import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-master-manage-department',
  templateUrl: './master-manage-department.component.html',
  styleUrls: ['./master-manage-department.component.scss']
})
export class MasterManageDepartmentComponent implements OnInit {

  constructor( private service: ServiceService, private toastr:ToastrService) { }
  branchname=[]
  myform = new FormGroup({
    DepartmentName: new FormControl("",Validators.required),
    DepartmentDescription: new FormControl("",Validators.required),
    BranchName : new FormControl(null,Validators.required)

  })
  onSubmit(){
    // this.service.DepartmentName.push({name:this.myform.value.DepartmentName})
    this.service.departmentname.push({name:this.myform.value.DepartmentName})
    console.log(this.service.departmentname)
    this.myform.patchValue({
      DepartmentName:null,
      DepartmentDescription:null,
      BranchName:null
    })
  }

  ngOnInit() {
    this.branchname=this.service.managebranch
  }
  showToaster(){
    this.toastr.success("Department created Successfully");
  }

}
