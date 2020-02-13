import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormControl, Validators } from '@angular/forms';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-company-preferences',
  templateUrl: './company-preferences.component.html',
  styleUrls: ['./company-preferences.component.scss']
})
export class CompanyPreferencesComponent implements OnInit {
  PreferredAirlinesobject={};
  PreferredAirlinesarray=[];
  PreferredAirlinesarray2=[]
  selectairline=[
    {code:"sa",airlinename:"Select Airline Name"},
    {code:"AI",airlinename:"Air india"},
    {code:"IX",airlinename:"Air India Express"},
    {code:"QM",airlinename:"Air Malawi"},
    {code:"OB",airlinename:"Blue Air"},
    {code:"LH",airlinename:"Deutsche luthansa"},

  ];
  PreferredAirlines = new FormGroup({
    airline : new FormControl(this.selectairline[0].airlinename,Validators.required)
  });

  onsubmit(){
    this.PreferredAirlinesobject=this.PreferredAirlines.value;
    this.PreferredAirlinesarray.push(this.PreferredAirlinesobject);
    this.PreferredAirlines.patchValue({
      airline:this.selectairline[0].airlinename,
      
    })
    
    
  };
  onsubmit2(){
    this.PreferredAirlinesobject=this.PreferredAirlines.value;
    this.PreferredAirlinesarray2.push(this.PreferredAirlinesobject);
    this.PreferredAirlines.patchValue({
      airline:this.selectairline[0].airlinename,
      
    })
  }


  constructor() { }

  ngOnInit() {
  }

}
