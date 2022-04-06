import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class HttpErorrsInterceptor implements HttpInterceptor {

  constructor(private router:Router) {}
//se apeleaza de fiecare data cand e facut un apel http
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse)=>{
        if(error.status === 500){
          alert("Server error");
        }
        if(error.status === 401){
          this.router.navigate(['/login']);
        }
        if(error.status === 403){
          alert("403");
        }
        return throwError(()=>error);
      })
    );
  }
}
