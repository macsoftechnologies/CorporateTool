import { Component, OnInit } from '@angular/core';
import { ROUTES } from "../../shared/sidebar/menu-items";
@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css']
})
export class PermissionsComponent implements OnInit {
  sidebarnavItems: any;
  constructor() { }

  ngOnInit() {
    this.sidebarnavItems = ROUTES.filter(sidebarnavItem => sidebarnavItem);
    this.sidebarnavItems[0].submenu[3].submenu.push({
      path: '/corporateTool/adminpermissions',
      title: 'Employee',
      icon: '',
      class: '',
      label: '',
      labelClass: '',
      extralink: false,
      submenu: []
    });


    this.sidebarnavItems[0].submenu[3].submenu.push( {
      path: '/corporateTool/adminpermissions',
      title: 'Admin',
      icon: '',
      class: '',
      label: '',
      labelClass: '',
      extralink: false,
      submenu: []
    },)
  }


}
