import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {InsuranceExchangeUserData,UserProfileData} from '../insurance-exchange-if';
import {InsuranceExchangeServiceBaseService} from '../services/insurance-exchange-service-base.service';

@Component({
  selector: 'app-insurance-exchnageheader',
  templateUrl: './insurance-exchnageheader.component.html'
})
export class InsuranceExchnageheaderComponent implements OnInit {

  constructor(private serviceBase: InsuranceExchangeServiceBaseService, private router :Router) {
   }

  ngOnInit(): void {
  }
  loginSucessfull:boolean = false;
  modelData:InsuranceExchangeUserData = {userName:'',password:'',userType:'1'};
  moreSignIninfo:Boolean = false;
  activeMember:String = 'User';
  closeResult = '';
  login(){
    let postData:any = ''; 
    this.serviceBase.setUserType(this.modelData.userType);
    this.serviceBase.loginWithUserData(this.modelData).subscribe(data  => {
      console.log(data);
      postData = data;
    });
    this.moreSignIninfo = false;
    this.router.navigate(['/dashboard']);
    this.loginSucessfull = true;
  }
  registerNow() {
    this.router.navigate(['/registernow']);
    this.moreSignIninfo = false;
  }

  showsignIn(){
    this.moreSignIninfo =  !this.moreSignIninfo;
    this.modelData.userName = '';
    this.modelData.password = '';
  }
  signOut(){
    this.router.navigate(['/']);
    this.loginSucessfull = false;
  }
  selectedMember(event){
    if(event.target["nodeName"] != "LI"){
      return;
    }
    this.activeMember = '';
    this.activeMember = event.target.innerText;
    this.modelData.userType = '1';
    this.modelData.userName = '';
    this.modelData.password = '';
    if(this.activeMember == 'Agent'){
      this.modelData.userType = '2';
    }
    
  }
  @HostListener('click', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if(event.target["innerText"] == "SIGN IN"){
      return;
    }
    let current = event.target;
    let insideMemenerData = false
    do {
      //console.log(current);
      if (current['className'] &&  current['className'].indexOf('member-info') > -1 ) {
        insideMemenerData =  true
      }
      current = current['parentNode'];
  } while ( current );
  if(!insideMemenerData){
    this.moreSignIninfo  = false;
  }
}

}
