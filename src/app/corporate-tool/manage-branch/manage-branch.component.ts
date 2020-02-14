import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-manage-branch',
  templateUrl: './manage-branch.component.html',
  styleUrls: ['./manage-branch.component.scss'],
  providers:[ToastrService]
})
export class ManageBranchComponent implements OnInit {

  constructor(private toastr : ToastrService, private service: ServiceService) { }
  myform= new FormGroup({
    branchname: new FormControl("", Validators.required)
  })
  manage=[]

  onSubmit(){
    this.service.managebranch.push({name:this.myform.value.branchname})
    this.myform.patchValue({
      branchname:null})
    console.log(this.myform.value)
    console.log(this.service.managebranch)
    this.manage=this.service.managebranch
    
  }

  ngOnInit() {
  }
  showToaster() {
    this.toastr.success("New Branch Created");
  }

}
