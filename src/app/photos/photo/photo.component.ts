import { Component, Input, OnInit } from '@angular/core';

const API = 'http://localhost:3000';

@Component({
  selector: 'ap-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  constructor() { }

  @Input() get url() { return this._url; }
  set url(value: string) {
    if (!value.startsWith('data')) {
      this._url = `${API}/imgs/${value}`;
    } else {
      this._url = value;
    }
  }
  private _url: string;

  @Input() description = '';

  ngOnInit() {
  }

}
