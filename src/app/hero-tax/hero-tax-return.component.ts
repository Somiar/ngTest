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
    taxHeroes: Observable<Hero[]>;

    selectedTaxHeroReturn: HeroTaxReturn;
    selectedTaxHero: boolean;
    message = '';

    constructor(private heroTaxReturnService: HeroTaxReturnService){
        this.taxHeroes = heroTaxReturnService.getTaxHeroes();
    }

    @Input()
    set heroTaxReturn(taxInfo: HeroTaxReturn) {
        this.heroTaxReturnService.taxReturn = taxInfo;
    }

    get heroTaxReturn() {
        return this.heroTaxReturnService.taxReturn;
    }

    showTaxForm(hero: Hero) {
        this.heroTaxReturnService.getTaxHeroReturn(hero).subscribe(x => {
            this.selectedTaxHeroReturn = x;
            this.selectedTaxHero = true;
            this.heroTaxReturn = this.selectedTaxHeroReturn;
        });
    }

    onSave() {
        this.heroTaxReturnService.saveTaxReturn();
        console.log(this.heroTaxReturn);
    }

    onCancel() {
        this.heroTaxReturnService.restoreTaxReturn();
    }

    @Output() close = new EventEmitter<void>();

    onClose() {
        this.close.emit();
        this.selectedTaxHero = false;
    }

    ngOnInit() {


    }

    logger(x) {
        return console.log(x);
    }

}