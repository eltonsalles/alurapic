import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PhotoModel } from '../photo/photo.model';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  photos: PhotoModel[] = [];

  filter = '';

  userName = '';

  hasMore = true;

  currentPage = 1;

  constructor(private activatedRoute: ActivatedRoute, private photoService: PhotoService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.userName = params.username;
      this.photos = this.activatedRoute.snapshot.data.photos;
    });
  }

  load() {
    this.photoService
      .getPhotosByUserPaginate(this.userName, ++this.currentPage)
      .subscribe(photos => {
        this.filter = '';
        this.photos = this.photos.concat(photos);

        if (photos.length) {
          this.hasMore = false;
        }
      });
  }

}
