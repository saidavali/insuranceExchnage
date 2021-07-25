import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, } from '@angular/common/http';
import { Observable, of, throwError, } from 'rxjs';
import { catchError,tap,finalize  } from 'rxjs/operators';

import {InsuranceExchangeUserData} from '../insurance-exchange-if';


@Injectable({
  providedIn: 'root'
})
export class InsuranceExchangeServiceBaseService {

  constructor(private http:HttpClient ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  baseUrl:string= "app/insuranceExchange/user/login"
  agentDetaildJson = "/assets/json/agentInfo.json";
  postData:any = 'failed';
  userloginResponse:InsuranceExchangeUserData;
  loginWithUserData(userData:InsuranceExchangeUserData):Observable<any>{
    let userresponse:any = ''
       return this.http.post(this.baseUrl,userData, this.httpOptions);
      // .pipe(
      //   tap( // Log the result or error
      //     data => {userresponse = data;
      //       console.log("User Response");
      //     },
      //     error => {
      //       //this.handleError(error);
      //       return this.postData ;
      //     }
      //   ),
      //   finalize(() =>{
      //     Observable.of(this.postData);
      //   })
      // );
  //  return ; 
  }
  getAgentDetails():Observable<any>{
    return this.http.get(this.agentDetaildJson)
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.log('An error occurred:'+ error.status);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.log(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
