import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { ChampionState } from '../../../state/championsNGRX/champion.reducer'
import { findChampion } from '../../../state/championsNGRX/champion.actions';

@Component({
  selector: 'app-champion-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.champion-card.html',
})
export class ChampionCardComponent {
  champName = '';
  champTitle = '';
  champText = '';
  imgPrefix = 'http://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/';
  http = inject(HttpClient);

  constructor(private route: ActivatedRoute, private store: Store<{ champions: ChampionState }>) {}

  ngOnInit(): void {
    const championId = this.route.snapshot.paramMap.get('id');
    if (!championId) return;

    this.store.dispatch(findChampion({ championId }));

    const url = `https://ddragon.leagueoflegends.com/cdn/12.18.1/data/en_US/champion/${championId}.json`;
    this.http.get<any>(url).subscribe((apiData) => {
      const championData = apiData.data[championId];
      this.champName = championData.name;
      this.champTitle = championData.title;
      this.champText = championData.blurb;
    });
  }
}