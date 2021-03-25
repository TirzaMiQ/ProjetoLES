import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
//import { LoginAutenticacaoService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    //private loginAutService: LoginAutenticacaoService,
    private router: Router
  ){}

  /* canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    //const authenticated =  this.loginAutService.isAuthenticated();

    if(authenticated){
      return true;
    }else{
      this.router.navigate(['/login'])
      return false;
    }

  } */

}
