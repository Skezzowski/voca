import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import 'hammerjs';

if (environment.production) {
  enableProdMode();
}

const fs = (window as any).fs;
fs.closeSync(fs.openSync('./vocabularies.json', 'a'))

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
