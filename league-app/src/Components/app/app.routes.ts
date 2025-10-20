import { Routes } from '@angular/router';
import { LandingComponent } from './app.landing-page';
import { ChampionCardComponent } from './RoutedCard/champion-card';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'championCards/:id', component: ChampionCardComponent }
];