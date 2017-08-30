import { HeroesComponent } from './heroes.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <nav>
    <a routerLink="/dashboard">Dashboard</a>
    <a routerLink="/heroes">Heroes</a>
  </nav>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title: string = "Tour of Heroes!";
}
