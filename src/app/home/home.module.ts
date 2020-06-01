import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInModule } from './sign-in/sign-in.module';
import { SignUpModule } from './sign-up/sign-up.module';

@NgModule({
  imports: [
    CommonModule,
    SignInModule,
    SignUpModule
  ],
  declarations: []
})
export class HomeModule { }
