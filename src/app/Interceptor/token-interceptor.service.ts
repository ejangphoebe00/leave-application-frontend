import { Injectable, Injector } from '@angular/core';
import {HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService  implements HttpInterceptor{
  constructor(
    private injector: Injector
  ) { }

  intercept(req : HttpRequest<any>, next:HttpHandler){
    let authservice = this.injector.get(ApiService)
    let tokenizedReq = req.clone({
      setHeaders:{
        Authorization: `Bearer ${authservice.getAccessToken()}`
      }
    })
    return next.handle(tokenizedReq)
  }
}
