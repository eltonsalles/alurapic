import { Component, OnInit } from '@angular/core';
import { PhotoModel } from '../photo/photo.model';
import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  photos: PhotoModel[] = [];

  constructor(
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const userName = this.activatedRoute.snapshot.params.userName;

    this.photoService.getPhotosByUser(userName).subscribe(photos => this.photos = photos);
  }

}