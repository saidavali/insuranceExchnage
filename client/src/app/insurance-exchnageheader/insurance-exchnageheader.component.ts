import { Component, OnInit, HostListener } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-insurance-exchnageheader',
  templateUrl: './insurance-exchnageheader.component.html'
})
export class InsuranceExchnageheaderComponent implements OnInit {

  constructor(private modalService: NgbModal) {
   }

  ngOnInit(): void {
  }
  moreSignIninfo:Boolean = false;
  activeMember:String = 'Member';
  closeResult = '';
  model = {'userName':'','password':''};
  newUser = {'firstName':'','lastName':'','dob':'','mobileNo':'','email':''}
  login(){
    console.log("model");
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
      console.log(current);
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
