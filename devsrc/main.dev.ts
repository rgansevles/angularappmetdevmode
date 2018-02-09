import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppDevModule} from './app/app.module.dev';

platformBrowserDynamic().bootstrapModule(AppDevModule)
  .catch(err => console.log(err));
