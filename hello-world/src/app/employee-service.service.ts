import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  _url:string = '/hello-world/src/app/employee.json';

  constructor(private httpClient: HttpClient) { }

  getEmployee(): Observable<Employee[]> {
    return  this.httpClient.get<Employee[]>(this._url)
  ;
  }
}
