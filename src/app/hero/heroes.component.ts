import { RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
/**
 * Created by ayk on 2017/5/9.
 */

import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { Router } from '@angular/router';
import { HeroService } from './hero.service';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  constructor(
    private router: Router,
    private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);

  }

  ngOnInit(): void {
    //this.getHeroes();
    this.getHeroes1();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name: string): void {
    name = name.trim();

    if (!name) {
      return;
    }
    this.heroService.createHero(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    this.heroService
      .deleteHero(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }

  /**Http Test**/
  private errorMessage

  getHeroes1() {
    let a = this.heroService.getHeroes1()
                            .subscribe(
                              heroes => this.heroes = heroes,
                              error => this.errorMessage = <any>error
                            );
  }


  addHero(name: string) {
    if (!name) { return; }
    this.heroService.create(name)
                    .subscribe(
                      hero => this.heroes.push(hero),
                      error => this.errorMessage = <any>error
                    );
  }
}
