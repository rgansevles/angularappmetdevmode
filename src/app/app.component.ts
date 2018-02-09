import { Component } from '@angular/core';
import {BlaService} from './bla.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(blaService: BlaService) {
    this.title = blaService.bla();
  }
}
