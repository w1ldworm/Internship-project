import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<Promise<any>>{

  constructor(
    private apiService: ApiService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
    return new Promise(
      (resolve, reject) => {
        console.log('Route:', route);
        console.log('State:', state)
        this.apiService.getUserProfile().subscribe(
          data => {
            resolve(data)
          },
          error => {
            reject();
          }
        )
      }
    )
  }
}
