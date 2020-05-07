import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alurapic';

  photos = [
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR23EgR0Yd2nSkotp4Lb13svjgmXoGmGTQBqmWS7TpgTiCdo_GK&usqp=CAU',
      description: 'Midotiya'
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR23EgR0Yd2nSkotp4Lb13svjgmXoGmGTQBqmWS7TpgTiCdo_GK&usqp=CAU',
      description: 'Midotiya'
    },
  ];
}
