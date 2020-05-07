import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PhotoModel } from './photo.model';

const API = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  getPhotosByUser(user: string) {
    return this.http.get<PhotoModel[]>(`${API}/${user}/photos`);
  }
}
