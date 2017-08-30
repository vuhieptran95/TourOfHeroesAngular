import { HeroService } from './hero.service';
import { Component, OnInit } from '@angular/core';
import {Hero} from './hero';
import { Router } from "@angular/router";

@Component({
  selector: 'my-heroes',
  template: `
  <h2>My Heroes</h2>
  <ul class="heroes">
    <li *ngFor="let hero of heroes" [class.selected]="hero===selectedHero" (click)="onSelect(hero)">
      <span class="badge">{{hero.id}}</span> {{hero.name}}  
    </li>
  </ul>
  <div *ngIf="selectedHero">
    <h2>
      {{selectedHero.name | uppercase}} is my hero
    </h2>
    <button (click)="gotoDetail()">View Details</button>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class HeroesComponent implements OnInit {
  /**
   *
   */
  constructor(private router: Router, private heroService: HeroService) {
    // this.heroes = heroService.getHeroes();
  }
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  getHeroes(){
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  getHeroesSync(){
    this.heroes = this.heroService.getHeroesSync();
  }

  onSelect(hero):void{
    this.selectedHero = hero;
  }
  ngOnInit(){
    this.getHeroesSync();
  }

  gotoDetail(){
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
