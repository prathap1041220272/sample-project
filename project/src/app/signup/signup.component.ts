import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user;

  constructor(private userServ: UserAuthService,
    private _location: Location,
    private router: Router,
    private route: ActivatedRoute) {
    this.user = {};

  }
   
   
   newUser() {
     // console.log(this.user);
    if (this.user.password === this.user.cnfPassword) {

      this.userServ.createUser(this.user)
      .then((data:any) => {
        localStorage.setItem('token', data);
           return this.router.navigate(['/login']);
       })
      
       .catch(err => {
        console.log('signup error ', err)
       })
    } else {
      confirm(`password Mismatch password should match`)
    }
  }

backClicked() {
        return this.router.navigate(['/login']);
    }
    
  ngOnInit() {
  }

}
