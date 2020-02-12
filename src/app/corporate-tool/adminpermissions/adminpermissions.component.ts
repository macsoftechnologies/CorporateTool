import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminpermissions',
  templateUrl: './adminpermissions.component.html',
  styleUrls: ['./adminpermissions.component.scss']
})
export class AdminpermissionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  admin=[
    {id:1,name:"Manage Company"},
    {id:2,name:"Manage Master"},
    {id:3,name:"Manage Users"},
    {id:4,name:"Manage Permissions"},
    {id:5,name:"Manage Travel Policy"},
    {id:6,name:"Manage Company Preference"},
    {id:7,name:"Book A Trip"},
    {id:8,name:"Reports"},
    {id:9,name:"Approval Screen"},
    {id:10,name:"Escalation"},
    {id:11,name:"View Approvals"},
    {id:12,name:"Can Book For Guest User"},
    {id:13,name:"Unlock User"},
]

}
