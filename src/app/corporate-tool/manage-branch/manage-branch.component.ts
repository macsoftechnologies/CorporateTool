import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manage-branch',
  templateUrl: './manage-branch.component.html',
  styleUrls: ['./manage-branch.component.scss'],
  providers:[ToastrService]
})
export class ManageBranchComponent implements OnInit {

  constructor(private toastr : ToastrService) { }

  ngOnInit() {
  }
  showToaster() {
    this.toastr.success("New Branch Created");
  }

}
