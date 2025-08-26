import {Component, inject} from '@angular/core';
import { NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from 'express';
import { HttpClient } from '@angular/common/http';
// '/lol/platform/v3/champion-rotations'
@Component({
    selector: 'app-root',
    imports: [RouterOutlet, CommonModule],
    templateUrl:'./app.landingPage.html',
    // styleUrls: ['./app.landingPage.css'],
    standalone: true,
})
export class LandingComponent {
     champions = [];
//  NEED TO CREATE A CHAMPION CARD TO MATCH WITH THE DATA. NEEDS TO LOOK LIKE 
// CHAMPION=CharacterData,
// INDEX = INDEX,
// KEY={RANDOMKEYGENERATE},
// DISPLAYFORM=DISPLAYFORM

http= inject(HttpClient);
championData:any;
json:any;
    ngOnInit(){
        this.http.get('https://ddragon.leagueoflegends.com/cdn/12.18.1/data/en_US/champion.json')
        .subscribe((data)=>{
            this.json=data;
            this.championData=Object.keys(this.json.data).map((x) => this.json.data[x].name);
            console.log(this.championData);
       
        })
        
    }
   
};

export default {LandingComponent}