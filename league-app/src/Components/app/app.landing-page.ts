import {Component} from '@angular/core';
// import { NgModel } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ChampionState } from '../../state/championsNGRX/champion.reducer';
import { Store } from '@ngrx/store';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import  { inject } from '@angular/core';
import { loadChampions } from '../../state/championsNGRX/champion.actions';
// '/lol/platform/v3/champion-rotations'
@Component({
    selector: 'app-root',
    imports: [ CommonModule,],
    templateUrl:'./app.landing-page.html',
    // styleUrls: ['./app.landing-page.css'],
    standalone: true,
})
export class LandingComponent {
    constructor(private router: Router, private store: Store<{ champions: ChampionState }>) {}
    
    champions: any = null;
    landingComponent: string = '';
    imgPrefix = 'http://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/';

    http = inject(HttpClient);

    ngOnInit(): void {
        const url = 'https://ddragon.leagueoflegends.com/cdn/12.18.1/data/en_US/champion.json';
        this.http.get<any>(url).subscribe((apiData) => {
        const championData = apiData.data;
        const championIds = Object.keys(championData).map((key) => championData[key].id);
        this.champions = championIds;
        this.store.dispatch(loadChampions({ champions: this.champions }));
        });
    }
}

export default {LandingComponent}