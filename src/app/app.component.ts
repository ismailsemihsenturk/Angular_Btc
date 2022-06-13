import { Component } from '@angular/core';

//PROGRAMIN BAŞLADIĞI YER
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular_Btc';

  constructor() {
    console.log("çalış");

  }
}
