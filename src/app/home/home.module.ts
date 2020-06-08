import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SignInModule } from './sign-in/sign-in.module';
import { SignUpModule } from './sign-up/sign-up.module';
import { HomeComponent } from './home.component';
import { SignUpService } from './sign-up/sign-up.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SignInModule,
    SignUpModule,
  ],
  declarations: [HomeComponent],
  providers: [SignUpService]
})
export class HomeModule { }
