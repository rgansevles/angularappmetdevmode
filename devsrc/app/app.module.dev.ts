import {NgModule} from '@angular/core';

import {BlaService} from '../../src/app/bla.service';
import {BlaDevService} from './bla.service.dev';
import {AppModule} from '../../src/app/app.module';
import {AppComponent} from '../../src/app/app.component';


@NgModule({
  declarations: [],
  imports: [
    AppModule
  ],
  providers: [{provide: BlaService, useClass: BlaDevService}],
  bootstrap: [AppComponent]
})
export class AppDevModule {
}
