import { Injectable } from '@angular/core';

@Injectable()
export class BlaService {

  constructor() { }
  
  bla() {
    return 'Bla for production';
  }

}
