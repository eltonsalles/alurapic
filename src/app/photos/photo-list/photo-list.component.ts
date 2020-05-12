import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { PhotoModel } from '../photo/photo.model';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {
  photos: PhotoModel[] = [];

  filter = '';

  debounce: Subject<string> = new Subject<string>();

  userName = '';

  hasMore = true;

  currentPage = 1;

  constructor(private activatedRoute: ActivatedRoute, private photoService: PhotoService) {}

  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params.userName;

    this.photos = this.activatedRoute.snapshot.data.photos;
    this.debounce
      .pipe(
        debounceTime(300)
      )
      .subscribe(filter => this.filter = filter);
  }

  ngOnDestroy() {
    this.debounce.unsubscribe();
  }

  load() {
    this.photoService
      .getPhotosByUserPaginate(this.userName, ++this.currentPage)
      .subscribe(photos => {
        this.photos = this.photos.concat(photos);

        if (photos.length) {
          this.hasMore = false;
        }
      });
  }

}
