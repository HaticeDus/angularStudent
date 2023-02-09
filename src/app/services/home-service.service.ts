import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Student } from '../model/Student';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  
  apiurl = environment.url
  
  constructor(private httpClient: HttpClient) { }
  GetStudent(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.apiurl + 'api/Student/StudentGet');
  }

  PostStudent(student: any): Observable<any> {
    return this.httpClient.post(this.apiurl + 'api/Student/StudentPost', student);
  }

  DeleteStudent(id: number): Observable<any> {
    return this.httpClient.delete(this.apiurl + 'api/Student/StudentDelete?id=' + id);
  }

  PutStudent(id: number, student: any): Observable<any> {
    return this.httpClient.put(this.apiurl + 'api/Student/StudentPut?id=' + id, student);
  }

}
