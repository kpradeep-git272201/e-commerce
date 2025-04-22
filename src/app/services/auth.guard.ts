import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonDataService } from './common-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
  constructor(private service: CommonDataService, private router: Router) {}

  canActivate(): boolean {
    if (this.service.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}

