import { Injectable } from '@angular/core';
import { enviroment } from "../../environments/enviroment";
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  enviroment= enviroment;
  
  constructor(private http: HttpClient) { 
  }
  complementHeader(): any {
    const httpHeaderInfo = {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
     };
     const headers = {headers: new HttpHeaders(httpHeaderInfo)};
     return headers;
  }
  getAllUser(){
    let url =  `${enviroment.backend}/getAllusers`
    return this.http.post(url, this.complementHeader());
  }
}
