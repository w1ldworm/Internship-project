import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserList } from '../models/user.model';
import { environment } from 'src/environments/environment';

const baseUrl: string = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private httpClient: HttpClient
  ) { }

  getUserList(filters: any): Observable<UserList> {
    let params = new HttpParams();
    
    for(let filter in filters) {
      if(filters[filter]) {
        params = params.append(filter, filters[filter]);
      }
    }

    return this.httpClient.get<UserList>(`${baseUrl}/api/users`, { params }).pipe(
      tap(
        data => {
          console.log('service: ', data);
          data.page = 10000
        }
      )
    );
  }

  loginUser(data:any): Observable<any> {
    return this.httpClient.post(`${baseUrl}/api/login`, data);
  }
}