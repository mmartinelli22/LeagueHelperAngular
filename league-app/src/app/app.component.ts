import {Component} from '@angular/core';
import { NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from 'express';
'/lol/platform/v3/champion-rotations'
@Component({
    selector: 'app-root',
    imports: [RouterOutlet, CommonModule],
    templateUrl:'./app.component.html',
})
export class AppComponent {
    title = 'Welcome to League Helper!';
}

export default {AppComponent}