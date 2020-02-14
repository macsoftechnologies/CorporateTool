import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-master-manage-teams',
  templateUrl: './master-manage-teams.component.html',
  styleUrls: ['./master-manage-teams.component.scss']
})
export class MasterManageTeamsComponent implements OnInit {
  departmentname=[]
  constructor( public service:ServiceService) { }
 
  ngOnInit() {
   this.departmentname=this.service.departmentname
  }

}
