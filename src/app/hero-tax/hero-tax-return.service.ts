import { HeroService } from './../hero/hero.service';
import { Injectable } from '@angular/core';
import { HeroTaxReturn, Hero } from '../hero/hero';

@Injectable()
export class HeroTaxReturnService {
    private currentTaxReturn: HeroTaxReturn;
    private originalTaxReturn: HeroTaxReturn;

    constructor(private heroService: HeroService){}
    
    set taxReturn(taxInfo: HeroTaxReturn) {
        this.originalTaxReturn = taxInfo.clone();
        this.currentTaxReturn = taxInfo;
    }

    get taxReturn() {
        return this.currentTaxReturn;
    }

    saveTaxReturn() {
        this.taxReturn = this.currentTaxReturn;
        this.heroService.saveTaxHeroReturn(this.currentTaxReturn).subscribe();
    }

    restoreTaxReturn() {
        this.taxReturn = this.originalTaxReturn;
    }

    getCurrentTaxReturn() {
        console.log(this.originalTaxReturn,this.currentTaxReturn);
    }

    getTaxHeroes() {
        return this.heroService.getTaxHeroes();
    }

    getTaxHeroReturn(hero: Hero) {
        return this.heroService.getTaxHeroReturn(hero);
    }
}