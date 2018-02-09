import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from '../../src/app/app.component';
import {BlaService} from '../../src/app/bla.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BlaService],
  bootstrap: [AppComponent]
})
export class AppDevModule {
}
