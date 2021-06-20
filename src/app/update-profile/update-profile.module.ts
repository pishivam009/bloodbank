import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateProfileComponent } from './update-profile.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UpdateProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [UpdateProfileComponent]
})
export class UpdateProfileModule { }
