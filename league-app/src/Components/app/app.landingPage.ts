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
    imports: [ CommonModule],
    templateUrl:'./app.landingPage.html',
    // styleUrls: ['./app.landingPage.css'],
    standalone: true,
})
export class LandingComponent {
    //ACTIONS FOR NGRX
    //LOAD ALL CHAMPIONS
    //CLICK ON CHAMPION TO GET MORE INFO
    constructor(){}
    champions: any = null;
    landingComponent: string = '';
    imgPrefix = 'http://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/';

    http = inject(HttpClient);

    ngOnInit(): void {
        // this.store.select('champions').subscribe((data) => {
        //     console.log('from store', data);
        //     this.champions = data;
        // });

        const url = 'https://ddragon.leagueoflegends.com/cdn/12.18.1/data/en_US/champion.json';
        this.http.get<any>(url).subscribe((apiData) => {
            this.champions = apiData.data;
            console.log('champions', this.champions);
            this.champions = Object.keys(this.champions).map((x) => this.champions[x].title);
            this.landingComponent = `${this.champions}`;
            console.log('from api', apiData.data);
        });
        loadChampions({ champions: this.champions });
    }
}
   

export default {LandingComponent}