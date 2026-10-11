import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Headercomponent } from './app/header/header.component';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

