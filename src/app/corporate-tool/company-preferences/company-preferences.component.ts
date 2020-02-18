import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormControl, Validators } from '@angular/forms';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-company-preferences',
  templateUrl: './company-preferences.component.html',
  styleUrls: ['./company-preferences.component.scss']
})
export class CompanyPreferencesComponent implements OnInit {
  constructor( private toastr:ToastrService) { }
  PreferredAirlinesobject={};
  PreferredAirlinesarray=[];
  ExcludedAirlinesobject={}
  ExcludedAirlinesarray=[]
  preferredHotelObject={};
  preferredHotelarray=[]
  skipCountriesobject={}
  skipCountriesarray=[]
  
  selectairline=[
    {code:"AI",airlinename:"Air india"},
    {code:"IX",airlinename:"Air India Express"},
    {code:"QM",airlinename:"Air Malawi"},
    {code:"OB",airlinename:"Blue Air"},
    {code:"LH",airlinename:"Deutsche luthansa"},

  ];
  selectExcludedAirlines=[
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
    airline : new FormControl(null,Validators.required),
    
  });
  ExcludedAirlines= new FormGroup({
    airline : new FormControl(null,Validators.required),
    
  });
  PreferredHotels = new FormGroup({
    hotelname : new FormControl(null,Validators.required),
    
  });
  skipCountries= new FormGroup({
    countryname : new FormControl(null,Validators.required),
    
  });

  onsubmit(){
    this.PreferredAirlinesobject=this.PreferredAirlines.value;
    console.log(this.PreferredAirlinesobject)
    this.PreferredAirlinesarray.push(this.PreferredAirlinesobject);
    console.log(this.PreferredAirlinesarray)

    this.PreferredAirlines.patchValue({
      airline:null,
      code:null,
     })
    };

  onsubmit2(){
    this.ExcludedAirlinesobject=this.ExcludedAirlines.value;
    this.ExcludedAirlinesarray.push(this.ExcludedAirlinesobject);
    this.ExcludedAirlines.patchValue({
      airline:null,
      
    })
  }
  onsubmit3(){
    this.preferredHotelObject=this.PreferredHotels.value;
    this.preferredHotelarray.push(this.preferredHotelObject);
    this.PreferredHotels.patchValue({
      hotelname:null,
      
    })
  }
  onsubmit4(){
    this.skipCountriesobject=this.skipCountries.value;
    this.skipCountriesarray.push(this.skipCountriesobject);
    this.skipCountries.patchValue({ 
      countryname:null,
      
    })
  }

  delete(p){
    let index = this.PreferredAirlinesarray.indexOf(p);
    this.PreferredAirlinesarray.splice(index, 1);
  
    
  }
  delete2(p){
    let index = this.ExcludedAirlinesarray.indexOf(p);
    this.ExcludedAirlinesarray.splice(index, 1);

  }
  delete3(p){
    let index = this.preferredHotelarray.indexOf(p);
    this.preferredHotelarray.splice(index, 1);

  }
  delete4(p){
    let index = this.skipCountriesarray.indexOf(p);
    this.skipCountriesarray.splice(index, 1);

  }


  preferredairline(){
    this.toastr.success("preferred Airline List added")
  }
  excludedairline(){
    this.toastr.success("Excluded Airline List added")
  }
  hotel(){
    this.toastr.success("Hotelne List added")
  }
  country(){
    this.toastr.success("Country List added")
  }
  generalpreferrence(){
    this.toastr.success("General Preferrence has been Updated")
  }
  currency(){
    this.toastr.success("Currency Has Been Updated")
  }
  passportexpiredetilas(){
    this.toastr.success("Passport Expiry Details has Been updated")
  }
  approver(){
    this.toastr.success("approver updated") 
  
  }
  authentication(){
   this.toastr.success("authentication updated") 
  }



  

  ngOnInit() {
  }

}
