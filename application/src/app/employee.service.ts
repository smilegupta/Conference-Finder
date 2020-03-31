import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';
import  data from './employee.json'


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
//  data: any = (data as any ).default;



  private _url = "https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences";


  constructor(private httpClient: HttpClient) { }

  //getEmployees():Observable<IEmployee[]> {
 //   console.log(this.http.get<IEmployee>);
    //console.log(data);
  //  return this.HttpClient.get<IEmployee[]>(this._url);
  //return this.httpClient.get.<IEmployee[]>(this._url)
  //}
  public getEmployees(){
    console.log('hii');

    return this.httpClient.get(this._url);
  }
}
