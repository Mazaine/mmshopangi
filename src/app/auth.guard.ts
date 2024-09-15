import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { SellerService } from './services/seller.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate  {
  constructor(private sellerService:SellerService){}
  canActivate(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean | UrlTree> |  Promise<boolean | UrlTree> | boolean | UrlTree {

    if(localStorage.getItem('seller')){
      return false

    }
 
    return this.sellerService.isSellerLoggedIn;
  }

 }
