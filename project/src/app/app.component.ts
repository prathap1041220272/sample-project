import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from './services/auth-guard/auth-guard.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // public logout:boolean = false;
  // public element:any;
  public isLoggedIn = false;

constructor(
	private userAuth:AuthGuardService,
	private router: Router
	) { 
	router.events.subscribe(event => {
		if (event.constructor.name === 'ActivationEnd') {
			this.isLoggedIn = this.userAuth.isLoggedIn();
		}
	})
}
  // signout(){
  // 	this.logout=!this.logout;

  // 	if (this.logout) {
  // 		return this.element = this.userAuth.isLoggedIn();
  // 	}
  // }
}
