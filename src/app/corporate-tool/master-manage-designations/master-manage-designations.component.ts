import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-master-manage-designations',
  templateUrl: './master-manage-designations.component.html',
  styleUrls: ['./master-manage-designations.component.scss']
})
export class MasterManageDesignationsComponent implements OnInit {
  

  constructor( private service:ServiceService,private toastr:ToastrService) { }
  myform = new FormGroup({
    teamname: new FormControl("",Validators.required),
    teamdescription: new FormControl("",Validators.required)

  })
  onSubmit(){
    this.service.teamname.push({name:this.myform.value.teamname})
    console.log(this.service.teamname)
    this.myform.patchValue({
      teamname:null,
      teamdescription:null,
    })  
  }
  ngOnInit() {
    
  }
  showtoastr(){
    this.toastr.success("Designation Has Been created Successfully");
  }

}
