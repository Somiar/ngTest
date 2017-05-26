import { Observable } from 'rxjs/Observable';
import { HeroTaxReturn, Hero } from './../hero/hero';
import { HeroTaxReturnService } from './hero-tax-return.service';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector:'hero-tax',
    templateUrl: './hero-tax-return.html',
    styleUrls: ['./hero-tax-return.css'],
    providers: [ HeroTaxReturnService ],
})

export class HeroTaxReturnComponent implements OnInit{
    title = 'HeroTax';
    names = ['Somiar', 'Angular'];
    taxheroes: Observable<Hero[]>;

    selectedTaxHero: HeroTaxReturn;
    message = '';

    constructor(private heroTaxReturnService: HeroTaxReturnService){
        this.taxheroes = heroTaxReturnService.getTaxHeroes();
    }

    @Input()
    set heroTaxReturn(taxInfo: HeroTaxReturn) {
        this.heroTaxReturnService.taxReturn = taxInfo;
    }

    get heroTaxReturn() {
        return this.heroTaxReturnService.taxReturn;
    }

    showTaxForm(hero: Hero) {
        //this.heroTaxReturnService.getTaxHeroReturn(hero).sub
        console.log(hero);
    }

    onSave() {
        
    }

    onCancel() {

    }

    @Output() close = new EventEmitter<void>();

    onClose() {
        this.close.emit();
    }

    ngOnInit() {
        console.log(this.taxheroes);
    }

}