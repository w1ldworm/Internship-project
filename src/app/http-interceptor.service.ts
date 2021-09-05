import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LocalStorageService } from './services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.localStorageService.token;
    
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Token ${token}`,
          'Accept-Language': 'fa-IR'
        }
      });
    }


    return next.handle(req).pipe(
      tap(
        event => {
          console.log(event)
        },
        error => {
          alert(error.error.error)
        }
      )
    );
  }
}
