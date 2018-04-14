import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user;

  constructor(private userServ: UserAuthService) {
    this.user = {};
  }
   
   
   newUser() {
     // console.log(this.user);
    if (this.user.password === this.user.cnfPassword) {

      this.userServ.createUser(this.user)
      .then((data:any) => {
        localStorage.setItem('token', data);
           
       })
       .catch(err => {
        console.log('signup error ', err)
       })
    } else {
      window.alert('password must be same')
    }
  }

  ngOnInit() {
  }

}
