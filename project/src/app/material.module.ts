import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule,MatToolbarModule,
	MatIconModule,MatInputModule,MatProgressSpinnerModule,
	MatTooltipModule,MatSelectModule,MatTableModule} from '@angular/material';



@NgModule({
imports: [
MatButtonModule,
 MatCheckboxModule,
 MatToolbarModule,
 MatIconModule,
 MatInputModule,
 MatProgressSpinnerModule,
 MatTooltipModule,
 MatSelectModule,MatTableModule
 ],

  exports: [
  MatButtonModule, 
  MatCheckboxModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatTooltipModule,
  MatSelectModule,
  MatTableModule
  ],
})

export class MaterialModule {

}