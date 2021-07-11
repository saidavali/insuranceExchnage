import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import {InsuranceExchangeUserData,InsuranceExchangeNewUser} from '../insurance-exchange-if';


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
      this.http.post("https://"+this.baseUrl,userData, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
    return ; 
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
