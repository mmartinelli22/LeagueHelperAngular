import { bootstrapApplication } from '@angular/platform-browser';
import { LandingComponent } from './Components/app/app.landingPage';
import { config } from './Components/app/app.config.server';

const bootstrap = () => bootstrapApplication(LandingComponent, config);

export default bootstrap;
