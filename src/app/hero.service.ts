import { HEROES } from './mock-heroes';
import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {

  getHeroes(){
    return Promise.resolve(HEROES);
  }

  getHero(id: number){
    return this.getHeroes().then(heroes=>heroes.find(hero=>hero.id==id));
  }

  getHeroesSync(){
    return HEROES;
  }
}
