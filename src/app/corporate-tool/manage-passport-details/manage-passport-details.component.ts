import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-passport-details',
  templateUrl: './manage-passport-details.component.html',
  styleUrls: ['./manage-passport-details.component.scss']
})
export class ManagePassportDetailsComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {
  }

  previous(){
    this.router.navigateByUrl("/corporateTool/manageemployment")
    // this.toastr.success("Preference has been completed successfully")
  }
  next(){
    this.router.navigateByUrl("/corporateTool/manageloyaltymemberships")
    
  }

}
