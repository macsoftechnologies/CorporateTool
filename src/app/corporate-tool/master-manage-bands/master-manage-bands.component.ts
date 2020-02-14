import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-master-manage-bands',
  templateUrl: './master-manage-bands.component.html',
  styleUrls: ['./master-manage-bands.component.scss']
})
export class MasterManageBandsComponent implements OnInit {
  departmentname=[]
  grade=[]
  constructor( private service:ServiceService) { }
 
  ngOnInit() {
    this.departmentname=this.service.departmentname;
    this.grade=this.service.grade

  }

}
