import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import {InsuranceExchangeUserData,InsuranceExchangeNewUser} from './insurance-exchange-if';


@Injectable({
  providedIn: 'root'
})
export class InsuranceExchangeServiceBaseService {

  constructor(private http:HttpClient ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  baseUrl:String= "app/insuranceExchange/user/login"
  postData:any;
  userloginResponse:InsuranceExchangeUserData;
  loginWithUserData(userData:InsuranceExchangeUserData):Observable<InsuranceExchangeUserData>{
      this.http.post("https://"+this.baseUrl,userData, this.httpOptions).subscribe(data => {
        this.postData = data;
      });
    return ; 
  }
}
