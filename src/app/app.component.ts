import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photos/photo/photo.service';
import { PhotoModel } from './photos/photo/photo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  photos: PhotoModel[] = [];

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.photoService.getPhotosByUser('flavio').subscribe(photos => this.photos = photos);
  }
}
