import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


const apiURT: String = 'http://localhost:4446/auth';

@Injectable()
export class UserAuthService {

  constructor(private http:HttpClient) { }

createUser(user) {
   	// console.log(user);
    return this.http
      .post(apiURT + '/signup', user)
      .toPromise()
      .then((data: any) => {
        return data
      })
      .catch(err => {
        console.log('Signup err-')
      })
  }

  loginUser(user){
  	return this.http
  	.post(apiURT + '/login',user)
  	.toPromise()
  	.then((data:any)=>{
  		localStorage.setItem('token',data.token)
  		return data
  	})
  	.catch(err =>{
  		console.log('login error-',err)
  	})
  }
}
