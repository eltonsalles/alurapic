import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../photo/photo.service';
import { Observable } from 'rxjs';
import { PhotoModel } from '../photo/photo.model';

@Component({
  templateUrl: './photo-details.component.html'
})
export class PhotoDetailsComponent implements OnInit {

  photo$: Observable<PhotoModel>;

  constructor(private route: ActivatedRoute, private photoService: PhotoService) { }

  ngOnInit() {
    this.photo$ = this.photoService.findById(this.route.snapshot.params.photoId);
  }

}
