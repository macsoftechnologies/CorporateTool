import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-company-sub',
  templateUrl: './manage-company-sub.component.html',
  styleUrls: ['./manage-company-sub.component.scss']
})
export class ManageCompanySubComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {
  }
  url :any;
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        
        this.url = reader.result;//event.target.result;
      }
    }
  }

}
