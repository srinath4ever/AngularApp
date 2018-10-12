import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from '../interfaces/iemployee';
import { Observable } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url = "../assets/data/employeeData.json";

  constructor(private http: HttpClient) {
  }

  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this.url)
                    .catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || 'Server Error'); //if error.message is null then return Server Error
  }
  
}
