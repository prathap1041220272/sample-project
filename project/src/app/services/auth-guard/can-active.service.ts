import { Injectable } from '@angular/core';
import { AuthGuardService } from './auth-guard.service'
import { CanActivate } from '@angular/router';

@Injectable()
export class CanActiveService {

  constructor(private userAuth:AuthGuardService) { }

  canActivate(){
  	return this.userAuth.isLoggedIn()
  }

}
