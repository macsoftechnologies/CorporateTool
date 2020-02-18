import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-master-manage-teams',
  templateUrl: './master-manage-teams.component.html',
  styleUrls: ['./master-manage-teams.component.scss']
})
export class MasterManageTeamsComponent implements OnInit {
  departmentname=[]
  constructor( public service:ServiceService,private toastr:ToastrService) { }
  
 myform = new FormGroup({
  teamname: new FormControl("",Validators.required),
  teamdescription: new FormControl("",Validators.required),
  selectdepartment : new FormControl(null,Validators.required)

})
onSubmit(){
  this.service.team.push({name:this.myform.value.teamname})
  this.myform.patchValue({
    teamname:null,
    teamdescription:null,
    selectdepartment:null,
  })
}
 
  ngOnInit() {
   this.departmentname=this.service.departmentname
  }
  showToaster(){
    this.toastr.success("Team has been  created Successfully");
  }


}
