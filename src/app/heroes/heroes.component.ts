import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heros';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes:  Hero[];

  constructor(private heroService: HeroService) { }

  // hero: Hero = {
  //   id: 1,
  //   name: 'WindStorm',
  // };

  // heroes = HEROES;


  ngOnInit() {
    this.getHeroes();
  }
  // onselect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}

