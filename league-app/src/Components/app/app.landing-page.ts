import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { ChampionState } from '../../state/championsNGRX/champion.reducer';
import { loadChampions, findChampion, loadChampionDetails } from '../../state/championsNGRX/champion.actions';
import { toggleRoleFilter, resetRoleFilter } from '../../state/championsNGRX/champion.actions';
import { selectFilteredChampions } from '../../state/championsNGRX/champion.selectors';

@Component({
   selector: 'app-root',
    imports: [ CommonModule,],
    templateUrl:'./app.landing-page.html',
    styleUrls: ['./app.landing-page.css'],
    standalone: true,
})
export class LandingComponent {
  champions: any = [];
  championDetails: any = [];
  imgPrefix = 'http://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/';
  http = inject(HttpClient);
  roles = ["Fighter", "Tank", "Mage", "Assassin", "Marksman", "Support"];
  filteredChampions$ = this.store.select(selectFilteredChampions);
  constructor(private router: Router, private store: Store<{ champions: ChampionState}>) {}
  ngOnInit(): void {
    const url = 'https://ddragon.leagueoflegends.com/cdn/12.18.1/data/en_US/champion.json';
    this.http.get<any>(url).subscribe((apiData) => {
      const championData = apiData.data;
      const championIds = Object.keys(championData).map(key => championData[key].id);
      this.champions = championIds;
      this.store.dispatch(loadChampions({ champions: this.champions }));
    this.store.dispatch(loadChampionDetails({ championDetails: Object.values(championData) }))
  });
  }

  onChampionClick(championId: string) {
    this.store.dispatch(findChampion({ championId }));
    this.router.navigate(['/championCards', championId]);
  }
toggleRole(tag: string) {
  this.store.dispatch(toggleRoleFilter({ role:tag }));
}
 resetFilter() {
    this.store.dispatch(resetRoleFilter());
  }
}