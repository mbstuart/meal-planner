import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

let onDeviceReady = () => {
  platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
};

if (environment.cordova) {
  document.addEventListener('deviceready', onDeviceReady, false);
} else {
  onDeviceReady();
}




  
