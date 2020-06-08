import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lowerCaseValidator } from '../../shared/validators/lowercase.validator';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { NewUser } from './new-user';
import { SignUpService } from './sign-up.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  @ViewChild('inputEmail') inputEmail: ElementRef<HTMLInputElement>;

  signUpForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorService,
    private signUpService: SignUpService,
    private router: Router
  ) { }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      'email': ['', [
        Validators.required,
        Validators.email
      ]],
      'fullName': ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(40)
      ]],
      'userName': ['', [
        Validators.required,
        lowerCaseValidator,
        Validators.minLength(2),
        Validators.maxLength(30)
      ], this.userNotTakenValidatorService.checkUserNameTaken()],
      'password': ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(14)
      ]]
    });

    this.inputEmail.nativeElement.focus();
  }

  signUp() {
    const newUser = this.signUpForm.getRawValue() as NewUser;
    this.signUpService.signUp(newUser)
      .subscribe(
        () => this.router.navigate(['']),
        error => console.log(error)
      );
  }

}
