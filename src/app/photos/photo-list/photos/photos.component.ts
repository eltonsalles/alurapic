import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PhotoModel } from '../../photo/photo.model';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {

  @Input() photos: PhotoModel[] = [];

  rows: any[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.photos) {
      this.rows = this.groupColumns(this.photos);
    }
  }

  groupColumns(photos: PhotoModel[]) {
    const rows = [];

    for (let i = 0; i < photos.length; i += 3) {
      rows.push(photos.slice(i, i + 3));
    }

    return rows;
  }

}
