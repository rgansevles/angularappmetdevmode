import {Injectable} from '@angular/core';
import {BlaService} from '../../src/app/bla.service';

@Injectable()
export class BlaDevService extends BlaService {

  sys() {
    return '**** development *****';
  }

}
