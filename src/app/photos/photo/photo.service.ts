import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PhotoModel } from './photo.model';
import { PhotoCommentModel } from './photo.comment';

const API = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  getPhotosByUser(user: string) {
    return this.http.get<PhotoModel[]>(`${API}/${user}/photos`);
  }

  getPhotosByUserPaginate(user: string, page: number) {
    const params = new HttpParams().append('page', page.toString());

    return this.http.get<PhotoModel[]>(`${API}/${user}/photos`, { params });
  }

  upload(description: string, allowComments: boolean, file: File) {
    const formData = new FormData();
    formData.append('description', description);
    formData.append('allowComments', allowComments ? 'true' : 'false');
    formData.append('imageFile', file);

    return this.http.post(`${API}/photos/upload`, formData);
  }

  findById(photoId: number) {
    return this.http.get<PhotoModel>(`${API}/photos/${photoId}`);
  }

  getComments(photoId: number) {
    return this.http.get<PhotoCommentModel[]>(`${API}/photos/${photoId}/comments`);
  }

  addComment(photoId: number, commentText: string) {
    return this.http.post(`${API}/photos/${photoId}/comments`, { commentText });
  }

  removePhoto(photoId: number) {
    return this.http.delete(`${API}/photos/${photoId}`);
  }
}
