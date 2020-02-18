import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-employment',
  templateUrl: './manage-employment.component.html',
  styleUrls: ['./manage-employment.component.scss']
})
export class ManageEmploymentComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {
  }

  previous(){
    this.router.navigateByUrl("/corporateTool/managepreferences")
    // this.toastr.success("Preference has been completed successfully")
  }
  next(){
    this.router.navigateByUrl("/corporateTool/managepassportdetails")
    
  }

}
