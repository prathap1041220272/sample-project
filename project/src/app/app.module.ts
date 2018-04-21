import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


import { UserAuthService } from './services/user-auth.service';
import { BooksDataService } from './services/books-data.service';
import { CanActiveService } from './services/auth-guard/can-active.service';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';
import { AppRoutingModule } from './/app-routing.module';
import { NewComponentComponent } from './new-component/new-component.component';
import { PaginationService } from './services/pagination/pagination.service'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NewComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [UserAuthService,BooksDataService,AuthGuardService,CanActiveService,PaginationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
