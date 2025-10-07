import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './Components/app/app.config';
import { LandingComponent } from './Components/app/app.landing-page';

bootstrapApplication(LandingComponent, appConfig)
  .catch((err) => console.error(err));
