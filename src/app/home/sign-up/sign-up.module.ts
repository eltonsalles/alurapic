import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up.component';
import { RouterModule } from '@angular/router';
import { VMessageModule } from '../../shared/v-message/v-message.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    VMessageModule
  ],
  declarations: [
    SignUpComponent
  ]
})
export class SignUpModule { }
