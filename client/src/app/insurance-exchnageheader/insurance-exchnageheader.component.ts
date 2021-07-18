import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {InsuranceExchangeUserData,UserProfileData} from '../insurance-exchange-if';
import {InsuranceExchangeServiceBaseService} from '../services/insurance-exchange-service-base.service';

@Component({
  selector: 'app-insurance-exchnageheader',
  templateUrl: './insurance-exchnageheader.component.html'
})
export class InsuranceExchnageheaderComponent implements OnInit {

  constructor(private modalService: NgbModal, private serviceBase: InsuranceExchangeServiceBaseService, private router :Router) {
   }

  ngOnInit(): void {
  }
  loginSucessfull:boolean = false;
  modelData:InsuranceExchangeUserData = {userName:'',password:'',userType:'1'};
  moreSignIninfo:Boolean = false;
  activeMember:String = 'Member';
  closeResult = '';
  newUser:UserProfileData = {firstName:'',lastName:'',mobileNo:12,image:'',dob:new Date(),email:'',lob:false,gender:false,address:'',addressType:false};
  login(){
    console.log("model");
    let postData:any = ''; 
    this.serviceBase.loginWithUserData(this.modelData).subscribe(data  => {
      console.log(data);
      postData = data;
    });
    this.moreSignIninfo = false;
    this.router.navigate(['/dashboard']);
    this.loginSucessfull = true;
  }
  register(){
    console.log("register");
  }
  registerNow(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  showsignIn(){
    this.moreSignIninfo =  !this.moreSignIninfo;
    this.modelData.userName = '';
    this.modelData.password = '';
  }
  selectedMember(event){
    if(event.target["nodeName"] != "LI"){
      return;
    }
    this.activeMember = '';
    this.activeMember = event.target.innerText;
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
