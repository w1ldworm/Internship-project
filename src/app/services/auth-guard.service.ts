import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) { }

  canActivate(): boolean {
    let canView: boolean = false;
    if (this.localStorageService.token) {
      canView = true;
    } else {
      alert('YOU ARE NOT LOGGED IN')
      this.router.navigate(['/'])
    }
    return canView;
  }
}
