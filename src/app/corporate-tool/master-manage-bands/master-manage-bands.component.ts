import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-master-manage-bands',
  templateUrl: './master-manage-bands.component.html',
  styleUrls: ['./master-manage-bands.component.scss']
})
export class MasterManageBandsComponent implements OnInit {
  departmentname=[]
  grade=[]
  constructor( private service:ServiceService,private toastr:ToastrService) { }
  myform = new FormGroup({
    bandname: new FormControl("",Validators.required),
    selectdepartment: new FormControl("this.departmentname[0].name",Validators.required),
    selectgrade : new FormControl("this.grade[0].name",Validators.required)

  })
  onSubmit(){
    this.service.role.push({name:this.myform.value.bandname})
    this.myform.patchValue({
      bandname:null,
      selectdepartment:this.departmentname[0].name,
      selectgrade:this.grade[0].name,
    })
  }
  ngOnInit() {
    this.departmentname=this.service.departmentname;
    this.grade=this.service.grade
    console.log(this.grade)

  }
  showtoastr(){
    this.toastr.success("Band Has Been Created successfully")
}

}