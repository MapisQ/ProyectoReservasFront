import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardLoginGuard {
  router=inject(Router);

  constructor(private cookie:CookieService){}

  redirect(flag: boolean):any{
    if(!flag){
      this.router.navigate(['/Login']);
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const useCookie = this.cookie.check('token');
      this.redirect(useCookie);
      return useCookie;
  }
  
}
