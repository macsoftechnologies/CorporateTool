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
  ExcludedAirlinesobject={}
  ExcludedAirlinesarray=[]
  preferredHotelObject={};
  preferredHotelarray=[]
  skipCountriesobject={}
  skipCountriesarray=[]
  
  selectairline=[
    {code:"sa",airlinename:"Select Airline Name"},
    {code:"AI",airlinename:"Air india"},
    {code:"IX",airlinename:"Air India Express"},
    {code:"QM",airlinename:"Air Malawi"},
    {code:"OB",airlinename:"Blue Air"},
    {code:"LH",airlinename:"Deutsche luthansa"},

  ];
  selectExcludedAirlines=[
    {code:"sa",airlinename:"Select Airline Name"},
    {code:"AI",airlinename:"Air india"},
    {code:"IX",airlinename:"Air India Express"},
    {code:"QM",airlinename:"Air Malawi"},
    {code:"OB",airlinename:"Blue Air"},
    {code:"LH",airlinename:"Deutsche luthansa"},

  ];
  selecthotel=[
    {hotelname:"Lee Merdian",location:"London UK"},
    {hotelname:"The Taj",location:"Bangalore India"},
    {hotelname:"Lee Merdian",location:"London uk"},
    {hotelname:"The Taj",location:"Vizag India"},

  ]
  selectskipCountries=[
    {countrycode:"AU",countryname:"Australia"},
    {countrycode:"CN",countryname:"China"},
    {countrycode:"ID",countryname:"Indonesia"},   
    {countrycode:"USA",countryname:"America"},

  ]
  PreferredAirlines = new FormGroup({
    airline : new FormControl(this.selectairline[0],Validators.required),
    
  });
  ExcludedAirlines= new FormGroup({
    airline : new FormControl(this.selectExcludedAirlines[0],Validators.required),
    
  });
  PreferredHotels = new FormGroup({
    hotelname : new FormControl(this.selecthotel[0],Validators.required),
    
  });
  skipCountries= new FormGroup({
    countryname : new FormControl(this.selectskipCountries[0],Validators.required),
    
  });

  onsubmit(){
    this.PreferredAirlinesobject=this.PreferredAirlines.value;
    console.log(this.PreferredAirlinesobject)
    this.PreferredAirlinesarray.push(this.PreferredAirlinesobject);
    this.PreferredAirlines.patchValue({
      airline:this.selectairline[0].airlinename,
      code:this.selectairline[0].code,
      
    })
    
    
  };
  onsubmit2(){
    this.ExcludedAirlinesobject=this.ExcludedAirlines.value;
    this.ExcludedAirlinesarray.push(this.ExcludedAirlinesobject);
    this.ExcludedAirlines.patchValue({
      airline:this.selectExcludedAirlines[0].airlinename,
      
    })
  }
  onsubmit3(){
    this.preferredHotelObject=this.PreferredHotels.value;
    this.preferredHotelarray.push(this.preferredHotelObject);
    this.PreferredHotels.patchValue({
      hotelname:this.selecthotel[0],
      
    })
  }
  onsubmit4(){
    this.skipCountriesobject=this.skipCountries.value;
    this.skipCountriesarray.push(this.skipCountriesobject);
    this.skipCountries.patchValue({
      countryname:this.selectskipCountries[0],
      
    })
  }


  constructor() { }

  ngOnInit() {
  }

}
