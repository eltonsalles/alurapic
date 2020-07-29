import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { PhotoModel } from '../photo/photo.model';
import { UserService } from '../../core/user/user.service';

@Directive({
  selector: '[ap-photoOwnerOnly]',
})
export class PhotoOwnerOnlyDirective implements OnInit {

  @Input() ownedPhoto: PhotoModel;

  constructor(
      private element: ElementRef<any>,
      private renderer: Renderer2,
      private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService
      .getUser()
      .subscribe(user => {
        if (!user || user.id !== this.ownedPhoto.userId) {
          this.renderer.setStyle(this.element.nativeElement, 'display', 'none');
        }
      });
  }
}
