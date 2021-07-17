import { Component,ViewChild, OnInit } from '@angular/core';
import {AgentDeatils} from '../insurance-exchange-if';


@Component({
  selector: 'app-insurance-exchange-dashboard',
  templateUrl: './insurance-exchange-dashboard.component.html'
})
export class InsuranceExchangeDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  headers:string[]= ["SNO","Agent FirstName","Agent LastName","Mobile NO","Schedule a call"]
  agentData:AgentDeatils[]= [{
    agenetFirstName :"Johon",
    agentlastname:"walt",
    agentMobileNo:125481588 
  },{
    agenetFirstName :"Michel",
    agentlastname:"Steve",
    agentMobileNo:12548451188 
  },{
    agenetFirstName :"Rogere",
    agentlastname:"faf",
    agentMobileNo:156515 
  },
  {
    agenetFirstName :"Cleark",
    agentlastname:"Pointing",
    agentMobileNo:156515 
  }];
  makeaAppoitment(agentData:AgentDeatils){
    console.log(agentData);
  }
 
}
