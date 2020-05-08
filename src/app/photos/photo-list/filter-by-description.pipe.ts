import { Pipe, PipeTransform } from '@angular/core';
import { PhotoModel } from '../photo/photo.model';

@Pipe({
  name: 'filterByDescription'
})
export class FilterByDescriptionPipe implements PipeTransform {

  transform(photos: PhotoModel[], description: string): PhotoModel[] {
    const value = description.trim().toLowerCase();

    if (value) {
      return photos.filter(photo => photo.description.toLowerCase().includes(value));
    }

    return photos;
  }

}
