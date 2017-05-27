/**
 * Created by Somiar on 2017/5/8.
 */

import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

//import { HEROES } from './hero.data';
import { Hero, HeroTaxReturn } from './hero';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroes';

  constructor(private http: Http) {}

  getHeroes(): Promise<Hero[]> {
    //return Promise.resolve(HEROES);
    return this.http.get(this.heroesUrl).toPromise()
      .then(response => response.json().data as Hero[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.log('error:', error);
    return Promise.reject(error.message || error );
  }

  getHero(id: number): Promise<Hero> {
    //return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Hero)
      .catch(this.handleError);
  }

  private headers = new Headers({'Content-Type': 'application/json'});

  update(hero: Hero) {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http.put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise().then(() => hero).catch(this.handleError);
  }

  createHero(name: string): Promise<Hero> {
    return this.http.post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers}).toPromise()
      .then(res => res.json().data as Hero)
      .catch(this.handleError);
  }

  deleteHero(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise().then(() => null).catch(this.handleError);
  }


/**hero tax test**/

  taxheroes: Hero[] = [
    { id: 1, name: 'RubberMan'},
    { id: 2, name: 'Tornado'}
  ];

  heroTaxReturns: HeroTaxReturn[] = [
    new HeroTaxReturn(this.taxheroes[0], 2000),
    new HeroTaxReturn(this.taxheroes[1], 3000)
  ]

  getTaxHeroes(): Observable<Hero[]> {
    return new Observable<Hero[]>((observer: Observer<Hero[]>) => {
      observer.next(this.taxheroes);
      observer.complete();
    })
  }

  getTaxHeroReturn(hero: Hero): Observable<HeroTaxReturn> {
    /*return new Observable<HeroTaxReturn>((observer: Observer<HeroTaxReturn>) => {
      const htr = this.heroTaxReturns.find(t => t.hero.id === hero.id);
      observer.next(htr || new HeroTaxReturn(hero, 0));
      observer.complete();
    })*/
    return Observable.create((observer: Observer<HeroTaxReturn>) => {
      const htr = this.heroTaxReturns.find(t => t.hero.id === hero.id);
      observer.next(htr || new HeroTaxReturn(hero, 0));
      observer.complete();
    });
  }

  saveTaxHeroReturn(heroTaxReturn: HeroTaxReturn): Observable<HeroTaxReturn> {
    return Observable.create((observer: Observer<HeroTaxReturn>) => {
      const htr = this.heroTaxReturns.find(t => t.hero.id === heroTaxReturn.hero.id);
      if (htr) {
        heroTaxReturn = Object.assign(htr, heroTaxReturn);
      } else {
        this.heroTaxReturns.push(heroTaxReturn);
      }
      observer.next(heroTaxReturn);
      observer.complete();
    })
  }
}
