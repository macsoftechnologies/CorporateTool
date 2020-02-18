import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-preferences',
  templateUrl: './manage-preferences.component.html',
  styleUrls: ['./manage-preferences.component.scss']
})
export class ManagePreferencesComponent implements OnInit {

  constructor(private toastr:ToastrService,private router:Router) { }

  ngOnInit() {
  }

  previous(){
    this.router.navigateByUrl("/corporateTool/managepersonaldetails")
    // this.toastr.success("Preference has been completed successfully")
  }
  next(){
    this.router.navigateByUrl("/corporateTool/manageemployment")
    
  }

}
