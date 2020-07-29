import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs/operators';

import { PhotoService } from '../../photo/photo.service';
import { PhotoCommentModel } from '../../photo/photo.comment';

@Component({
  selector: 'ap-photo-comments',
  templateUrl: 'photo-comments.component.html',
  styleUrls: ['photo-comments.component.css']
})
export class PhotoCommentsComponent implements OnInit {

  @Input() photoId: number;

  commentForm: FormGroup;

  comments$: Observable<PhotoCommentModel[]>;

  constructor(private photoService: PhotoService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.comments$ = this.photoService.getComments(this.photoId);

    this.commentForm = this.formBuilder.group({
      comment: ['', Validators.maxLength(300)]
    });
  }

  save() {
    const commentText = this.commentForm.get('comment').value;
    this.comments$ = this.photoService.addComment(this.photoId, commentText)
      .pipe(switchMap(() => this.photoService.getComments(this.photoId)))
      .pipe(tap(() => {
        this.commentForm.reset();
      }));
  }
}
