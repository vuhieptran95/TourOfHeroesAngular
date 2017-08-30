import { HeroService } from './hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from "./hero";

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit { 
    ngOnInit()  {
        this.heroService.getHeroes().then(heroes=>this.heroes = heroes.slice(1, 5));
    }
    /**
     *
     */
    constructor(private heroService: HeroService) {
        
    }
    heroes: Hero[];

    
}