import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-master-manage-designations',
  templateUrl: './master-manage-designations.component.html',
  styleUrls: ['./master-manage-designations.component.scss']
})
export class MasterManageDesignationsComponent implements OnInit {

  constructor( private toastr:ToastrService) { }
  myform = new FormGroup({
    teamname: new FormControl("",Validators.required),
    teamdescription: new FormControl("",Validators.required)

  })
  onSubmit(){
    
    this.myform.patchValue({
      teamname:null,
      teamdescription:null,
    })  
  }
  ngOnInit() {
  }
  showtoastr(){
    this.toastr.success("Team Has Been created Successfully");
  }

}
