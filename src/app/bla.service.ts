import {Injectable} from '@angular/core';

@Injectable()
export class BlaService {

  constructor() {
  }

  sys() {
    return 'production';
  }

  bla() {
    return 'Bla for ' + this.sys();
  }

}
