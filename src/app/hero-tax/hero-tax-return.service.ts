import { HeroService } from './../hero/hero.service';
import { Injectable } from '@angular/core';
import { HeroTaxReturn, Hero } from '../hero/hero';

@Injectable()
export class HeroTaxReturnService {
    private currentTaxReturn: HeroTaxReturn;
    private originalTaxReturn: HeroTaxReturn;

    constructor(private heroService: HeroService){}
    
    set taxReturn(taxInfo: HeroTaxReturn) {
        this.originalTaxReturn = taxInfo;
        this.currentTaxReturn = taxInfo.clone();
    }

    get taxReturn() {
        return this.currentTaxReturn;
    }

    saveTaxReturn() {
        this.taxReturn = this.currentTaxReturn;
    }

    restoreTaxReturn() {
        this.taxReturn = this.originalTaxReturn;
    }

    getTaxHeroes() {
        return this.heroService.getTaxHeroes();
    }

    getTaxHeroReturn(hero: Hero) {
        return this.heroService.getTaxHeroReturn(hero);
    }
}