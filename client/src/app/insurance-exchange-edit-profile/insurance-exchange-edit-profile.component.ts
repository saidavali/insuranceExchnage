import { Component, OnInit } from '@angular/core';
import {addressDetailsType,UserProfileData} from '../insurance-exchange-if';

@Component({
  selector: 'app-insurance-exchange-edit-profile',
  templateUrl: './insurance-exchange-edit-profile.component.html'
})
export class InsuranceExchangeEditProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  profileData:UserProfileData = {firstName:'',lastName:'',mobileNo:12,image:'',dob:new Date(),email:'',lob:false,gender:false,address:'',addressType:false};
  userName:string = '';
  addressDeatils:addressDetailsType ={city:'',county:'',zip:12}
}
