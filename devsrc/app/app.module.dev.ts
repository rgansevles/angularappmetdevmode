import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from '../../src/app/app.component';
import {BlaService} from '../../src/app/bla.service';
import {BlaDevService} from './bla.service.dev';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{provide: BlaService, useClass: BlaDevService}],
  bootstrap: [AppComponent]
})
export class AppDevModule {
}
