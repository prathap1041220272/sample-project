import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuardService {

  constructor() { }
 logout(){
  	return localStorage.removeItem('token')
  }

  loginUser(){
  	return localStorage.getItem('token')
  }
  isLoggedIn(){
     return this.loginUser()!== null
  } 
}
