import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule,MatToolbarModule,
	MatIconModule,MatInputModule,MatProgressSpinnerModule,
	MatTooltipModule,MatSelectModule} from '@angular/material';



@NgModule({
imports: [
MatButtonModule,
 MatCheckboxModule,
 MatToolbarModule,
 MatIconModule,
 MatInputModule,
 MatProgressSpinnerModule,
 MatTooltipModule,
 MatSelectModule
 ],

  exports: [
  MatButtonModule, 
  MatCheckboxModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatTooltipModule,
  MatSelectModule
  ],
})

export class MaterialModule {

}