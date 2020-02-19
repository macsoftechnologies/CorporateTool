import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-travelpolicy-a',
  templateUrl: './travelpolicy-a.component.html',
  styleUrls: ['./travelpolicy-a.component.scss']
})
export class TravelpolicyAComponent implements OnInit {

  constructor(private toastr:ToastrService) { }

  ngOnInit() {
  }
  create(){
    this.toastr.success("Policy Name has been Created")
  }
  update(){
    this.toastr.success("Updated Successfully")
  }

}
