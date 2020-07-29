import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoService } from '../photo/photo.service';
import { Observable } from 'rxjs';
import { PhotoModel } from '../photo/photo.model';

@Component({
  templateUrl: './photo-details.component.html'
})
export class PhotoDetailsComponent implements OnInit {

  photo$: Observable<PhotoModel>;
  photoId: number;

  constructor(private route: ActivatedRoute, private photoService: PhotoService, private router: Router) { }

  ngOnInit() {
    this.photoId = this.route.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(this.photoId);
  }

  removePhoto() {
    this.photoService.removePhoto(this.photoId)
      .subscribe(() => this.router.navigate(['']));
  }
}
