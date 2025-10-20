import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { ChampionState } from '../../state/championsNGRX/champion.reducer';
import { loadChampions, findChampion } from '../../state/championsNGRX/champion.actions';

@Component({
   selector: 'app-root',
    imports: [ CommonModule,],
    templateUrl:'./app.landing-page.html',
    // styleUrls: ['./app.landing-page.css'],
    standalone: true,
})
export class LandingComponent {
  champions: any = [];
  imgPrefix = 'http://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/';
  http = inject(HttpClient);

  constructor(private router: Router, private store: Store<{ champions: ChampionState }>) {}

  ngOnInit(): void {
    const url = 'https://ddragon.leagueoflegends.com/cdn/12.18.1/data/en_US/champion.json';
    this.http.get<any>(url).subscribe((apiData) => {
      const championData = apiData.data;
      const championIds = Object.keys(championData).map(key => championData[key].id);
      this.champions = championIds;
      this.store.dispatch(loadChampions({ champions: this.champions }));
    });
  }

  onChampionClick(championId: string) {
    this.store.dispatch(findChampion({ championId }));
    this.router.navigate(['/championCards', championId]);
  }
}