import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Movie-challenge-fw';
  text = 'Hola mundo';

  constructor() {
    this.text = this.test("Adios"); 
  }

  test = (text: string): string => {
    return text;
  }
}
