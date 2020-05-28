import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from '../user/user.interface';
import { UserService } from '../user/user.service';

@Component({
  selector: 'ap-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  user$: Observable<UserInterface>;
  user: UserInterface;

  constructor(private userService: UserService) {
    this.user$ = this.userService.getUser();
    this.user$.subscribe(user => this.user = user);
  }

  ngOnInit() {
  }

}
