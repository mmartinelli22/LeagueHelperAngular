import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './Components/app/app.component'
import { provideRouter } from '@angular/router';
import { routes } from './Components/app/app.routes';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { championReducer } from './state/championsNGRX/champion.reducer';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(StoreModule.forRoot({ champions: championReducer }))
  ],
}).catch(err => console.error(err));