import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	public user;


  constructor(private userServ: UserAuthService,private router: Router,private route: ActivatedRoute) { 
      this.user = {};
  }
   
   
     verifyUser(){
     	 this.userServ.loginUser(this.user)
     	 .then((data:any) => {
         return this.router.navigate(['/books']);
     	 })
     	 .catch(err => {
     	 	console.log('login user error ', err)
     	 })
     }
  ngOnInit() {
  }

}
